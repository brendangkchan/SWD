// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngAnimate', 'starter.controllers', 'starter.services', 'references', 'search', 'posts', 'conversation', 'chat', 'notifications', 'user', 'openfb', 'aws', 'sociogram.controllers', 'ngS3upload.services', 'signup', 'base64', 'textbooks'])

.run(function($rootScope, $state, $ionicPlatform, $window, OpenFB) {
  $ionicPlatform.ready(function() {

    // Clear session storage for testing
    window.sessionStorage.clear();

    // hide the status bar using the StatusBar plugin
    //StatusBar.hide();

    OpenFB.init('1455184368090857');

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

    var pushNotification;

    // document.addEventListener("deviceready", function(){
    //     //pushNotification = window.plugins.pushNotification;
    //     console.log('Device is now ready!');
    // });


    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.name !== "home.login" && toState.name !== "home.logout" && !$window.sessionStorage['fbtoken']) {
        console.log('Going to login state');
        $state.go('home.login');
        event.preventDefault();
      }
    });
    $rootScope.$on('OAuthException', function() {
      $state.go('home.login');
    });


  });
})

.config(function($stateProvider, $urlRouterProvider, AWSServiceProvider, $compileProvider) {

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

  // Configuration
  AWSServiceProvider.setArn('arn:aws:iam::395994426563:role/stotledev');


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

    // Login state
    .state('home.login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginCtrl"
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
          templateUrl: 'templates/tab-references.html',
          controller: 'ReferenceSellCtrl'
        }
      }
    })

    .state('home.tab.buying', {
      url: '/buying',
      views: {
        'tab-buying': {
          templateUrl: 'templates/tab-references.html',
          controller: 'ReferenceBuyCtrl'
        }
      }
    })

    // Conversation 
    .state('home.conversation', {
      url: '/conversation',
      templateUrl: 'templates/conversation.html',
      controller: 'ConversationCtrl'
    })

    // Search
    .state('home.search', {
      url: '/search/:query',
      templateUrl: 'templates/results.html',
      controller: 'ResultsCtrl'
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
          controller: 'PostSellCtrl'
        }
      }
    })

    // Posts Buying
    .state('home.posts.buying', {
      url: '/buying',
      views: {
        'tab-posts-buying': {
          templateUrl: 'templates/tab-posts.html',
          controller: 'PostBuyCtrl'
        }
      }
    })

    // School
    .state('home.signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
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


  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/home/tab/selling');
  //$urlRouterProvider.otherwise('/home/posts/selling');
  $urlRouterProvider.otherwise('/home/login');
  //$urlRouterProvider.otherwise('/home/signup');



})

// Show search only on reference pages
.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {

}]);

