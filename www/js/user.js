var app = angular.module('user', ['ngStorage'])


// User data 

app.factory("User", function($sessionStorage, $http, $q, OpenFB, AWSService) {

	var storage = $sessionStorage;

	var userID, name, first_name, last_name, school;

	var createUser = function(results) {

		var user = results[0].data;

		var me = {
				icon: results[1].data.data.url,
				id: user.id,
				name: user.first_name + ' ' + user.last_name[0],
				first_name: user.first_name,
				last_name: user.last_name,
				schoolID: null,
				school: null
			};

			parseCollege(me, user);

			storage['user'] = me;

			console.log('Current User: ');
			console.log(storage['user']);
	}


	var parseCollege = function(me, user) {
		// Check education array
		if (user.education.length === 0) {
			return;
		} else {
			for (var i = 0; i < user.education.length; i++) {
				if (user.education[i].type === 'College') {
					me.schoolID = user.education[i].school.id;
					me.school = user.education[i].school.name;
					return;
				}
			}
		}
	}

	var checkUser = function() {

		// Load AWS credentials
        AWSService.credentials().then(function() {
            AWSService.dynamo({
              params: {TableName: AWSService.UsersTable()}
            })
            .then(function(table) {
            	console.log('DynamoDB object: ' + table);

			// Query table for user
			console.log('Looking for user: ' + storage['user'].id + ' in table: ' + AWSService.UsersTable());
			table.getItem(
      		{
                Key: 
                	{
            			'userEmail': { S: storage['user'].id },
                		'school': { S: storage['user'].schoolID }
            		},
                TableName: AWSService.UsersTable()
            }, function(err, data) {
            	console.log(data);
            	if (data) {
            		console.log('User already exists');
            	} else {
            		console.log('Storing new user');
                    // Create an entry
                    var itemParams = {
                    	Item: {
                    		'userEmail': {S: storage['user'].id},
                    		'school': {S: storage['user'].schoolID}
                    	},
                    	ReturnItemCollectionMetrics: 'SIZE'
                    };
                    // Put entry in table
                    table.putItem(itemParams, 
                    	function(err, data) {
                    		console.log(data);
                    		console.log(err);
                	});  
                  }
           		});
			});
        });
	}


	return {
		getUser: function() {
			console.log('Retrieving user information');

			var userCall = OpenFB.get('/me');

			var iconCall = OpenFB.get('/me/picture',
				{
			  		"redirect": false,
			        "height": "100",
			        "type": "small",
			        "width": "100"
				});

			//var emailCall = OpenFB.get('/me/email');

			var deferred = $q.defer();
			var urlCalls = [userCall, iconCall];
			// they may, in fact, all be done, but this
			// executes the callbacks in then, once they are
			// completely finished.
			$q.all(urlCalls)
			.then(
				function(results) {
					deferred.resolve(
						JSON.stringify(results))

					console.log(results);

					// Create current user object
					createUser(results);

					// Check if user exists, else store
					checkUser();
				},
				function(errors) {
					deferred.reject(errors);
				},
				function(updates) {
					deferred.update(updates);
				});

			return deferred.promise;
		},
		user: function() {
			return storage['user'];
		},
		access_token: function() {
			return storage['fbtoken'];
		}
	}

});


app.factory("AWSHelper", function($sessionStorage, $http, $q, AWSService, User) {

	//var user = $sessionStorage['user'];
	//var user = User.user();
	//console.log(user);

	// Function to fix title capitalization
	var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
	var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
  
	titleCaps = function(title){
		var parts = [], split = /[:.;?!] |(?: |^)["Ò]/g, index = 0;
		
		while (true) {
			var m = split.exec(title);

			parts.push( title.substring(index, m ? m.index : title.length)
				.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
					return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
				})
				.replace(RegExp("\\b" + small + "\\b", "ig"), lower)
				.replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
					return punct + upper(word);
				})
				.replace(RegExp("\\b" + small + punct + "$", "ig"), upper));
			
			index = split.lastIndex;
			
			if ( m ) parts.push( m[0] );
			else break;
		}
		
		return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
			.replace(/(['Õ])S\b/ig, "$1s")
			.replace(/\b(AT&T|Q&A)\b/ig, function(all){
				return all.toUpperCase();
			});
	};
    
	function lower(word){
		return word.toLowerCase();
	}
    
	function upper(word){
	  return word.substr(0,1).toUpperCase() + word.substr(1);
	}

	var uploadImage = function(image, postID, imageID) {

		var d = $q.defer();
		var user = User.user();

		AWSService.credentials().then(function() {

		    // Handle the upload
		    AWSService.s3({
		    	params: {
		    		Bucket: AWSService.Bucket()
		    	}
		    }).then(function(s3) {

				// We have a handle of our s3 bucket
				var file = image; // Get the first file
				var key = user.id + '-' + postID + '-' + imageID;

				var params = {
					Key: key,
					Body: file,
					ACL: 'public-read'
					ContentType: 'image/jpeg',
				}

				console.log('Uploading image with key: ' + key);

				s3.putObject(params, function(err, data) {

					if (err) {
						console.log(err);
					}

					// The file has been uploaded
					// or an error has occurred during the upload
					if (!err) {
						console.log('Upload successful!');

						var params = {
							Bucket: AWSService.Bucket(), 
							Key: key, 
							//acl: 'public-read'
							//Expires: 900*4 
						};
						s3.getSignedUrl('getObject', params, 
							function(err, url) {
								
								if (err) {
									console.log(err);
								}

								// Now have signed url
								console.log('Image URL: ' + url);
						});
					}
				});
		  	});
		});
		return d.promise;
	};

	return {
		getReferences: function() {
			var user = User.user();
			var d = $q.defer();

			// Load AWS credentials
	        AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: AWSService.ReferencesTable()}
	            })
	            .then(function(table) {

				// Query table for user
				console.log('Getting references');
                    var itemParams = {
                    	'Select': "ALL_ATTRIBUTES",
                    	'KeyConditions': {
                			 'userID' : { 
                    			'AttributeValueList': [
                    				{
                    					'S': user.id
                    				}
                    			],
                    			'ComparisonOperator': 'EQ'
                			 }
                    	},
                    	'QueryFilter': {
                    		'status' : { 
                    			'AttributeValueList': [
                    				{
                    					'S': 'open'
                    				}
                    			],
                    			'ComparisonOperator': 'EQ'
            			 	}
                    	}
                    };
                    // Put entry in table
                    table.query(itemParams, 
                    	function(err, data) {
                    		console.log(data);

                    		var items = [];
					        if (data) {
					          angular.forEach(data.Items, function(item) {
					            items.push(
									{
										title: item.title.S,
										author: item.author.S,
										icon: item.icon.S,
										type: item.type.S,
										price: item.price.S,
										posts: item.posts.S,
										status: item.status.S
									}					            	
				            	);
					          });

					          d.resolve(items);
					        } else {
					          d.reject(err);
					        }
                	});  
				});
	        });
			return d.promise;
		},

		updateReferenceStatus: function(reference, status) {
			console.log('Deleting reference: ' + reference.title);

			var user = User.user();
			var d = $q.defer();

			var title;
			if (reference.type === 'sell') {
				title = 'sell ' + reference.title;
			}
			if (reference.type === 'buy') {
				title = 'buy ' + reference.title;
			}

			// Load AWS credentials
	        AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: AWSService.ReferencesTable()}
	            })
	            .then(function(table) {

				// Query table for user
                    var itemParams = {
                    	'Key': {
                			 'userID' : { 
                    			'S': user.id
                			 },
                			 'title' : {
                			 	'S': title
                			 }
                    	},
                    	"AttributeUpdates": {
					        "status": {
					            "Value": {
					                "S": status
					            },
					            "Action": "PUT"
					        }
					    },
					    // "Expected": {
					    //     "status": {
					    //     "ComparisonOperator":"EQ",
					    //     "AttributeValueList": [ { "S": "open"} ]
					    //     }
					    // },
					    "ReturnValues": "ALL_NEW"
                    };
                    // Put entry in table
                    table.updateItem(itemParams, 
                    	function(err, data) {
                    		console.log(data);

                    		if (data) {
					          d.resolve(data);
					        } else {
					          d.reject(err);
					        }
                	});  
				});
	        });
			return d.promise;
		},

		getPosts: function(book) {
			var user = User.user();
			console.log(user);

			var d = $q.defer();

			// Load AWS credentials
	        AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: AWSService.PostsTable()}
	            })
	            .then(function(table) {

				// Query table for user
				console.log('Getting posts for book: ' + book.title);
                    var itemParams = {
                    	'Select': "ALL_ATTRIBUTES",
                    	'KeyConditions': {
                			 'school' : { 
                    			'AttributeValueList': [
                    				{
                    					'S': user.schoolID
                    				}
                    			],
                    			'ComparisonOperator': 'EQ'
                			 }
                    	},
                    	'QueryFilter': {
                    		'title' : { 
                    			'AttributeValueList': [
                    				{
                    					'S': book.title
                    				}
                    			],
                    			'ComparisonOperator': 'EQ'
            			 	}
                    	}
                    };
                    // Put entry in table
                    table.query(itemParams, 
                    	function(err, data) {
                    		console.log(data);

                    		var items = [];
					        if (data) {
					          angular.forEach(data.Items, function(item) {
					            items.push(
									{
										author: item.author.S,
										comments: item.comments.S,
										condition: item.condition.S,
										edition: item.edition.N,
										icon: item.icon.S,
										id: item.postID.S,
										price: item.price.N,
										school: item.school.S,
										title: item.title.S,
										type: item.type.S,
										user: {
											name: item.user.S,
											icon: item.userIcon.S
										},
										userID: item.userID.S,
									}					            	
				            	);
					          });

					          d.resolve(items);
					        } else {
					          d.reject(err);
					        }
                	});  
				});
	        });
			return d.promise;
		},

		uploadPost: function(book, post) {
			var user = User.user();

			// Load AWS credentials
	        AWSService.credentials().then(function() {

	        	// Upload images
	        	for (var i = 0; i < post.images.length; i++) {

	        		uploadImage(post.images[i], post.id, i);
	        		// .then(function(imageURL) {
	        		// 	// Have image URL
	        		// 	post.images[i] = imageURL;
	        		// });
	        	}

	        	// Get Post table
	            AWSService.dynamo({
	              params: {TableName: AWSService.PostsTable()}
	            })
	            .then(function(table) {

					// Uploading post
					console.log('Uploading post: ' + post.id + ' in table: ' + AWSService.PostsTable());

                    var itemParams = {
                    	Item: {
                    		// User's id
	            			'userEmail': { 'S': user.id },
	            			'userID': { 'S': user.id },
	            			'user': { 'S': user.name },
	            			'userIcon': { 'S': user.icon },
	            			'school': { 'S': user.schoolID },
	                		'postID': { 'S': post.id },
	                		'title': { 'S': book.title },
	                		'author': { 'S': book.author },
	                		'icon': { 'S': book.icon },
	                		'type': { 'S': post.type },
	                		'edition': { 'N': post.edition.toString() },
	                		'condition': { 'S': post.condition },
	                		'price': { 'N': post.price.toString() },
	                		'comments': { 'S': post.comments },
	                		'status': { 'S': 'open' }
                    	}
                    };

                    console.log(itemParams.Item);

                    // Put entry in table
                    table.putItem(itemParams, 
                    	function(err, data) {
                    		//console.log(data);
                    		if (err) { console.log(err); }
                	});  
				});
	        });

			// Create new reference for book (new post = new reference)
			this.createReference(book, post);
		},

		createReference: function(book, post) {
			var user = User.user();

			// Load AWS credentials
	        AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: AWSService.ReferencesTable()}
	            })
	            .then(function(table) {

				// Query table for user
				console.log('Creating reference: ' + book.title + ' in table: ' + AWSService.PostsTable());
                    
					// Reference from own created post
                    var itemParams = {
                    	Item: {
                    		// User's id
	            			'userEmail': { 'S': user.id },
	            			'userID': { 'S': user.id },
	            			'school': { 'S': user.schoolID },
	            			// add post id to list
	                		'posts': { 'S': post.id },
	                		'price': { 'S': post.price.toString() },
	                		'title': { 'S': post.type + ' ' + book.title },
	                		'author': { 'S': book.author },
	                		'icon': { 'S': book.icon },
	                		'type': { 'S': post.type },
	                		'status': { 'S': 'open' }
                    	}
                    };

                    // Put entry in table
                    table.putItem(itemParams, 
                    	function(err, data) {
                    		//console.log(data);
                    		if (err) { console.log(err); }
                	});  
				});
	        });

		}

	}
});




app.provider('AWSService', function() {

	var self = this;
	self.arn = null;

	self.setArn = function(arn) {
		console.log('Setting ARN: ' + arn);
		if (arn) self.arn = arn;
	}

	self.$get = function($q, $cacheFactory) {
		// Cache dynamo objects
	    var dynamoCache = $cacheFactory('dynamo'),
	    	s3Cache = $cacheFactory('s3Cache');

	    var credentialsDefer = $q.defer(),
	      credentialsPromise = credentialsDefer.promise;
  	

	    return {
	    	credentials: function() {
	    		return credentialsPromise;
	    	},
	    	setToken: function(token, providerId) {
	    		console.log('Creating AWS Credentials with token: ' + token);
	    		var config = {
	    			RoleArn: self.arn,
	    			WebIdentityToken: token,
	    			//RoleSessionName: 'web-id',
	    			ProviderId: 'graph.facebook.com'
	    		}
	    		if (providerId) {
	    			config['ProviderId'] = providerId;
	    		}
	    		self.config = config;
	    		AWS.config.credentials = new AWS.WebIdentityCredentials(config);
	    		AWS.config.region = 'us-west-1';
	    		credentialsDefer.resolve(AWS.config.credentials);
	    	},
	    	dynamo: function(params) {
	    		console.log('Getting dynamoDB object with params: ');
	    		console.log(params);

	    		var d = $q.defer();
	    		credentialsPromise.then(function() {
					// Get cached table
					var table = dynamoCache.get(JSON.stringify(params));
					if (!table) {
						// New table
						var table = new AWS.DynamoDB(params);
						dynamoCache.put(JSON.stringify(params), table);
					};
					d.resolve(table);
				});
	    		return d.promise;
	    	},
	    	s3: function(params) {
			    var d = $q.defer();
			    credentialsPromise.then(function() {
					var s3Obj = s3Cache.get(JSON.stringify(params));
					if (!s3Obj) {
						var s3Obj = new AWS.S3(params);
						s3Cache.put(JSON.stringify(params), s3Obj);
					}
					d.resolve(s3Obj);
			    });
			    return d.promise;
		  	},
		  	Bucket: function() {
		  		return 'bgchan-swd';
		  	},
	    	UsersTable: function() {
	    		return 'users-stotle-dev';
	    	},
	    	PostsTable: function() {
	    		return 'posts-stotle-dev';
	    	},
	    	ReferencesTable: function() {
	    		return 'references-stotle-dev';	
	    	}
	    }

	}
	

});




