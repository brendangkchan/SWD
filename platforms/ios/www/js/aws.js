var app = angular.module('aws', ['ngStorage']);


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
				//var key = user.id + '-' + postID + '-' + imageID + '.jpg';

				var key = image.substr(image.lastIndexOf('/') + 1);

				var params = {
					Key: key,
					Body: file,
					//ContentType: file.type
					//ACL: 'public-read',
					ContentType: 'image/jpeg'
				}

				console.log('Uploading image: ' + image);
				console.log('With key: ' + key);

				s3.putObject(params, function(err, data) {

					if (err) {
						console.log(err);
					}

					// The file has been uploaded
					// or an error has occurred during the upload
					if (!err) {
						console.log('Upload successful!');
						console.log(data);

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


 	var accessKeyId, secretAccessKey;


    var  uploadImageAlt = function(imageURI, postID, imageID) {
 
        var deferred = $.Deferred(),
            ft = new FileTransfer(),
            options = new FileUploadOptions();

        var user = User.user();

        var fileName = user.id + '-' + postID + '-' + imageID + '.jpg';


        var s3URI = encodeURI("http://bgchan-swd.s3.amazonaws.com/"),
	    //policyBase64 = "YOUR_BASE64_ENCODED_POLICY_FILE",
	    //signature = "YOUR_BASE64_ENCODED_SIGNATURE",
	    //awsKey = AWS.config.credentials.accessKeyId,
	    acl = "public-read";


	    var 
		    //crypto = require('crypto'),
		    crypto,
		    secret = secretAccessKey,
		    policy,
		    policyBase64,
		    signature;
	 
		policy = {
		    "expiration": "2020-12-31T12:00:00.000Z",
		    "conditions": [
		        {"bucket": "bgchan-swd"},
		        ["starts-with", "$key", ""],
		        {"acl": 'public-read'},
		        ["starts-with", "$Content-Type", ""],
        		["content-length-range", 0, 524288000]
		    ]
		};

		//["starts-with", "$key", ""],
		//["starts-with", "$Content-Type", ""],
        //["content-length-range", 0, 524288000]
		 
		//policyBase64 = new Buffer(JSON.stringify(policy), 'utf8').toString('base64');
		policyBase64 = encodeURI(JSON.stringify(policy)).toString(CryptoJS.enc.Base64);
		console.log("Policy Base64:");
		console.log(policyBase64);
		 
		//signature = crypto.createHmac('sha1', secret).update(policyBase64).digest('base64');
		signature = CryptoJS.SHA1(secret).toString(CryptoJS.enc.Base64);

		console.log("Signature:");
		console.log(signature);



        console.log('Uploading image: ' + imageURI);
		console.log('With key: ' + fileName);
 
        options.fileKey = "file";
        options.fileName = fileName;
        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
        var params = {
            "key": fileName,
            "AWSAccessKeyId": accessKeyId,
            "acl": acl,
        	"policy": policyBase64,
            "signature": signature,
            "Content-Type": "image/jpeg",
            //"file": "file"
            // with file: no key, without file: no awsaccess
        };

        //options.params = JSON.stringify(params);
        options.params = params;


        console.log('params:');
        console.log(JSON.stringify(options));
 
        // ft.upload(imageURI, s3URI,
        //     function (e) {
        //     	// Success
        //     	console.log(e);
        //         deferred.resolve(e);
        //     },
        //     function (e) {
        //     	// Fail
        //     	console.log(e);
        //         deferred.reject(e);
        //     }, 
        //     options);

 
        // return deferred.promise();

        return $http.post("http://bgchan-swd.s3.amazonaws.com/",
        		imageURI,
        		options);
 
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
										status: item.status.S,
										conversations: item.conversations.SS
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
										user: item.user.S,
										userIcon: item.userIcon.S,
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
	        AWSService.credentials().then(function(response) {

	        	console.log(angular.fromJson(response));

	        	accessKeyId = response.AccessKeyId;
	        	secretAccessKey = response.SecretAccessKey;

	        	console.log(response.data.Credentials.AccessKeyId);
	    		console.log(response.data.Credentials.SecretAccessKey);

	        	// Upload images
	        	for (var i = 0; i < post.images.length; i++) {

	        		//uploadImage(post.images[i], post.id, i);
	        		uploadImageAlt(post.images[i], post.id, i)
	        			.then(function (response) {
							console.log(response);
						});
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
	                		'status': { 'S': 'open' },
	                		'conversations': { 'SS': ['null'] }
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

	var accessKeyId, secretAccessKey;

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

	    		//console.log(AWS.config.credentials);

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

