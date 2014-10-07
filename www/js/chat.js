var app = angular.module('chat', []);

app.factory("Chat", function($rootScope, $sessionStorage, $http, $q, $document, $window, $ionicLoading, $base64, AWSService, AWSHelper, User, References) {


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

		// Get device info
		var platform, udid, channel, APIkey, pushType;
		var device = window.device;
		if (device.platform === 'Android') {
			platform = 'android';
			udid = device.uuid;
			channel = 'gcm';
			pushType = 'gcm';
			APIkey = 'AIzaSyBxIKoiwvDncYOXLLZUzayD-4uPtwGypdg';
		}
		if (device.platform === 'iOS') {
			platform = 'ios';
			//window.IDFVPlugin.getIdentifier(function(result){ udid = result; },function(error){ console.log(error); });
			udid = device.uuid;
			channel = 'apns';
			pushType = 'apns';
			APIkey = device.uuid;
		}
		 
		console.log('DEVICE INFO:');
		console.log(device.platform);
		console.log('PLATFORM: ' + platform);
		console.log('UDID: ' + udid);
		console.log('CHANNEL: ' + channel);
		console.log('PUSH TYPE: ' + pushType);
		console.log('APIKey: ' + APIkey);
			
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

						console.log('Setting listener');

						// General type listener
						QB.chat.addListener({name: 'message', type: 'chat'}, function() { });

						// Create push token
						QB.messages.tokens.create({ 
							environment: 'development', 
							client_identification_sequence: APIkey,
							udid: udid,
							platform: platform
						}, function(err, data) {
							//if (data) console.log(data);
						}); 

						// Suscribe to channels
						QB.messages.subscriptions.create({
							 notification_channels: channel 
						}, function(err, data) {
							if (err) console.log(err);
							if (data) console.log(data);

							QB.messages.subscriptions.list(function(err, data) {
								console.log('Listing subscriptions');
								//console.log(data);
							})
						}); 

						// Message listener
						QB.chat.onMessageListener = function(userId, message) {
  							// callback function
  							console.log('New message from: ' + message.extension.sender);
  							console.log(message);

  							var body = $base64.encode('New message from: ' + message.extension.sender);
  							//body = body.toString(CryptoJS.enc.Base64);

  							// console.log('Creating push event');
  							// QB.messages.events.create({
  							// 	notification_type: 'push',
  							// 	//push_type: pushType,
  							// 	environment: 'development',
  							// 	user: {
  							// 		ids: myID.toString()
  							// 	},
  							// 	message: body
  							// }, function(response) {
  							// 	if (response) console.log(response);
  							// })
  							

							References.getReferences()
						      .then(function() {
						       References.getConversations()
						         .then(function(conversations) {
						           console.log(conversations);

						           // Give back conversations to be put into references
						           References.setConversations(conversations)
						           //$state.go('home.tab.selling');

						         });
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