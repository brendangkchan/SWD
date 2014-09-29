var app = angular.module('chat', []);

app.factory("Chat", function($rootScope, $sessionStorage, $http, $q, $document, $ionicLoading, AWSService, User) {


	var appID;
	var myID;

	AWSService.credentials().then(function() {

		var user = User.user();

		var params, chatUser, chatService;
		 
		var QBAPP = {
			appID: '14462',
			authKey: 'k2QD8vdXacavtyN',
			authSecret: 'ufSKZZhOYOXjrz7'
		} 

		var fbToken = User.access_token();

		// JavaScript SDK initialization
		QB.init(QBAPP.appID, QBAPP.authKey, QBAPP.authSecret);
		 
		QB.createSession({provider:'facebook', keys: { token: fbToken }}, 
			function(error,response){
				//_this.sessionCallback(e,r);
				
				if (error) {
					console.log(error);
				}
				
				if (response) {
					console.log(response);

					appID = response.application_id;
					myID = response.user_id;

					var jid = response.user_id + '-' + appID + '@chat.quickblox.com';
					$sessionStorage.token = response.token;

					console.log('jid: ' + jid);

					QB.chat.connect({jid: jid, password: $sessionStorage.token}, function(error, roster) {
	  					// callback function
	  					
	  					if (error) {
							console.log(error);
						}

						if (roster) {
							console.log(roster);
						



							// var params = {
							//   filter: { field: 'full_name', param: 'in', value: ['Brendan Chan', 'Brendan C'] },
							//   order: { sort: 'desc', field: 'id' }
							// };
							// QB.users.listUsers(params, function(error, response){
							//   // callback function
							//   console.log(response);
							// });


							var filters = 
								//'number sender_id in ' + myID.toString() + ',' + userId.toString(),
								//'number receiver_id in ' + myID.toString() + ',' + userId.toString()
								//'number sender_id in 1590783'
								//'sender_id[nin]=1590783,1590784'
								//'receiver_id = 0'
								{ field: 'receiver_id', param: 'in', value: [234567, 234568] }
							;

								// Trigger call to get chat history from custom objects
								QB.data.list("chat_history", filters, function(error, response){
							//QB.data.list("chat_history", function(error, response){
									// callback function
									if (error) console.log(error);

									if (response) {
										console.log('Retrieved chat history');
										console.log(response);
									}
							});


						}


						console.log('Set listener');

						// General type listener
						QB.chat.addListener({name: 'message', type: 'chat'}, 
							function() {
							  // This is a handler - the user callback function
							  //console.log('Caught message!!!');
							});

						// Message listener
						QB.chat.onMessageListener = function(userId, message) {
  							// callback function
  							console.log('Message from: ' + message.extension.user + ': ');
  							console.log(message);


  					// 		var params = {
						 //  		// filter: 
						 //  		//{
						 //  			// { field: 'message', param: 'ne', value: 'Hey' },
						 //  			 //field: 'sender_id', param: 'or', value: [myID, userId] ,
						 //  			 // field: 'receiver_id', param: 'or', value: [myID, userId] 
						 //  		//},
							//   	order: { sort: 'desc', field: 'created_at' }
							// };

							var filters = [
								//'number sender_id in ' + myID.toString() + ',' + userId.toString(),
								//'number receiver_id in ' + myID.toString() + ',' + userId.toString()
								'string message in Hey'
							];

  							// Trigger call to get chat history from custom objects
  							QB.data.list("chat_history", filters, function(error, response){
							//QB.data.list("chat_history", function(error, response){
  								// callback function
  								if (error) console.log(error);

  								if (response) {
  									console.log('Retrieved chat history');
  									console.log(response);
  								}
							});
  							
						};



					});
				}
		});

	});


	return {
		send: function (receipient, body, reference) {

			QB.users.get({facebook_id: receipient}, function(error, response){
  				
				if (error) {
					console.log(error);
					$ionicLoading.show({ template: 'Oops! Please try again later', noBackdrop: true, duration: 2000 });
				}

  				if (response) {
  					var userID = response.id;
	  				var jid = userID + '-' + appID + '@chat.quickblox.com';

					console.log('Sending message to: ' + receipient);

					// Chat message
					var me = User.user();
					var extension = {
						title: reference.title,
						user: me.name,
						fbID: me.id,
						userIcon: me.icon
					};
					
					QB.chat.send(jid, {
						type: 'chat',
						body: body,
						extension: extension
					});

					// Chat history object
					var data = {
						sender_id: myID,
			  			receiver_id: userID,
			  			message: body,
			  			token: $sessionStorage.token,
						class: 'chat_history',

						title: reference.title,
						user: me.name,
						fbID: me.id,
						userIcon: me.icon
					}
					 
					QB.data.create("chat_history", data, function(err, response){

			  			if (err) {
			  				console.log(err);
			  			}
			  			if (response) {
			  				console.log('Created custom object');
			  				console.log(response);
			  			}
					});
				}

			});

			
		}
	}

});