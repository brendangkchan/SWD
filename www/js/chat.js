var app = angular.module('chat', []);

app.factory("Chat", function($rootScope, $sessionStorage, $http, $q, $document, AWSService, User) {


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

					var jid = response.user_id + '-' + response.application_id + '@chat.quickblox.com';
					//var user_id = response.user_id;
					var token = response.token;

					console.log('jid: ' + jid);

					QB.chat.connect({jid: jid, password: token}, function(error, roster) {
	  					// callback function
	  					
	  					if (error) {
							console.log(error);
						}

						if (roster) {
							console.log(roster);
						}

						console.log('Set listener');

						// General type listener
						QB.chat.addListener({name: 'message', type: 'chat'}, 
							function() {
							  // This is a handler - the user callback function
							  console.log('Caught message!!!');
							});

						// Message listener
						QB.chat.onMessageListener = function(userId, message) {
  							// callback function
  							console.log(userId + ': ');
  							console.log(message);
						};

						console.log('Sending message');

						QB.chat.send(jid, {
							type: 'chat',
							body: 'Hello world!',

							extension: {
								full_name: 'Garry',
								age: '25',
							}
						});

					});
				}
		});

	});


	return {

	}

});