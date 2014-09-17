var app = angular.module('chat', []);

app.factory("Chat", function($rootScope, $sessionStorage, $http, $q, $document, AWSService, User) {


	AWSService.credentials().then(function() {

		var user = User.user();

		var params, chatUser, chatService;
		 
		//params = {login: user.id, password: user.id};
		 
		var QBAPP = {
			appID: '14462',
			authKey: 'k2QD8vdXacavtyN',
			authSecret: 'ufSKZZhOYOXjrz7'
		} 

		var fbToken = User.access_token();

		// JavaScript SDK initialization
		QB.init(QBAPP.appID, QBAPP.authKey, QBAPP.authSecret);
		//QB.init('14462', 'k2QD8vdXacavtyN', 'ufSKZZhOYOXjrz7');
		 
		QB.createSession({provider:'facebook', keys: { token: fbToken }}, 
			function(error,response){
				//_this.sessionCallback(e,r);
				
				if (error) {
					console.log(error);
				}
				
				if (response) {
					console.log(response);

					// QB.chat.roster.get(function(roster) {
	  		// 			// callback function
	  		// 			console.log(roster);
					// });

					// QB.chat.connect({jid: user.id, password: user.id}, function(err, roster) {
	  		// 			// callback function
	  					
	  		// 			if (error) {
					// 		console.log(error);
					// 	}
					// });
				}
		});

	});

	// QuickBlox session creation
	// QB.createSession(params, function(err, result) {
	// 	if (err) {
	// 		console.log(err.detail);
	// 	} else {
	// 		chatUser = {
 //                id: result.user_id,
 //    			pass: params.password
 //        	};

 //        	console.log('Creating session with user: ' + chatUser.id);
	 
	// 		connectChat();
	// 	}
	// });

	//QB.chat.roster.add('user1');
	 
	function connectChat() {
		chatService = new QBChat({
			onConnectFailed: onConnectFailed,
			onConnectSuccess: onConnectSuccess,
			onConnectClosed: onConnectClosed,
			onChatMessage: onChatMessage
		});
	 
		console.log('Connecting to chat service...');

		// connect to QB chat service
		chatService.connect(chatUser);
	}
	 
	/* Callbacks
	------------------------------------------------------*/
	// Connection is failed
	function onConnectFailed() {
		console.log('Chat connection failed!');
	}
	 
	// Connection is success
	function onConnectSuccess() {
		console.log('Chat connection success!');

		chatService.startAutoSendPresence(60);
	}
	 
	// Connection is closed
	function onConnectClosed() {
		console.log('Chat connection closed');
	}

	return {
		loadQBScript: function() {
			console.log('Loading QuickBlox script file');

			var d = $q.defer();

			function onScriptLoad() {
				// Load client in the browser
				$rootScope.$apply(function() { d.resolve(window.d3); });
			}

			// Create a script tag with d3 as the source
			// and call our onScriptLoad callback when it
			// has been loaded
			var scriptTag = $document[0].createElement('script');
			scriptTag.type = 'text/javascript'; 
			scriptTag.async = true;
			scriptTag.src = 'js/quickblox.min.js';

			scriptTag.onreadystatechange = function () {
				if (this.readyState == 'complete') onScriptLoad();
			}
			scriptTag.onload = onScriptLoad;

			var s = $document[0].getElementsByTagName('body')[0];
			s.appendChild(scriptTag);

			return d.promise;
		},

		initializeQB: function(QB) {
			var user = User.user();

			var params, chatUser, chatService;
			 
			params = {login: user.id, password: user.id};
			 
			// JavaScript SDK initialization
			//QB.init(QBAPP.appID, QBAPP.authKey, QBAPP.authSecret);
			QB.init('14462', 'k2QD8vdXacavtyN', 'ufSKZZhOYOXjrz7');
			 
			// QuickBlox session creation
			QB.createSession(params, function(err, result) {
				if (err) {
					console.log(err.detail);
				} 
				else {
					chatUser = {
		                id: result.user_id,
		    			pass: params.password
	        		};

        			console.log('Creating session with user: ' + chatUser.id);
	 
					connectChat();
				}
			});
		}
	}

});