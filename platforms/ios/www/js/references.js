var app = angular.module('references', []);


app.factory("References", function($location, $localStorage, $ionicLoading, AWSHelper) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var references = [
    { id: 0, title: 'Introductory Chemistry Essentials', author: 'Nivaldo Tro', icon: 'img/test/book_chem.jpg', isbn: '978-0321725998', price: 9, count: '', conversations: [], type: 'sell'},
    { id: 1, title: 'Campbell Biology', author: 'Jane Reece', icon: 'img/test/book_bio.jpg', isbn: '978-0321775658', price: 8, count: '', conversations: [], type: 'sell'},
    { id: 2, title: 'Lehninger Principles of Biochemistry', author: 'David Nelson', icon: 'img/test/book_biochem.jpg', isbn: ' 978-1429234146', price: 9, count: '', conversations: [], type: 'buy'},
    { id: 3, title: 'Calculus', author: 'Ron Larson', icon: 'img/test/book_math.jpg', isbn: '978-0547167022', price: 8, count: '', conversations: [], type: 'buy'}
  ];

  var conversations = [
    { id: 0, name: 'Matthew P', preview: 'Is this book still for sale?', price: 10, icon: 'img/test/boy1.jpg', images: '', comments: '', messages: []},
    { id: 1, name: 'Manuel D', preview: 'When will you be on campus?', price: 8, icon: 'img/test/boy2.jpg', images: '', comments: '', messages: []},
    { id: 2, name: 'Angel M', preview: 'I will be in front of the gym wearing a red shirt.', price: 10, icon: 'img/test/girl1.jpg', images: '', comments: '', messages: []},
    { id: 3, name: 'Rachel F', preview: 'Yea, the book has some highlighting, but nothing huge', price: 8, icon: 'img/test/girl2.jpg', images: '', comments: '', messages: []},
    { id: 4, name: 'Sandra R', preview: 'I am free Mondays after 5.', price: 8, icon: 'img/test/girl3.jpg', images: '', comments: '', messages: []}
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

    // Add images
    conversations[i].images = [
      'img/test/image1.jpg',
      'img/test/image2.jpg',
      'img/test/image3.jpg',
      'img/test/image4.jpg',
    ];

    // Add comments
    conversations[i].comments = 'Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }

  // Build references
  for (var i = 0; i < references.length; i++) {
    references[i].conversations.push(conversations[i]);
    references[i].conversations.push(conversations[i+1]);
    references[i].count = references[i].conversations.length;
  }

  // Reference types
  // var sell_references = references.slice(0, 2);
  // var buy_references = references.slice(2);
  var sell_references;
  var buy_references;

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

  // Add Conversation
  var addConversation = function (book, post) {

    // Check for existing conversation
    if (conversationExists(post) != false) {
      return conversationExists(post);
    }

    // New conversation
    var conversation = { 
        id: Math.random().toString(36).slice(2),
        post_id: post.id, 
        name: post.user.name, 
        preview: '', 
        price: post.price, 
        icon: post.user.icon, 
        messages: [],
        images: post.images,
        comments: post.comments
    };

    // References to add to
    var references;

    // Index of target reference
    var referenceIndex;

    // Conversation
    var conversationIndex;

    // Determine target references 
    // SWITCH REFERENCES
    if (post.type === 'sell') {
      references = buy_references;
    }
    else {
      references = sell_references;
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
        type: post.type,
        price: '',
        status: 'open'
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
  };

  // Check if post already exists
  var conversationExists = function (post) {
    console.log('Checking if conversation: ' + post.user.name + ' in ' + post.type);

    // References to check
    var references;

    if (post.type === 'sell') {
      references = buy_references;
    }
    else {
      references = sell_references;
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
      references = buy_references;
    }
    else {
      references = sell_references;
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


  // Add Reference from created post
  var addReference = function (book, post) {

    // References to add to
    var references;

    // Index of target reference
    var referenceIndex;

    // Determine target references 
    if (post.type === 'sell') {
      references = sell_references;
    }
    else {
      references = buy_references;
    }

    // Reference already exists
    if (checkBookInReferences(book, post)) {
      // Alert user duplicate post
      $ionicLoading.show({ template: "You've already posted this book!", noBackdrop: true, duration: 2000 });
      return;
    }

    // New reference
    else {
      referenceIndex = references.length;
    
      // New book
      reference = { 
        id: referenceIndex, 
        title: book.title, 
        author: book.author, 
        icon: book.icon, 
        count: 0, 
        conversations: [],
        type: post.type,
        price: post.price,
        status: 'open'
      };

      // Push new reference
      references.push(reference);

      console.log('Adding new reference id: ' + referenceIndex);
    }

    return;
  };



  // Check reference for created post
  var checkBookInReferences = function (book, post) {
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
        return true;
      }
    }
    // No conversation match
    console.log('No matching book!');
    return false; 
  }



  return {
    getReferences: function() {
      //return references;

      AWSHelper.getReferences().then(function (data) {
      var posts = data;
      console.log(posts);

      sell_references = new Array();
      buy_references = new Array();

      for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        post.title = post.title.substr(post.title.indexOf(" ") + 1);

        console.log(post);
        if ( post.type === 'sell') {
          sell_references.push(post);
        }
        if (post.type === 'buy') {
          buy_references.push(post); 
        }
      }

      console.log(sell_references);
      console.log(buy_references);

      // return {
      //   sell: sell_posts,
      //   buy: buy_posts,
      // };
    });

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
    addConversation: function (book, post) {
      // returns index of reference, newly created or previous
      var indices = addConversation(book, post);

      reference = $localStorage.reference;
      conversation = $localStorage.conversation;

      return indices;
    },
    addReference: function (book, post) {
      addReference(book, post);
    },
    checkForBook: function (book, post) {
      console.log(book);
      return checkBookInReferences(book, post);
    }
  }
});

// Reference Sell Tab Controller

app.controller('ReferenceSellCtrl', function($scope, References, $location, $localStorage, AWSHelper){

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
  // $scope.removeReference = function(reference) {
  //   console.log("Removing reference: " + reference.id);
  //   $scope.references.splice($scope.references.indexOf(reference), 1);
  // };

  // Delete reference permanantly
  $scope.delete = function(reference) {
    updateReferenceStatus(reference, 'deleted');
    reference.status = 'deleted';
  };

  // Delete reference permanantly
  $scope.markSold = function(reference) {
    updateReferenceStatus(reference, 'sold');
    reference.status = 'sold';
  };

  // Undo reference mark
  $scope.undoMark = function(reference) {
    updateReferenceStatus(reference, 'open');
    reference.status = 'open';
  };

  var updateReferenceStatus = function(reference, status) {
    AWSHelper.updateReferenceStatus(reference, status).then(function(data) {
      References.getReferences();
    });
  }


});

// Reference Buy Tab Controller

app.controller('ReferenceBuyCtrl', function($scope, References, $location, AWSHelper){

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

  // Delete reference permanantly
  $scope.delete = function(reference) {
    updateReferenceStatus(reference, 'deleted');
    reference.status = 'deleted';
  };

  // Delete reference permanantly
  $scope.markSold = function(reference) {
    updateReferenceStatus(reference, 'sold');
    reference.status = 'sold';
  };

  // Undo reference mark
  $scope.undoMark = function(reference) {
    updateReferenceStatus(reference, 'open');
    reference.status = 'open';
  };

  var updateReferenceStatus = function(reference, status) {
    AWSHelper.updateReferenceStatus(reference, status).then(function(data) {
      References.getReferences();
    });
  }

});
