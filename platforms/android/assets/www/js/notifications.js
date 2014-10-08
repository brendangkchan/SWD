var app = angular.module('notifications', ['ionic'])

// Notification Objects

// type: message, post status (bought/sold deleted), new posts (buy/sell)
// user
// userID
// userIcon
// title
// bookIcon
// body: determined by type
// read


// Notifications Factory

app.factory("Notifications", function (User) {

	var me = User.user();

	// Sort messages by book to consolidate


	// Add text
	// for (var i = 0; i < notifications.length; i++) {
	// 	var notification = notifications[i];

	// 	// Set Name
	// 	var name = notification.user.name
	// 	if (name === me.name) {
	// 		name = 'You';
	// 	}

	// 	if (notification.type === 'message') {
	// 		notifications[i].text = name + ' messaged you';
	// 	}
	// 	if (notification.type === 'buy') {
	// 		notifications[i].text = ' 5 new buyers';
	// 	}
	// 	if (notification.type === 'sell') {
	// 		notifications[i].text = ' 3 new sellers';
	// 	}
	// 	if (notification.type === 'sold') {
	// 		notifications[i].text = name + ' sold';
	// 	}
	// 	if (notification.type === 'bought') {
	// 		notifications[i].text = name + ' bought';
	// 	}
	// 	if (notification.type === 'deleted') {
	// 		notifications[i].text = name + ' deleted their post';
	// 	}
	// }
	var newNotifications = new Array();
	var oldNotifications = new Array();
	var messageNotifications = new Array();
	var newPostsNotifications = new Array();
	var postStatusNotifications = new Array();

	var addNotification = function(type, user, userID, userIcon, title, bookIcon, body) {
		notifications.push({ type: type, user: user, userID: userID, userIcon: userIcon, title: title, bookIcon: bookIcon, body: body });
	}

	consolidateMessageNotifications = function() {
		console.log('Consolidating message notifications');

		//Determine counts for each reference
		var counts = {};
		angular.forEach(messageNotifications, function(notification) {
			// New title
			if (!counts[notification.title]) {
				counts[notification.title] = 1;
			} 
			// Seen title
			else {
				counts[notification.title] = counts[notification.title] + 1;
			}
		});

		console.log(counts);

		var seenTitles = [];
		var consolidatedMessageNotifications = [];
		angular.forEach(messageNotifications, function(notification) {
			
			// Repeated title that hasn't been seen before
			if (counts[notification.title] > 1 && seenTitles.indexOf(notification.title) < 0) {
				notification.body = counts[notification.title] + ' new messages';
				seenTitles.push(notification.title);
				consolidatedMessageNotifications.push(notification);
				console.log(notification);
			} 
			// Unrepeated title, add as is
			if (counts[notification.title] === 1) {
				consolidatedMessageNotifications.push(notification);
				console.log(notification);
			}
		});

		// Set new notifications
		angular.copy(consolidatedMessageNotifications, messageNotifications);

		console.log(messageNotifications);
	}


	// Create a notification for a given conversation
	createMessageAndPostStatusNotifications = function(reference, conversation) {

		// Get post status and read status
		var status = conversation.status;
		var read = conversation.read[me.id];
		console.log('Conversation with: ' + conversation.name + ' STATUS: ' + status + ' READ: ' + read);

		var otherUser = getOtherUser(conversation, me.id);

		var notification = {
			type: 'message',
			user: otherUser.name,
			userID: otherUser.id,
			userIcon: otherUser.icon,
			title: reference.title,
			bookIcon: reference.icon,
			read: false
		}

		// New messages
		if (status === 'open' && !read) {
			notification.body = 'New message from ' + conversation.name;
			console.log(notification.body);
			messageNotifications.push(notification);
			console.log(messageNotifications);
		}

		// Change in post status
		else if (status !== 'open' && !read) {
			console.log('Change in post status');
			switch (conversation.status) {
				case 'deleted':
					notification.body = conversation.name + ' has deleted their post';
					break;
				case 'bought':
					notification.body = conversation.name + ' has bought';
					break;
				case 'sold':
					notification.body = conversation.name + ' has sold';
					break;
			}
			console.log(notification);
			postStatusNotifications.push(notification);
		}

		// No changes
		else {
			console.log('No changes');
			return;
		}
	}

	// Returns name, id, icon
	// May not need
	getOtherUser = function(conversation, myID) {
		if (conversation.posterId === myID) {
			return {
				id: conversation.messengerId,
				name: conversation.messengerName,
				icon: conversation.messengerIcon
			}
		} 
		if (conversation.messengerId === myID) {
			return {
				id: conversation.posterId,
				name: conversation.posterName,
				icon: conversation.posterIcon
			}
		}
	}

	return {
		// Called after conversations are retrieved on loading home page
		createMessageAndPostStatusNotifications: function(references) {

			console.log('Creating notifications from references');

			for (var j = 0; j < references.length; j++) {
				
				var reference = references[j];
				console.log('Reference: ' + reference.title);

				for (var i = 0; i < reference.conversations.length; i++) {
					createMessageAndPostStatusNotifications(reference, reference.conversations[i]);
				}
			}

			console.log(messageNotifications);
		},

		consolidateMessageNotifications: function() {
			consolidateMessageNotifications();

			angular.copy(messageNotifications, newNotifications);
		},

		consolidateNotifications: function() {
			console.log('Consolidating all notifications');

			angular.forEach(postStatusNotifications, function(notification) {
				newNotifications.push(notification);
			});
		},


		createNewPostNotification: function() {

		},

		markNotificationsSeen: function() {

			angular.forEach(newNotifications, function(notification) {
				notification.read = true;
				oldNotifications.push(notification);
			});

			newNotifications = new Array();
		},

		all: function() {
			return newNotifications;
		}
	}
})