var app = angular.module('references', [])


app.factory("References", function($location, $localStorage) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var references = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg', count: '', conversations: [], type: 'sell'},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg', count: '', conversations: [], type: 'sell'},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg', count: '', conversations: [], type: 'buy'},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg', count: '', conversations: [], type: 'buy'}
  ];

  var conversations = [
    { id: 0, name: 'Beyonce K', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 10, icon: 'img/test/user1.jpg', messages: []},
    { id: 1, name: 'Jay Z', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 8, icon: 'img/test/user2.jpg', messages: []},
    { id: 2, name: 'Beyonce C', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 10, icon: 'img/test/user1.jpg', messages: []},
    { id: 3, name: 'Jay D', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 8, icon: 'img/test/user2.jpg', messages: []},
    { id: 4, name: 'Bae J', preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 8, icon: 'img/test/user1.jpg', messages: []}
  ];

  // Build conversations
  for (var i = 0; i < conversations.length; i++) {
    // Add ID
    var id = Math.random().toString(36).slice(2);
    conversations[i].id = id;

    // Add messages
    for (var j=0; j<8; j++) {
      var id = Math.random().toString(36).slice(2);
      conversations[i].messages.push(
        {
          name: 'name',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          id: id
        });
    }
  }

  // Build references
  for (var i = 0; i < references.length; i++) {
    references[i].conversations.push(conversations[i]);
    references[i].conversations.push(conversations[i+1]);
    references[i].count = references[i].conversations.length;
  }

  // Reference types
  var sell_references = references.slice(0, 2);
  var buy_references = references.slice(2);

  // Track expanded references
  var shownReferenceSell = null;
  var shownReferenceBuy = null;

  // Current conversation
  $localStorage.reference;
  $localStorage.conversation;
  var reference;
  var conversation;

  // Load last conversation after refresh

  if ($localStorage.reference != null) {
    console.log('Retrieving reference from storage');
    reference = $localStorage.reference;
  }
  if ($localStorage.conversation != null) {
    console.log('Retrieving conversation from storage');
    conversation = $localStorage.conversation;
  }

  // Add reference
  var addReference = function (book, post) {

    // Check for existing conversation
    if (conversationExists(post) != false) {
      return conversationExists(post);
    }

    // New conversation
    var conversation = { 
        id: post.id, 
        name: post.user.name, 
        preview: '', 
        price: post.price, 
        icon: post.user.icon, 
        messages: []
    };

    // References to add to
    var references;

    // Index of target reference
    var referenceIndex;

    // Conversation
    var conversationIndex;

    // Determine target references 
    if (post.type === 'sell') {
      references = sell_references;
    }
    else {
      references = buy_references;
    }

    // Reference already exists
    if (referenceExists(book, post) !== false) {

      // Index of matched reference
      referenceIndex = referenceExists(book, post);

      conversationIndex = references[referenceIndex].conversations.length;

      // Add new conversation to existing reference
      references[referenceIndex].conversations.push(conversation);
      references[referenceIndex].count++;
      reference = references[referenceIndex];

      console.log('Adding conversation with: ' + conversation.name + ' to Reference id: ' + referenceIndex);
    }

    // New reference
    else {
      referenceIndex = references.length;
      conversationIndex = 0;
    
      // New book
      reference = { 
        id: referenceIndex, 
        title: book.title, 
        author: book.author, 
        icon: book.icon, 
        count: 1, 
        conversations: [conversation],
        type: post.type
      };

      // Push new reference
      references.push(reference);

      console.log('Adding new reference id: ' + referenceIndex);
    }

    // Set current conversation
    $localStorage.reference = reference;
    $localStorage.conversation = conversation;
    console.log($localStorage.conversation);
    
    return {
      referenceIndex: referenceIndex,
      conversationIndex: conversationIndex
    };

      //console.log(reference);
    
  };

  // Check if post already exists
  var conversationExists = function (post) {
    console.log('Checking if conversation: ' + post.user.name + ' in ' + post.type);

    // References to check
    var references;

    if (post.type === 'sell') {
      references = sell_references;
    }
    else {
      references = buy_references;
    }

    // Check each reference
    for (var i = 0; i < references.length; i++) {
      // Check each conversation
      for (var j = 0; j < references[i].conversations.length; j++) {
        // Post matches existing conversation
        if (post.id === references[i].conversations[j].id) {
          console.log("Matching conversation found!");
          console.log(post.id);
          console.log(references[i].conversations[j].id);

          // Set current conversation
          $localStorage.reference = references[i];
          $localStorage.conversation = references[i].conversations[j];

          return {referenceIndex: i, conversationIndex: j};
        }
      }
    }
    // No conversation match
    console.log('No matching conversation!');
    return false; 
  }

  // Check if reference already exists
  var referenceExists = function (book, post) {
    console.log('Checking if book: ' + book.title + ' in ' + post.type);

    // References to check
    var references;

    if (post.type === 'sell') {
      references = sell_references;
    }
    else {
      references = buy_references;
    }

    // Check each reference
    for (var i = 0; i < references.length; i++) {
      // Check each conversation
      if (book.title === references[i].title) {
        console.log('Matching book found!');
        return i;
      }
    }
    // No conversation match
    console.log('No matching book!');
    return false; 
  }



  return {
    all: function() {
      return references;
    },
    selling: function() {
      return sell_references;
    },
    buying: function() {
      return buy_references;
    },
    get: function(referenceId) {
      // Simple index lookup
      return references[referenceId];
    },
    conversations: function() {
      return conversations;
    },
    setShownReferenceSell: function (reference) {
      shownReferenceSell = reference;
    },
    getShownReferenceSell: function () {
      return shownReferenceSell;
    },
    setShownReferenceBuy: function (reference) {
      shownReferenceBuy = reference;
    },
    getShownReferenceBuy: function () {
      return shownReferenceBuy;
    },
    selectSellConversation: function (referenceIndex, conversationIndex) {
      console.log('Selected Selling Reference: ' + referenceIndex + ' Conversation: ' + conversationIndex);
      $localStorage.reference = sell_references[referenceIndex];
      $localStorage.conversation = sell_references[referenceIndex].conversations[conversationIndex];

      reference = $localStorage.reference;
      conversation = $localStorage.conversation;
    },
    selectBuyConversation: function (referenceIndex, conversationIndex) {
      console.log('Selected Buying Reference: ' + referenceIndex + ' Conversation: ' + conversationIndex);
      $localStorage.reference = buy_references[referenceIndex];
      $localStorage.conversation = buy_references[referenceIndex].conversations[conversationIndex];

      reference = $localStorage.reference;
      conversation = $localStorage.conversation;

      console.log(conversation);
    },
    getSelectedReference: function() {
      return reference;
    },
    getSelectedConversation: function() {
      return conversation;
    },
    addReference: function (book, post) {
      // returns index of reference, newly created or previous
      var indices = addReference(book, post);

      reference = $localStorage.reference;
      conversation = $localStorage.conversation;

      return indices;
    }
  }
});

// Reference Sell Tab Controller

app.controller('ReferenceSellCtrl', function($scope, References, $location, $localStorage){

  //$localStorage.$reset();

  // Load references and conversations
  $scope.references = References.selling();
  $scope.conversations = References.conversations();

  // Store clicked conversation
  $scope.selectConversation = function (referenceIndex, conversationIndex) {
    console.log("ReferenceSellCtrl select: " + referenceIndex + ", " + conversationIndex)
    References.selectSellConversation(referenceIndex, conversationIndex);
  }

  // Expand/Collapse reference
  $scope.toggleReference = function(reference) {
    if ($scope.isReferenceShown(reference)) {
      $scope.shownReference = null;
    } else {
      $scope.shownReference = reference;
    }
    References.setShownReferenceSell($scope.shownReference);
  };
  
  // Reference visibility
  $scope.isReferenceShown = function(reference) {
    $scope.shownReference = References.getShownReferenceSell();
    return $scope.shownReference === reference;
  };

  // Remove reference permanantly
  $scope.removeReference = function(reference) {
    console.log("Removing reference: " + reference.id);
    $scope.references.splice($scope.references.indexOf(reference), 1);
  };

});

// Reference Buy Tab Controller

app.controller('ReferenceBuyCtrl', function($scope, References, $location){

  // Load references and conversations
  $scope.references = References.buying();
  $scope.conversations = References.conversations();

  // Store clicked conversation
  $scope.selectConversation = function (referenceIndex, conversationIndex) {
    console.log("ReferenceBuyCtrl select: " + referenceIndex + ", " + conversationIndex)
    References.selectBuyConversation(referenceIndex, conversationIndex);
  }

  // Expand/Collapse reference
  $scope.toggleReference = function(reference) {
    if ($scope.isReferenceShown(reference)) {
      $scope.shownReference = null;
    } else {
      $scope.shownReference = reference;
    }
    References.setShownReferenceBuy($scope.shownReference);
  };
  
  // Reference visibility
  $scope.isReferenceShown = function(reference) {
    $scope.shownReference = References.getShownReferenceBuy();
    return $scope.shownReference === reference;
  };

  // Remove reference permanantly
  $scope.removeReference = function(reference) {
    console.log("Removing reference: " + reference.id);
    $scope.references.splice($scope.references.indexOf(reference), 1);
  };

});


// Conversation Controller
app.controller('ConversationCtrl', function($rootScope, $scope, $stateParams, References, $window, $ionicScrollDelegate, $timeout) {

  // Setting $scope variables
  $scope.reference = References.getSelectedReference();
  $scope.conversation = References.getSelectedConversation();

  console.log('Loading conversation with: ' + $scope.conversation.name);


  // LOGGING HERE BREAKS CODE
  //console.log(reference);
  //console.log(conversation);

  // Back Navigation
  $scope.back = function () {
    //$window.history.back();
    $rootScope.back();
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