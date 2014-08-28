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
	      credentialsDefer = $q.defer(),
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
	    	UsersTable: function() {
	    		return 'users-stotle-dev';
	    	},
	    	PostsTable: function() {
	    		return 'posts-stotle-dev';
	    	}
	    }

	}
	

})


