angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});


angular.module('sociogram.controllers', ['user'])
.controller('AppCtrl', function ($scope, $state, OpenFB) {
	$scope.logout = function () {
		OpenFB.logout();
		$state.go('app.login');
	};
	$scope.revokePermissions = function () {
		OpenFB.revokePermissions().then(
			function () {
				$state.go('app.login');
			},
			function () {
				alert('Revoke permissions failed');
			});
	};
})
.controller('LoginCtrl', function ($scope, $state, OpenFB, User, References) {
	$scope.facebookLogin = function () {

		OpenFB.logout(function(response) {
  			// user is now logged out
  			console.log(response);
		});

		OpenFB.login('email,public_profile,user_education_history,publish_stream').then(
			function () {
				console.log('Login successful');

				User.getUser();
				// .then(
				// 	function(response) {




						// References.getReferences()
						// 	.then(function() {
						// 		References.getConversations()
						// 			.then(function(conversations) {
						// 				console.log(conversations);

						// 				// Give back conversations to be put into references
						// 				References.setConversations(conversations)
						// 				//$state.go('home.tab.selling');
						// 				$state.go('home.signup');
						// 			});
						// 	});
						
				// 	}
				// );

				
			},
			function () {
				alert('OpenFB login failed');
			});
	};
})
.controller('ShareCtrl', function ($scope, OpenFB) {
	$scope.item = {};
	$scope.share = function () {
		OpenFB.post('/me/feed', $scope.item)
		.success(function () {
			$scope.status = "This item has been shared on OpenFB";
		})
		.error(function(data) {
			alert(data.error.message);
		});
	};
})
.controller('ProfileCtrl', function ($scope, OpenFB) {
	OpenFB.get('/me').success(function (user) {
		$scope.user = user;
	});
})
.controller('PersonCtrl', function ($scope, $stateParams, OpenFB) {
	OpenFB.get('/' + $stateParams.personId).success(function (user) {
		$scope.user = user;
	});
})
.controller('FriendsCtrl', function ($scope, $stateParams, OpenFB) {
	OpenFB.get('/' + $stateParams.personId + '/friends', {limit: 50})
	.success(function (result) {
		$scope.friends = result.data;
	})
	.error(function(data) {
		alert(data.error.message);
	});
})
.controller('MutualFriendsCtrl', function ($scope, $stateParams, OpenFB) {
	OpenFB.get('/' + $stateParams.personId + '/mutualfriends', {limit: 50})
	.success(function (result) {
		$scope.friends = result.data;
	})
	.error(function(data) {
		alert(data.error.message);
	});
})
.controller('FeedCtrl', function ($scope, $stateParams, OpenFB, $ionicLoading) {
	$scope.show = function() {
		$scope.loading = $ionicLoading.show({
			content: 'Loading feed...'
		});
	};
	$scope.hide = function(){
		$scope.loading.hide();
	};
	function loadFeed() {
		$scope.show();
		OpenFB.get('/' + $stateParams.personId + '/home', {limit: 30})
		.success(function (result) {
			$scope.hide();
			$scope.items = result.data;
// Used with pull-to-refresh
$scope.$broadcast('scroll.refreshComplete');
})
		.error(function(data) {
			$scope.hide();
			alert(data.error.message);
		});
	}
	$scope.doRefresh = loadFeed;
	loadFeed();
});

