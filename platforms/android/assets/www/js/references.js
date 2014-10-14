var app = angular.module('references', []);


app.factory("References", function($location, $localStorage, $ionicLoading, $q, AWSHelper) {
  // Might use a resource here that returns a JSON array

  // // Some fake testing data
  // var references = [
  //   { id: 0, title: 'Introductory Chemistry Essentials', author: 'Nivaldo Tro', icon: 'img/test/book_chem.jpg', isbn: '978-0321725998', price: 9, count: '', conversations: [], type: 'sell'},
  //   { id: 1, title: 'Campbell Biology', author: 'Jane Reece', icon: 'img/test/book_bio.jpg', isbn: '978-0321775658', price: 8, count: '', conversations: [], type: 'sell'},
  //   { id: 2, title: 'Lehninger Principles of Biochemistry', author: 'David Nelson', icon: 'img/test/book_biochem.jpg', isbn: ' 978-1429234146', price: 9, count: '', conversations: [], type: 'buy'},
  //   { id: 3, title: 'Calculus', author: 'Ron Larson', icon: 'img/test/book_math.jpg', isbn: '978-0547167022', price: 8, count: '', conversations: [], type: 'buy'}
  // ];

  // var conversations = [
  //   { id: 0, name: 'Matthew P', preview: 'Is this book still for sale?', price: 10, icon: 'img/test/boy1.jpg', images: '', comments: '', messages: []},
  //   { id: 1, name: 'Manuel D', preview: 'When will you be on campus?', price: 8, icon: 'img/test/boy2.jpg', images: '', comments: '', messages: []},
  //   { id: 2, name: 'Angel M', preview: 'I will be in front of the gym wearing a red shirt.', price: 10, icon: 'img/test/girl1.jpg', images: '', comments: '', messages: []},
  //   { id: 3, name: 'Rachel F', preview: 'Yea, the book has some highlighting, but nothing huge', price: 8, icon: 'img/test/girl2.jpg', images: '', comments: '', messages: []},
  //   { id: 4, name: 'Sandra R', preview: 'I am free Mondays after 5.', price: 8, icon: 'img/test/girl3.jpg', images: '', comments: '', messages: []}
  // ];

  // // Build conversations
  // for (var i = 0; i < conversations.length; i++) {
  //   // Add ID
  //   var id = Math.random().toString(36).slice(2);
  //   conversations[i].id = id;

  //   // Add messages
  //   for (var j=0; j<8; j++) {
  //     var id = Math.random().toString(36).slice(2);
  //     conversations[i].messages.push(
  //       {
  //         name: 'name',
  //         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //         id: id
  //       });
  //   }

  //   // Add images
  //   conversations[i].images = [
  //     'img/test/image1.jpg',
  //     'img/test/image2.jpg',
  //     'img/test/image3.jpg',
  //     'img/test/image4.jpg',
  //   ];

  //   // Add comments
  //   conversations[i].comments = 'Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  // }

  // // Build references
  // for (var i = 0; i < references.length; i++) {
  //   references[i].conversations.push(conversations[i]);
  //   references[i].conversations.push(conversations[i+1]);
  //   references[i].count = references[i].conversations.length;
  // }

  // Reference types
  // var sell_references = references.slice(0, 2);
  // var buy_references = references.slice(2);
  var sell_references, buy_references;
  $localStorage.sell_references;
  $localStorage.buy_references;


  // Track expanded references
  var shownReferenceSell = null;
  var shownReferenceBuy = null;

  // Current conversation
  $localStorage.reference;
  $localStorage.conversation;
  var reference, conversation

  // Online status
  var referenceOnline, conversationOnline;

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
        post_id: post.id,
        id: post.userID, 
        name: post.user,
        posterId: post.userID,
        posterIcon: post.userIcon,
        posterName: post.user,
        preview: '', 
        price: post.price, 
        userIcon: post.userIcon, 
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

    // Newly created reference type (opposite of messaged post)
    var referenceType;

    // Determine target references 
    // SWITCH REFERENCES
    if (post.type === 'sell') {
        references = $localStorage.buy_references;
        referenceType = 'buy';
    }
    else {
        references = $localStorage.sell_references;
        referenceType = 'sell';
    }

    // Reference already exists
    if (referenceExists(book, post)) {

        //  Matched reference
        referenceIndex = referenceExists(book, post);
        var reference = references[referenceIndex];


        // LOCAL
        // Conversation Index
        conversationIndex = references[referenceIndex].conversations.length;

        // Add new conversation to existing reference
        references[referenceIndex].conversations.push(conversation);
        references[referenceIndex].count++;
        reference = references[referenceIndex];

        referenceOnline = true;
        conversationOnline = false;  

        // REMOTE
        // Add Conversation to Reference
        //AWSHelper.addConversationToReferences(conversation, reference);

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
          type: referenceType,
          price: '',
          status: 'open'
        };

        // LOCAL: Push new reference
        references.push(reference);

        // Switch reference type to opposite of post's when messaging
        post.type = referenceType;

        referenceOnline = false;
        conversationOnline = false;  

        //console.log('Adding new reference id: ' + referenceIndex);
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
    console.log('Checking if conversation: ' + post.user + ' in ' + post.type);

    // References to check
    var references;

    if (post.type === 'sell') {
      references = $localStorage.buy_references;
    }
    else {
      references = $localStorage.sell_references;
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
    var newPost = post;

    // Check opposite type when messaging
    if (post.type === 'sell') {
      newPost.type = 'buy';
    }
    else {
      newPost.type = 'sell';
    }

   return checkBookInReferences(book, newPost);
  }


  // Add Reference from created post
  var addReference = function (book, post) {

    // References to add to
    var references;

    // Index of target reference
    var referenceIndex;

    // Determine target references 
    if (post.type === 'sell') {
      references = $localStorage.sell_references;
    }
    else {
      references = $localStorage.buy_references;
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
        post: post.id,
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
      references = $localStorage.sell_references;
    }
    else {
      references = $localStorage.buy_references;
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
      var d = $q.defer();

      AWSHelper.getReferences().then(function (data) {
        var references = data;

        sell_references = new Array();
        buy_references = new Array();

        for (var i = 0; i < references.length; i++) {
          var reference = references[i];
          reference.title = reference.title.substr(reference.title.indexOf(" ") + 1);

          if ( reference.type === 'sell') {
            sell_references.push(reference);
          }
          if (reference.type === 'buy') {
            buy_references.push(reference); 
          }
        }

        $localStorage.sell_references = sell_references;
        $localStorage.buy_references = buy_references;

        console.log(sell_references);
        console.log(buy_references);

        d.resolve(data);
      });

      return d.promise;

    },

    getConversations: function() {
      console.log('Retrieving all conversations');

      var d = $q.defer();
      var promise;
      var promises = [];

      var references = $localStorage.sell_references;

      for (var i = 0; i < references.length; i++) {
        console.log(references[i]);
        for (var j = 0; j < references[i].conversations.length; j++) {

          promise = AWSHelper.getS3Conversation(references[i].conversations[j])
            .then(function(conversation) {
                return conversation;
            });
            promises.push(promise);
        }
      }

      references = $localStorage.buy_references;

      for (var i = 0; i < references.length; i++) {
        for (var j = 0; j < references[i].conversations.length; j++) {

          promise = AWSHelper.getS3Conversation(references[i].conversations[j])
            .then(function(conversation) {
                return conversation;
            });
            promises.push(promise);
        }
      }

      $q.all(promises).then(function(values) {
          d.resolve(values);
      });

      return d.promise;
    },

    setConversations: function(conversations) {
      console.log('Resetting loaded conversations');
      var count = 0;

      var references = $localStorage.sell_references;

      for (var i = 0; i < references.length; i++) {
        for (var j = 0; j < references[i].conversations.length; j++) {
          references[i].conversations[j] = conversations[count++];
        }
      }

      var references = $localStorage.buy_references;

      for (var i = 0; i < references.length; i++) {
        for (var j = 0; j < references[i].conversations.length; j++) {
          references[i].conversations[j] = conversations[count++];
        }
      }
    },

    selling: function() {
      return $localStorage.sell_references;
    },
    buying: function() {
      return $localStorage.buy_references;
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

      referenceOnline = true;
      conversationOnline = true;
    },
    selectBuyConversation: function (referenceIndex, conversationIndex) {
      console.log('Selected Buying Reference: ' + referenceIndex + ' Conversation: ' + conversationIndex);
      $localStorage.reference = buy_references[referenceIndex];
      $localStorage.conversation = buy_references[referenceIndex].conversations[conversationIndex];

      reference = $localStorage.reference;
      conversation = $localStorage.conversation;

      referenceOnline = true;
      conversationOnline = true;
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

      $localStorage.book = book;
      $localStorage.post = post;

      return indices;
    },
    addReference: function (book, post) {
      addReference(book, post);
    },
    checkForBook: function (book, post) {
      return checkBookInReferences(book, post);
    },
    referenceOnline: function() { return referenceOnline; },
    conversationOnline: function() { return conversationOnline; },
    book: function() { return $localStorage.book; },
    post: function() { return $localStorage.post; },
    updateConversation: function(updatedConversation) {
      console.log('Updating conversations');
      var count = 0;

      var references = $localStorage.sell_references;

      for (var i = 0; i < references.length; i++) {
        for (var j = 0; j < references[i].conversations.length; j++) {
          
          if (references[i].conversations[j].key === updatedConversation.key) {
            references[i].conversations[j] = updatedConversation;
            return;
          }
        }
      }

      var references = $localStorage.buy_references;

      for (var i = 0; i < references.length; i++) {
        for (var j = 0; j < references[i].conversations.length; j++) {
          
          if (references[i].conversations[j].key === updatedConversation.key) {
            references[i].conversations[j] = updatedConversation;
            return;
          }
        }
      }
    }
  }
});

// Reference Sell Tab Controller

app.controller('ReferenceSellCtrl', function($scope, References, $location, $localStorage, AWSHelper, Posts, $state, Results, Notifications){

  //$localStorage.$reset();
  $scope.markCompletePrompt = 'Mark Sold';

  var init = function() {
     References.getReferences()
      .then(function() {
       References.getConversations()
         .then(function(conversations) {
           console.log(conversations);

           // Give back conversations to be put into references
           References.setConversations(conversations)

           // Create Notifications
           Notifications.createMessageAndPostStatusNotifications(References.selling());
           Notifications.createMessageAndPostStatusNotifications(References.buying());
           Notifications.consolidateMessageNotifications();
           Notifications.consolidateNotifications();
         });
      });
  };

  init();

  // Load references and conversations
  $scope.references = References.selling();

  console.log($scope.references);
  //$scope.conversations = References.conversations();

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

  // Search for reference
  $scope.search = function(reference) {
    console.log('Searching for reference: ' + reference.title);
    Results.selectBook(reference);
    Posts.setBook(reference);
    $state.go('home.posts.selling');
  };

  // Delete reference permanantly
  $scope.delete = function(reference) {
    updateReferenceStatus(reference, 'deleted');
    reference.status = 'deleted';
  };

  // Delete reference permanantly
  $scope.markComplete = function(reference) {
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

app.controller('ReferenceBuyCtrl', function($scope, References, Notifications, $location, AWSHelper, Posts, $state, Results){

  var init = function() {
     References.getReferences()
      .then(function() {
       References.getConversations()
         .then(function(conversations) {
           console.log(conversations);

           // Give back conversations to be put into references
           References.setConversations(conversations)

           // Create Notifications
           Notifications.createMessageAndPostStatusNotifications(References.selling());
           Notifications.createMessageAndPostStatusNotifications(References.buying());
           Notifications.consolidateMessageNotifications();
           Notifications.consolidateNotifications();
         });
      });
  };

  init();

  $scope.markCompletePrompt = 'Mark Bought';

  // Load references and conversations
  $scope.references = References.buying();


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

  // Search for reference
  $scope.search = function(reference) {
    console.log('Searching for reference: ' + reference.title);
    Results.selectBook(reference);
    Posts.setBook(reference);
    $state.go('home.posts.selling');
  };

  // Delete reference permanantly
  $scope.delete = function(reference) {
    updateReferenceStatus(reference, 'deleted');
    reference.status = 'deleted';
  };

  // Delete reference permanantly
  $scope.markComplete = function(reference) {
    updateReferenceStatus(reference, 'bought');
    reference.status = 'bought';
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
