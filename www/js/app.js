// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'references', 'search'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // Home state to encompass tab and conversation state
    .state('home', {
      url: "/home",
      abstract: true,
      template: '<ui-view/>'  // Where children plug into
    })

    // setup an abstract state for the tabs directive
    .state('home.tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:
    // Appends url to /tab/[append]
    .state('home.tab.selling', {
      url: '/selling',
      views: {
        'tab-selling': {
          templateUrl: 'templates/tab-selling.html',
          controller: 'ReferenceSellCtrl'
        }
      }
    })

    .state('home.tab.buying', {
      url: '/buying',
      views: {
        'tab-buying': {
          templateUrl: 'templates/tab-selling.html',
          controller: 'ReferenceBuyCtrl'
        }
      }
    })

    // Conversation 
    .state('home.conversation', {
      url: '/conversation/:referenceIndex/:conversationIndex',
      templateUrl: 'templates/conversation.html',
      controller: 'ConversationCtrl'
    })

    // Search
    .state('home.search', {
      url: '/search/:query',
      templateUrl: 'templates/search.html',
      controller: 'SearchCtrl'
    })

    // Posts
    .state('home.posts', {
      url: '/posts',
      templateUrl: 'templates/posts.html',
      controller: 'PostCtrl',
      abstract: true
    })

    // Posts Selling
    .state('home.posts.selling', {
      url: '/selling',
      views: {
        'tab-posts-selling': {
          templateUrl: 'templates/tab-posts.html',
          controller: 'PostCtrl'
        }
      }
    })

    // Posts Buying
    .state('home.posts.buying', {
      url: '/buying',
      views: {
        'tab-posts-buying': {
          templateUrl: 'templates/tab-posts.html',
          controller: 'PostCtrl'
        }
      }
    })

    // Conversation page
    // .state('tab.conversation', {
    //   url: '/conversation/:referenceIndex/:conversationIndex',
    //   views: {
    //     'tab-selling': {
    //       templateUrl: 'templates/conversation.html',
    //       controller: 'ConversationCtrl'
    //     }
    //   }
    // })


    // .state('home.tab.friends', {
    //   url: '/friends',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'templates/tab-friends.html',
    //       controller: 'FriendsCtrl'
    //     }
    //   }
    // })
    // .state('home.tab.friend-detail', {
    //   url: '/friend/:friendId',
    //   views: {
    //     'tab-friends': {
    //       templateUrl: 'templates/friend-detail.html',
    //       controller: 'FriendDetailCtrl'
    //     }
    //   }
    // })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/tab/selling');



})

// Show search only on reference pages
.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {

}]);

