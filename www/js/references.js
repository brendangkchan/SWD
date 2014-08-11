var app = angular.module('references', [])


app.factory("References", function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var references = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg', count: 3, conversations: []},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg', count: 2, conversations: []},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg', count: 4, conversations: []},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg', count: 1, conversations: []}
  ];

  var conversations = [
    { id: 0, name: 'Beyonce K', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 10, icon: 'img/test/user1.jpg', messages: []},
    { id: 1, name: 'Jay Z', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 8, icon: 'img/test/user2.jpg', messages: []},
    { id: 2, name: 'Beyonce C', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 10, icon: 'img/test/user1.jpg', messages: []},
    { id: 3, name: 'Jay D', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 8, icon: 'img/test/user2.jpg', messages: []}
  ];

  var messages = [
    { name: 'one', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'two', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'three', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'four', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  ];


  for (var i=0; i<4; i++) {
    for (var j=0; j<8; j++) {

      var id = Math.random().toString(36).slice(2);

      conversations[i].messages.push(
        {
          name: 'name',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          id: id
        });
    }
    references[i].conversations.push(conversations[i]);
  }

  return {
    all: function() {
      return references;
    },
    get: function(referenceId) {
      // Simple index lookup
      return references[referenceId];
    },
    conversations: function() {
      return conversations;
    }
  }
});

// References param is reference to factory
app.controller('ReferenceSellCtrl', function($scope, References, $location){

  // References factory returns its internal variable "references"
  $scope.references = References.all();
  $scope.conversations = References.conversations();

  $scope.toggleReference = function(reference) {
    if ($scope.isReferenceShown(reference)) {
      $scope.shownReference = null;
    } else {
      $scope.shownReference = reference;
    }
  };
  
  $scope.isReferenceShown = function(reference) {
    return $scope.shownReference === reference;
  };

  $scope.removeReference = function(reference) {
    console.log("Removing reference: " + reference.id);
    $scope.references.splice($scope.references.indexOf(reference), 1);
  };

});

// References param is reference to factory
app.controller('ReferenceBuyCtrl', function($scope, References, $location){

  // References factory returns its internal variable "references"
  $scope.references = References.all();
  $scope.conversations = References.conversations();

  $scope.toggleReference = function(reference) {
    console.log($location.url());
    if ($scope.isReferenceShown(reference)) {
      $scope.shownReference = null;
    } else {
      $scope.shownReference = reference;
    }
  };
  
  $scope.isReferenceShown = function(reference) {
    return $scope.shownReference === reference;
  };

  $scope.removeReference = function(reference) {
    console.log("Removing reference: " + reference.id);
    $scope.references.splice($scope.references.indexOf(reference), 1);
  };

});

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

// Conversation Controller
app.controller('ConversationCtrl', function($scope, $stateParams, References, $window, $ionicScrollDelegate, $timeout) {

  // Setting $scope variables
  console.log("Reference: " + $stateParams.referenceIndex + " Conversation: " + $stateParams.conversationIndex);
  $scope.reference = References.get($stateParams.referenceIndex);
  $scope.conversation = $scope.reference.conversations[$stateParams.conversationIndex];

  // LOGGING HERE BREAKS CODE
  //console.log(reference);
  //console.log(conversation);

  // Back Navigation
  $scope.back = function () {
    $window.history.back();
  }



  // Methods for input directive

  var alternate,
  isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  // Send Message
  $scope.sendMessage = function() {
    //alternate = !alternate;
    var id = Math.random().toString(36).slice(2);

    $scope.conversation.messages.push({
      //userId: alternate ? '12345' : '54321',
      //text: $scope.data.message
      name: "name",
      body: $scope.data.message,
      id: id
    });
    console.log($scope.data.message);
    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);
  }

  // Show Keyboard
  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
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
      $ionicScrollDelegate.scrollBottom(true);
    }, 0);
  };

  init();
})




// Conversation Modal
app.directive('conversationModal', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      conversationName: '=name'
    },
    //replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'templates/results-modal.html'
  };
});