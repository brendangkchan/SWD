/*
 *	User Information

 	User fields:

 		icon: 		facebook icon url
 		id: 		facebook id
 		name: 		first name and last initial
 		schoolID: 	facebook school ID
 		school: 	facebook school name
 */



var app = angular.module('user', ['ngStorage']);

// User data 

app.factory("User", function($sessionStorage, $window, $http, $q, $state, OpenFB, AWSService, Textbooks) {

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

			//parseCollege(me, user);

			storage['user'] = me;

			return me;

			console.log('Current User: ');
			console.log(storage['user']);
	}


	// var parseCollege = function(me, user) {
	// 	// Check education array
	// 	if (user.education.length === 0) {
	// 		return;
	// 	} else {
	// 		for (var i = 0; i < user.education.length; i++) {
	// 			if (user.education[i].type === 'College') {
	// 				me.schoolID = user.education[i].school.id;
	// 				me.school = user.education[i].school.name;
	// 				return;
	// 			}
	// 		}
	// 	}
	// }

	var checkUser = function() {

		// Load AWS credentials
        AWSService.credentials().then(function() {
            AWSService.dynamo({
              params: {TableName: AWSService.UsersTable()}
            })
            .then(function(table) {

			// Query table for user
			console.log('Looking for user: ' + storage['user'].id + ' in table: ' + AWSService.UsersTable());
			table.getItem(
      		{
                Key: 
                	{
            			'userID': { S: storage['user'].id },
            		},
                TableName: AWSService.UsersTable()
            }, function(err, data) {
            	console.log(data)
	            	if (!angular.isUndefined(data.Item)) {
	            		console.log(data);
	            		console.log('User already exists');
	            		storage['user'].schoolID = data.Item.schoolID.S;
	            		$state.go('home.tab.selling');

	            		// WHERE TO GO AFTER LOGIN
	            		//$state.go('home.posts.selling'); 
	            	} else {
	            		// Get school
	            		console.log('New user');
	            		$state.go('home.signup'); 
	              	}
           		});
			});
        });
	}


	return {
		setSchool: function(school) {
			storage['user'].schoolID = school.id;
			storage['user'].school = school.name;
		},

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
			return window.sessionStorage['fbtoken'];
		},
		uploadUser: function(user) {

			// Load AWS credentials
        	AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: AWSService.UsersTable()}
	            })
	            .then(function(table) {

					// Query table for user
					console.log('Uploading user: ' + storage['user'].id + ' in table: ' + AWSService.UsersTable());

					// Create an entry
	                var itemParams = {
	                	Item: {
	                		'userID': {S: storage['user'].id},
	                		'schoolID': {S: storage['user'].schoolID}
	                	}
	                };
	                // Put entry in table
	                table.putItem(itemParams, 
	                	function(err, data) {
	                		console.log(err);
	            		});  
            	});
	        });
		}
	}

});




