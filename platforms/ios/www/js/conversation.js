var app = angular.module('conversation', []);


// Conversation Controller
app.controller('ConversationCtrl', function($rootScope, $scope, $stateParams, References, $window, $ionicModal, $ionicScrollDelegate, $timeout, Chat, User) {

  // Setting $scope variables
  $scope.reference = References.getSelectedReference();
  $scope.conversation = References.getSelectedConversation();

  console.log('Loading conversation with: ' + $scope.conversation.name);
  console.log('Comments: ' + $scope.conversation.comments);

  // Back Navigation
  $scope.back = function () {
    //$window.history.back();
    $rootScope.back();
  }

  var me = User.user();

  // Methods for input directive

  var alternate,
  isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  // Send Message
  $scope.sendMessage = function() {
    console.log('New message: ' + $scope.data.message);

    // Message id
    var id = Math.random().toString(36).slice(2);

    // Add message to conversation
    $scope.conversation.messages.push({
      user: me.name,
      userIcon: me.icon,
      body: $scope.data.message,
      id: id
    });


    // Actual chat
    Chat.send($scope.conversation.id, $scope.data.message, $scope.reference);


    
    // Update conversation preview
    $scope.conversation.preview = $scope.data.message;

    // Clean up
    delete $scope.data.message;
    
    $ionicScrollDelegate.scrollBottom(false);
  }

  // Show Keyboard
  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(false);
    }, 300);
  }

  // Hide Keyboard
  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  }

  // Message Data
  $scope.data = {};
  $scope.myId = '12345';


  // Initialization
  var init = function() {
    console.log("Initializing ConversationCtrl")
    //$ionicScrollDelegate.scrollBottom(true);

    // TODO: Load bottom of list without scrolling
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(false);
    }, 0);
  };


  // Image Modal
  $ionicModal.fromTemplateUrl('templates/image-modal.html', {
    id: 'image',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.imageModal = modal;
  });

  $scope.openImage = function(image) {
    $scope.image = image;
    $scope.imageModal.show();
  }

  $scope.closeImage = function() {
    $scope.imageModal.hide();
  }


  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.imageModal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
  });
  $scope.$on('modal.shown', function() {
  });

  init();
})


// Messaging Input Directive
app.directive('input', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      'returnClose': '=',
      'onReturn': '&',
      'onFocus': '&',
      'onBlur': '&'
    },
    link: function(scope, element, attr) {
      element.bind('focus', function(e) {
        if (scope.onFocus) {
          $timeout(function() {
            scope.onFocus();
          });
        }
      });
      element.bind('blur', function(e) {
        if (scope.onBlur) {
          $timeout(function() {
            scope.onBlur();
          });
        }
      });
      element.bind('keydown', function(e) {
        if (e.which == 13) {
          if (scope.returnClose) element[0].blur();
          if (scope.onReturn) {
            $timeout(function() {
              scope.onReturn();
            });
          }
        }
      });
    }
  }
})

