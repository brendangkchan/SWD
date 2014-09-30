var app = angular.module('chat', []);

app.factory("Chat", function($rootScope, $sessionStorage, $http, $q, $document, $ionicLoading, AWSService, AWSHelper, User, References) {


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
  							console.log('New message from: ' + message.extension.sender);
  							console.log(message);

  							// Get S3 updated conversation
		                    AWSHelper.getS3Conversation(message.extension.conversation)
		                      .then(function(retrievedConversation) {
		                      		// Update conversation
		                          	References.updateConversation(retrievedConversation);
		                      });
  							
						};
					});
				}
		});

	});


	return {
		send: function (conversation, reference, message) {

			var me = User.user();
			var receipient;

			// Send to user that is not me
			receipient = conversation.posterId;
			if (conversation.posterId === me.id) {
				receipient = conversation.messengerId;
			} 

			// Message body
			var conversationKey = conversation.key;
			var body = message;
			console.log('Sending message: ' + message);

			console.log('ID of receipient: ' + receipient);

			// Get receipient QB id
			QB.users.get({facebook_id: receipient}, function(error, response){
  				
				if (error) {
					console.log(error);
					$ionicLoading.show({ template: 'Oops! Please try again later', noBackdrop: true, duration: 2000 });
				}

  				if (response) {
  					console.log(response);
  					var userID = response.id;
	  				var jid = userID + '-' + appID + '@chat.quickblox.com';
	  				

					console.log('Sending message to: ' + response.id);

					// Chat message
					var extension = {
						conversation: conversationKey,
						sender: me.name
					};
					
					// Send message
					QB.chat.send(jid, {
						type: 'chat',
						body: body,
						extension: extension
					});
				}

			});

			
		}
	}

});