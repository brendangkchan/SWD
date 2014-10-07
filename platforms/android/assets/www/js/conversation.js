var app = angular.module('conversation', []);


// Conversation Controller
app.controller('ConversationCtrl', function($rootScope, $scope, $stateParams, References, $window, $ionicModal, $ionicScrollDelegate, $timeout, Chat, User, AWSHelper) {

  // Setting $scope variables
  $scope.reference = References.getSelectedReference();
  $scope.conversation = References.getSelectedConversation();

  console.log('Loading conversation with: ' + $scope.conversation.name);

  var me = User.user();
  $scope.me = me;


  var referenceOnline, conversationOnline;

  // Initialization
  var init = function() {
    console.log("Initializing ConversationCtrl")

    referenceOnline = References.referenceOnline();
    conversationOnline = References.conversationOnline();


    if (conversationOnline) {
      console.log('Reference: YES');
      console.log('Conversation: YES');

      // Retrieve conversation if it exists in S3
      AWSHelper.getS3Conversation($scope.conversation)
        .then(function(retrievedConversation) {
          
          // Conversation exists, retrieved
          $scope.conversation = retrievedConversation;

          // Mark the conversation read
          AWSHelper.createS3Conversation($scope.conversation);
        });
    }
      


    // TODO: Load bottom of list without scrolling
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(false);
    }, 0);
  };


  // Methods for input directive
  var alternate,
  isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.updateConversation = function() {
    $scope.conversation = References.getSelectedConversation();
  };


  // Send Message
  $scope.sendMessage = function() {

    console.log('New message: ' + $scope.data.message);

    // Add message to conversation
    $scope.conversation.messages.push({
      user: me.name,
      userIcon: me.icon,
      body: $scope.data.message,
      time: new Date().toString()
    });

    // Update conversation preview
    $scope.conversation.preview = $scope.data.message;

    var message;
    angular.copy($scope.data.message, message);


    if (!referenceOnline) {
      // Create both
      console.log('Reference: NO');
      console.log('Conversation: NO');

      // REMOTE: Create reference
        AWSHelper.createReference(References.book(), References.post())
          .then(function(data) {

          // REMOTE: Add conversation to my (messenger) reference
          AWSHelper.addConversationToReference($scope.conversation, $scope.reference, 'me')
            .then(function(data) {

              // REMOTE: Add conversation to poster's reference
              AWSHelper.addConversationToReference($scope.conversation, $scope.reference, 'other')
                .then(function(data) {

                  // Create JSON conversation in S3
                  AWSHelper.createS3Conversation($scope.conversation)
                    .then(function() {
                        referenceOnline = true;
                        conversationOnline = true;

                        // Get S3 Conversation
                        AWSHelper.getS3Conversation($scope.conversation)
                          .then(function(retrievedConversation) {

                            $scope.conversation = retrievedConversation;
                            Chat.send($scope.conversation, $scope.reference, $scope.data.message);

                            // Clean up
                            delete $scope.data.message;
                            
                            $ionicScrollDelegate.scrollBottom(false);
                          });
                    });
              });
          });
        });
      
    }
    else if (referenceOnline && !conversationOnline) {
      // Create conversation
      console.log('Reference: YES');
      console.log('Conversation: NO');

      // REMOTE: Add conversation to my (messenger) reference
      AWSHelper.addConversationToReference($scope.conversation, $scope.reference, 'me')
        .then(function(data) {

          // REMOTE: Add conversation to poster's reference
          AWSHelper.addConversationToReference($scope.conversation, $scope.reference, 'other')
            .then(function(data) {

              // Create JSON conversation in S3
              AWSHelper.createS3Conversation($scope.conversation)
                .then(function(data) {
                    referenceOnline = true;
                    conversationOnline = true;

                    // Get S3 Conversation
                    AWSHelper.getS3Conversation($scope.conversation)
                      .then(function(retrievedConversation) {

                          $scope.conversation = retrievedConversation;
                          Chat.send($scope.conversation, $scope.reference, $scope.data.message);
                          // Clean up
                            delete $scope.data.message;
                            
                            $ionicScrollDelegate.scrollBottom(false);
                      });
                });
          });
      });
    }
    else {
      // Create JSON conversation in S3
      AWSHelper.createS3Conversation($scope.conversation)
        .then(function(data) {
            referenceOnline = true;
            conversationOnline = true;

            // Get S3 Conversation
            AWSHelper.getS3Conversation($scope.conversation)
              .then(function(retrievedConversation) {

                  $scope.conversation = retrievedConversation;
                  Chat.send($scope.conversation, $scope.reference, $scope.data.message);
                  // Clean up
                            delete $scope.data.message;
                            
                            $ionicScrollDelegate.scrollBottom(false);
              });
        });
    }


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
    //$ionicScrollDelegate.resize();
  }

  // Message Data
  $scope.data = {};


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

    // Back Navigation
  $scope.back = function () {
    //$window.history.back();
    $rootScope.back();
  }

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

