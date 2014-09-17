var app = angular.module('search', ['ionic', 'ngAnimate', 'ngStorage'])


// Dummy Search Results

app.factory("Results", function($localStorage,  $http, AWSHelper) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var results = [
  //   { id: 0, title: 'Introductory Chemistry Essentials', author: 'Nivaldo Tro', icon: 'img/test/book_chem.jpg', isbn: '978-0321725998'},
  //   { id: 1, title: 'Campbell Biology', author: 'Jane Reece', icon: 'img/test/book_bio.jpg', isbn: '978-0321775658'},
  //   { id: 2, title: 'Lehninger Principles of Biochemistry', author: 'David Nelson', icon: 'img/test/book_biochem.jpg', isbn: ' 978-1429234146'},
  //   { id: 3, title: 'Calculus', author: 'Ron Larson', icon: 'img/test/book_math.jpg', isbn: '978-0547167022'}
  // ];

  var results = {};

  //$localStorage.$reset();

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

  // Create book objects from db data
  getResultsFromData = function (data) {
  	// Array to hold results
  	var search_results = new Array();

  	console.log(data);

  	// Check each search result
  	for (var i = 0; i < data.length; i++) {

  		var result = data[i];
  		var title = result.title.toLowerCase();
  		var author = '';
  		var author_name = '';
  		var isbn = result.isbn10;

  		if (result.author_data.length >= 1) {
  			author = result.author_data[0].id;
  			author_name = result.author_data[0].name;
  		}

  		var match_found = false;

  		// Check each previous book
  		for (var j = 0; j < i; j++) {

  			// Current book 
  			// var current_result = search_results[i];

  			// console.log(current_result);
  			var current_title = data[j].title.toLowerCase();
  			var current_author = '';
  			var current_isbn = data[j].isbn10;

	  		if (data[j].author_data.length >= 1) {
	  			current_author = data[j].author_data[0].id;
	  		}
	  			
  			// Match found
  			if ((title === current_title && author === current_author) || 
  				isbn === current_isbn) {
  				console.log('Match found');
  				match_found = true;
  				break;
  			}
  		}

  		// No match found
  		if (!match_found) {
  			console.log('No match, adding result: ' + title);

  			// New book
  			var book = {
  				title: titleCaps(data[i].title),
  				author: author_name,
  				isbn: data[i].isbn10,
  				icon: getIconUrl(data[i].isbn10)
  			};

  			// Add book
  			search_results.push(book);
  			console.log(book);
  		}
  	}

  	console.log('Finished adding ' + search_results.length + ' results');

  	// Return results
  	return search_results;
  }

  getIconUrl = function(isbn) {
  	var size = 'S';

  	return 'http://covers.openlibrary.org/b/' + 'isbn/' + isbn + '-S.jpg' + '?default=false';
  }


  	// Function to fix title capitalization
	var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
	var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
  
	titleCaps = function(title){
		var parts = [], split = /[:.;?!] |(?: |^)["Ò]/g, index = 0;
		
		while (true) {
			var m = split.exec(title);

			parts.push( title.substring(index, m ? m.index : title.length)
				.replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
					return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
				})
				.replace(RegExp("\\b" + small + "\\b", "ig"), lower)
				.replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
					return punct + upper(word);
				})
				.replace(RegExp("\\b" + small + punct + "$", "ig"), upper));
			
			index = split.lastIndex;
			
			if ( m ) parts.push( m[0] );
			else break;
		}
		
		return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
			.replace(/(['Õ])S\b/ig, "$1s")
			.replace(/\b(AT&T|Q&A)\b/ig, function(all){
				return all.toUpperCase();
			});
	};
    
	function lower(word){
		return word.toLowerCase();
	}
    
	function upper(word){
	  return word.substr(0,1).toUpperCase() + word.substr(1);
	}

  return {
  	// Get all results
    all: function() {

		// API key
    	var myApi = '13JXGETH';

    	var collection = 'books';

    	// URL
    	var url = 'http://isbndb.com/api/v2/json/13JXGETH/book/';

    	// Details
    	var index1 = 'combined';

    	// Value
    	var value1 = $localStorage.query.split(' ').join('_');

    	// Parameters
    	//var param = '&i=combined';
    	var param = '';

    	// Add query
    	var url = 'http://isbndb.com/api/v2/json/' + myApi + '/' + collection + '?q=' + value1 + param;

    	console.log('URL: ' + url);

    	return $http({method: 'GET', url: url, cache: true});
    },
    getResults: function(data) {
    	return getResultsFromData(data);
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
    selectBook: function (book) {
		
    	if (!book.author) {
    		book.author = 'Unknown';
    	}

		$localStorage.result = book;
		result = $localStorage.result;

		//Posts.getPosts(book);
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




// Me factory

app.factory("Me", function(User) {

	// var me = { user: { name: 'Brendan C', icon: 'img/test/me.jpg' } };
	var me = { user: { name: 'Brendan C', icon: 'img/test/girl1.jpg' } };

	return {
		get: function() {
			return me;
		}
	}
});



// Notifications Factory

app.factory("Notifications", function (User) {

	// Notification Types
	// message
	// bought / sold
	// buy / sell (new posts)
	// deleted

	var me = User.user();

	var notifications= [
		// YOU HAVE SOLD
		{ user: me, book: { title: 'Introductory Chemistry Essentials', icon: 'img/test/book_chem.jpg' }, type: 'sold', text: '' },
		{ user: { name: 'Leah P', icon: 'img/test/girl2.jpg' }, book: { title: 'Campbell Biology', icon: 'img/test/book_bio.jpg' }, type: 'message', text: '' },
		// YOU HAVE BOUGHT
		{ user: me, book: { title: 'Lehninger Principles of Biochemistry', icon: 'img/test/book_biochem.jpg' }, type: 'bought', text: '' },
		//{ user: { name: 'Lucy R', icon: 'img/test/woman2.jpg' }, book: { title: 'Planets Without Borders', icon: 'img/test/book2.jpg' }, type: 'buy', text: '' },
		//{ user: { name: 'Toby H', icon: 'img/test/man1.jpg' }, book: { title: 'Complete History of the 17th & 18th Century', icon: 'img/test/book3.jpg' }, type: 'sell', text: '' },
		{ user: '', book: { title: 'Calculus: A Deeper Look', icon: 'img/test/book_math.jpg' }, type: 'sell', text: '' }
		
	];

	// Sort messages by book to consolidate


	// Add text
	for (var i = 0; i < notifications.length; i++) {
		var notification = notifications[i];

		// Set Name
		var name = notification.user.name
		if (name === me.name) {
			name = 'You';
		}

		if (notification.type === 'message') {
			notifications[i].text = name + ' messaged you';
		}
		if (notification.type === 'buy') {
			notifications[i].text = ' 5 new buyers';
		}
		if (notification.type === 'sell') {
			notifications[i].text = ' 3 new sellers';
		}
		if (notification.type === 'sold') {
			notifications[i].text = name + ' sold';
		}
		if (notification.type === 'bought') {
			notifications[i].text = name + ' bought';
		}
		if (notification.type === 'deleted') {
			notifications[i].text = name + ' deleted their post';
		}
	}

	return {
		all: function() {
			return notifications;
		}
	}
})

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
   		//printStack();
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

app.controller('SearchCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $window, $ionicModal, $ionicLoading, Results, Notifications, Chat) {


	// Chat.loadQBScript().then(function(QB) {
	// 	Chat.initializeQB(QB);
	// });


	// Configure Results button
	$scope.showResultsButton = $rootScope.showResultsButton;
	
	// Make initial search
	$scope.search = function (query) {
		// Alert user if any field empty
		if (!query) {
			$ionicLoading.show({ template: 'Please enter a search query', noBackdrop: true, duration: 2000 });
			return;
		}

		console.log("SearchCtrl search: " + $scope.query);

		// Show Results button
		$rootScope.showResultsButton = true;

		// New Search, Results button should come back to here
		$rootScope.resultsButtonToPosts = false;

		// Perform search
		Results.search($scope.query);

		// Go to Results 
		$location.path( '/home/search/' + $scope.query);

		$ionicLoading.show({
	     	template: "<div class='button-icon icon ion-loading-c'></div>",
			animation: 'fade-in',
			showBackdrop: false,
			maxWidth: 200,
			showDelay: 0
	    });
	}

	//Result Button
	//Pop state stack until reach a post tab
	$scope.resultsButtonPressed = function() {
		$rootScope.resultsButtonPressed();
	}


	// Load Notifications
	$scope.notifications = Notifications.all();

	// Notifications Modal
	$ionicModal.fromTemplateUrl('templates/notifications-modal.html', {
		id: 'notifications',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.notificationsModal = modal;
	});

	$scope.openNotifications = function() {
		$scope.notificationsModal.show();
	}

	$scope.closeNotifications = function() {
		$scope.notificationsModal.hide();
	}


	// Settings Modal
	$ionicModal.fromTemplateUrl('templates/settings-modal.html', {
		id: 'settings',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.settingsModal = modal;
	});

	$scope.openSettings = function() {
		$scope.settingsModal.show();
	}

	$scope.closeSettings = function() {
		$scope.settingsModal.hide();
	}

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.notificationsModal.remove();
		$scope.settingsModal.remove();
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

app.controller('ResultsCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $ionicLoading, $window, Results, Posts) {

	// Get query from Results service
	$scope.query = Results.getQuery();

	// Fake results from factory
	//$scope.results = Results.all();

	//$scope.results = null;

	Results.all().success(function (data) {
		var initial_results = data.data;
		console.log(data,data);
		$scope.results = Results.getResults(initial_results);
		$ionicLoading.hide();
	});
	
	// Select book from initial search
	$scope.selectBook = function(book) {
		console.log("Selected book: " + book.title);
		Results.selectBook(book);
		Posts.getPosts(book);
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




// Directive for error image source
app.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src != attrs.errSrc) {
          attrs.$set('src', attrs.errSrc);
        }
      });
    }
  }
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

app.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});


