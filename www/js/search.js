var app = angular.module('search', ['ionic', 'ngAnimate', 'ngStorage'])


// Dummy Search Results

app.factory("Results", function($localStorage) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg', isbn: '99-9260-864-1'},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg', isbn: '99-9269-366-5'},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg', isbn: '99-9269-153-0'},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg', isbn: '99-9267-942-5'}
  ];

  // Last query
  $localStorage.query;
  var query = null;

  // Selected result
  $localStorage.result;
  var result;

  // Load last query after refresh
  if ($localStorage.query != null) {
  	query = $localStorage.query;
  }

  // Load last result after refresh
  if ($localStorage.result != null) {
  	result = $localStorage.result;
  }

  return {
  	// Get all results
    all: function() {
      return results;
    },
    // Get a specific result
    get: function(resultId) {
      return results[resultId];
    },
    // Initial Search
    search: function (query) {
    	this.setQuery(query);
    },
    // Store selected book
    selectBook: function (title) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].title === title) {
				$localStorage.result = results[i];
				result = $localStorage.result;
			}
		}
	},
	// Get selected book
	getBook: function() {
		//console.log(result);
		return result;
	},
	// Store last query
	setQuery: function(someQuery) {
		$localStorage.query = someQuery;
		query = $localStorage.query;
	},
	// Retrieve last query
	getQuery: function() {
		return query;
	}

  }
});

// Dummy Posts

app.factory("Posts", function($location, $localStorage, References, Results) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [
    { id: '', user: { name: 'Yonce K', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Jay Z', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Brendan C', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Samantha S', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Adam K', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'Raymond G', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'Alexander E', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'asdlfkjfaldkjfdasf F', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '', type: 'buy'},
  ];

  var images = [
  	'img/test/image1.jpg',
  	'img/test/image2.jpg',
  	'img/test/image3.jpg',
  	'img/test/image4.jpg',
  ];

  var comments = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh interdum eros vulputate ultricies. Morbi pretium sed massa at aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh interdum eros vulputate ultricies. Morbi pretium sed massa at aliquam.';

  for (var i=0; i<posts.length; i++) {
  	for (var j=0; j<4; j++) {
  		posts[i].images.push(images[j]);
  	}
  	posts[i].comments=comments;

  	var id = Math.random().toString(36).slice(2);
  	posts[i].id = id;
  }

  // Post types
  var sell_posts = posts.slice(0, 4);
  var buy_posts = posts.slice(4);

  // Post to message
  var post;
  $localStorage.post;
  

  if ($localStorage.post != null) {
  	post = $localStorage.post;
  }

  var addToReferences = function(post) {
  	var book = Results.getBook();
  	console.log(book);
  	console.log(post);
  	var index = References.addReference(Results.getBook(), post);

  	$location.path('home/conversation/' + index.referenceIndex + '/' + index.conversationIndex);
  };


  return {
    all: function() {
      return posts;
    },
    selling: function() {
    	return sell_posts;
    },
    buying: function() {
    	return buy_posts;
    },
    get: function(postIndex) {
      // Simple index lookup
      return posts[postIndex];
    },
    message: function(post) {
    	console.log('Messaging: ' + post.user.name);

    	$localStorage.post = post;
    	post = $localStorage.post;

    	addToReferences(post);
    },
    getPost: function() {
    	return post;
    }
  }
});

// Me factory

app.factory("Me", function() {

	var me = { user: { name: 'Brendan C', icon: 'img/test/me.jpg' } }
	
	return {
		get: function() {
			return me;
		}
	}
});

// Root Scope Variables

app.run(function($rootScope, $location, $localStorage, $window, Results) {

	$rootScope.showResultsButton = false;
	$rootScope.resultsButtonToPosts = false;

	//$localStorage.$reset();


	// States
	$rootScope.previousState;
	$rootScope.currentState;
	$localStorage.previousState;
	$localStorage.currentState;

	// Load states on refresh
	if ($localStorage.previousState != null) {
		$rootScope.previousState = $localStorage.previousState;
	}

	if ($localStorage.currentState != null) {
		$rootScope.currentState = $localStorage.currentState;
	}

	// State Stack
	$rootScope.stateStack = new Array();
	$rootScope.stateStack.push('bottom');
	$localStorage.stateStack;

	// Load state stack on refresh
	if ($localStorage.stateStack != null) {
		//$rootScope.stateStack = $localStorage.stateStack;
	}

	// Retrieve previous state
	$rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
		
		//console.log("From: " + from.name + ", To: " + to.name);

		// Switch Between Reference Tabs
   		if (to.name.substring(0, 8) === 'home.tab' && from.name.substring(0, 8) === 'home.tab') {
   			//return;
   		}

   		// Reload, remove dulplicate state from stack
		if (getLastState() === to.name) {
			$rootScope.stateStack.pop();
		}

		// Update stack
		$rootScope.stateStack.push(to.name);
		$localStorage.stateStack = $rootScope.stateStack;

		// Update States
		updateStatesFromStack();

   		console.log($rootScope.previousState + ' -> ' + $rootScope.currentState);

   		// Switch Between Post Tabs
   		if (to.name.substring(0, 10) === 'home.posts' && from.name.substring(0, 10) === 'home.posts') {
   			// Save current state
   			var currentState = $rootScope.stateStack.pop();

   			// Pop tab state before
   			$rootScope.stateStack.pop();

   			// Restore current state
   			$rootScope.stateStack.push(currentState);

   			// Update states
   			updateStatesFromStack();
   		}

   		// Print stack
   		printStack();
	});

	// Back Navigation
	$rootScope.back = function () {
		if ($rootScope.previousState === 'home.tab.selling') {
			$location.path('home/tab/selling');
			return;
		}
		if ($rootScope.previousState === 'home.tab.buying') {
			$location.path('home/tab/buying');
			return;
		}
		if ($rootScope.previousState === 'home.search') {
			$location.path('home/search/' + Results.getQuery());
			return;
		}
		// Back to home -> posts <- search <- ?
		if ($rootScope.previousState === 'home.posts.selling' || 
			$rootScope.previousState === 'home.posts.buying') {

			// Home, click results button to posts, back to search, back to home
			if ($rootScope.currentState === 'home.search') {

				// Pop state stack until reach a home tab
				console.log("here");
				for (var i = $rootScope.stateStack.length - 1; i > 0; i--) {
					var state = $rootScope.stateStack[i];
					if (state.indexOf("tab") > -1) {
						$location.path('home/tab/' + state.substring(9));
					 	return;
					}
				}
			}
		}
		// Conversation back to posts
		if ($rootScope.previousState === 'home.posts.selling') {
			$location.path('home/posts/selling');
			return;
		}
		if ($rootScope.previousState === 'home.posts.buying') {
			$location.path('home/posts/buying');
			return;
		}

		// Disregard conversation state
		if (($rootScope.currentState === 'home.posts.selling' || 
			$rootScope.currentState === 'home.posts.buying') &&
			$rootScope.previousState === 'home.conversation') {

			// Current Stack: Posts Conversation Post

			// Pop off Posts and Conversation
			$rootScope.stateStack.pop();
			$rootScope.stateStack.pop();

			// Update States
			updateStatesFromStack();

			// Re-call back
			$rootScope.back();
		}

		else {
			$window.history.back();
		}
	};

	// Result button behavior
	$rootScope.resultsButtonPressed = function() {
		console.log('Results button pressed');

		if ($rootScope.resultsButtonToPosts) {
			backToPosts();
		} 
		else {
			backToSearch();
		}
		return;
	}

	// Result button back to search
	backToSearch = function() {
		console.log('Results button back to Search');

		$location.path('home/search/' + Results.getQuery());
		return;
	};

	// Result button back to posts
	backToPosts = function() {
		console.log('Results button back to Posts');

		// Find last Posts state
		for (var i = $rootScope.stateStack.length - 1; i > 0; i--) {
			var state = $rootScope.stateStack[i];

			// Found Post state
			if (state.indexOf("post") > -1) {
				if (state === 'home.posts.selling') {
					$location.path('home/posts/selling');
					return;
				}
				if (state === 'home.posts.buying') {
					$location.path('home/posts/buying');
					return;
				}
			}
		}
	};



	getLastState = function() {
		return $rootScope.stateStack[$rootScope.stateStack.length - 1];
		//$rootScope.stateStack.get(0);
	};

	updateStatesFromStack = function() {
		$rootScope.previousState = $rootScope.stateStack[$rootScope.stateStack.length - 2];
		$rootScope.currentState = $rootScope.stateStack[$rootScope.stateStack.length - 1];
	}

	printStack = function() {
		for (var i = 0; i < $rootScope.stateStack.length; i++) {
			console.log($rootScope.stateStack[i]);
		}
	};
})

// Search Controller

app.controller('SearchCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $window, $ionicModal, Results) {

	// Configure Results button
	$scope.showResultsButton = $rootScope.showResultsButton;
	
	// Make initial search
	$scope.search = function (query) {
		console.log("SearchCtrl search: " + $scope.query);

		// Show Results button
		$rootScope.showResultsButton = true;

		// New Search, Results button should come back to here
		$rootScope.resultsButtonToPosts = false;

		// Perform search
		Results.search($scope.query);

		// Go to Results 
		$location.path( '/home/search/' + $scope.query);
	}

	//Result Button
	//Pop state stack until reach a post tab
	$scope.resultsButtonPressed = function() {
		$rootScope.resultsButtonPressed();
	}


	// Settings Modal
	$ionicModal.fromTemplateUrl('templates/settings-modal.html', {
		id: 'settings',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		console.log('Configuring settings modal');
		$scope.settingsModal = modal;
	});

	$scope.openSettings = function() {
		//$scope.post = $scope.posts[index];
		$scope.settingsModal.show();

	}

	$scope.closeSettings = function() {
		$scope.settingsModal.hide();
	}

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
	//$scope.notificationsModal.remove();
		//$scope.settingsModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	});
	$scope.$on('modal.shown', function() {
	});

});

// Results Controller

app.controller('ResultsCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $window, Results) {

	// Get query from Results service
	$scope.query = Results.getQuery();

	// Fake results from factory
	$scope.results = Results.all();
	
	// Select book from initial search
	$scope.selectBook = function(title) {
		console.log("Selected book: " + title);
		Results.selectBook(title);
		$rootScope.resultsButtonToPosts = true;
	}

	// Back Navigation
	$scope.back = $rootScope.back;

	// Result Button
	// Pop state stack until reach a post tab
	$scope.backToPosts = function() {
		for (var i = 0; i < $rootScope.stateStack.length; i++) {
			var state = $rootScope.stateStack[i];
			console.log(state.substring(11));
			if (state.indexOf("posts") > -1) {
				$location.path('home/posts/' + state.substring(11));
			 	return;
			}
		}
	}

});




// Posts Controller

app.controller('PostSellCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, Posts, Results, Me) {

	// Fake posts from factory
	$scope.posts = Posts.selling();

	// My user information
	$scope.me = Me.get();

	// Get selected book for subheader
	$scope.book = Results.getBook();

	// Configure Nav-Bar buttons
	$scope.showPostButtons = true;

	// Back Navigation
	$scope.back = $rootScope.back;

	// Message post
	$scope.message = function(post) {
		Posts.message(post);
	}


	// Post Detail Modal
	$ionicModal.fromTemplateUrl('templates/post-detail-modal.html', {
		id: 'detail',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.detailModal = modal;
	});

	$scope.openPostDetail = function(index) {
		$scope.post = $scope.posts[index];
		$scope.detailModal.show();

		console.log('Opened detail for ' + $scope.post.type + ' post from ' + $scope.post.user.name);
	}

	$scope.closePostDetail = function() {
		$scope.detailModal.hide();
	}


	// Create Post Modal
	$ionicModal.fromTemplateUrl('templates/create-post-modal.html', {
		id: 'create',
		scope: $scope,
		animation: 'slide-in-up',
	}).then(function(modal) {
		$scope.createModal = modal;
	});

	$scope.openCreatePost = function() {
		$scope.createModal.show();
		//console.log("Post is: " + $scope.post);
	}

	$scope.closeCreatePost = function() {
		$scope.createModal.hide();
	}


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


	// Toggle Nav-Bar button visibility
	$scope.togglePostButtons = function() {
		setTimeout(function () {
	        $scope.$apply(function(){
       	 		$scope.showPostButtons = !$scope.showPostButtons;
	        });
    	}, 10);
	}


	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.detailModal.remove();
		$scope.createModal.remove();
		$scope.imageModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		$scope.togglePostButtons();
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	});
	$scope.$on('modal.shown', function() {
      	$scope.togglePostButtons();
    });

});

// Posts Controller

app.controller('PostBuyCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, $ionicPopup, Posts, Results, Me) {

	// Fake posts from factory
	$scope.posts = Posts.buying();
	console.log($scope.posts);

	// My user information
	$scope.me = Me.get();

	// Get selected book for subheader
	$scope.book = Results.getBook();

	// Configure Nav-Bar buttons
	$scope.showPostButtons = true;

	// Back Navigation
	$scope.back = $rootScope.back;


	$scope.message = function(post) {
		Posts.message(post);
	}


	// Post Detail Modal
	$ionicModal.fromTemplateUrl('templates/post-detail-modal.html', {
		id: 'detail',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.detailModal = modal;
	});

	$scope.openPostDetail = function(index) {
		$scope.post = $scope.posts[index];
		$scope.detailModal.show();

		console.log('Opened detail for ' + $scope.post.type + ' post from ' + $scope.post.user.name);
	}

	$scope.closePostDetail = function() {
		$scope.detailModal.hide();
	}


	// Create Post Modal
	$ionicModal.fromTemplateUrl('templates/create-post-modal.html', {
		id: 'create',
		scope: $scope,
		animation: 'slide-in-up',
	}).then(function(modal) {
		$scope.createModal = modal;
	});

	$scope.openCreatePost = function() {
		$scope.createModal.show();
		//console.log("Post is: " + $scope.post);
	}

	$scope.closeCreatePost = function() {
		$scope.createModal.hide();
	}


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


	// Toggle Nav-Bar button visibility
	$scope.togglePostButtons = function() {
		setTimeout(function () {
	        $scope.$apply(function(){
       	 		$scope.showPostButtons = !$scope.showPostButtons;
	        });
    	}, 10);
	}


	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.detailModal.remove();
		$scope.createModal.remove();
		$scope.imageModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		$scope.togglePostButtons();
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	});
	$scope.$on('modal.shown', function() {
      	$scope.togglePostButtons();
    });

});



// Directive for show after return input, ng-show = true if variable true
app.directive("enterShowResults", function () {
	return function (scope, element, attrs) {
		element.bind("ngEnter", function () {
			scope.setHasResults();
		})
	}
})


// Directive to for ng-enter, calls function on enter pressed
app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});


