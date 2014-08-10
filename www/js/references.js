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
    for (var j=0; j<4; j++) {
      conversations[i].messages.push(messages[j]);
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

// Conversation Controller
app.controller('ConversationCtrl', function($scope, $stateParams, References) {

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
})


// function MyCtrl($scope, $ionicNavBarDelegate) {
//   $scope.goBack = function() {
//     $ionicNavBarDelegate.back();
//   };
// }


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