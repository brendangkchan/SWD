var app = angular.module('search', ['ionic', 'ngAnimate', 'ngStorage'])


// Dummy Search Results

app.factory("Results", function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg', isbn: '99-9260-864-1'},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg', isbn: '99-9269-366-5'},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg', isbn: '99-9269-153-0'},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg', isbn: '99-9267-942-5'}
  ];

  var query = null;

  var result;

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
				result = results[i];
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
		query = someQuery;
	},
	// Retrieve last query
	getQuery: function() {
		return query;
	}

  }
});

// Dummy Posts

app.factory("Posts", function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [
    { user: { name: 'Yonce K', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: ''},
    { user: { name: 'Jay Z', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '' },
    { user: { name: 'Brendan C', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '' },
    { user: { name: 'Samantha S', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '' },
    { user: { name: 'Adam K', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '' },
    { user: { name: 'Raymond G', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '' },
    { user: { name: 'Alexander E', icon: 'img/test/user1.jpg' }, price: 10, edition: 7, condition: 'A', images: [], comments: '' },
    { user: { name: 'asdlfkjfaldkjfdasf F', icon: 'img/test/user2.jpg' }, price: 8, edition: 6, condition: 'B', images: [], comments: '' },
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
  }

  return {
    all: function() {
      return posts;
    },
    get: function(postIndex) {
      // Simple index lookup
      return posts[postIndex];
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

app.run(function($rootScope, $location) {
	$rootScope.showResultsButton = false;
	$rootScope.previousState;
	$rootScope.currentState;
	$rootScope.query;

	$rootScope.stateStack = new Array();

	// Retrieve previous state
	$rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
		
		// State Reload
   		if (to.name === from.name) {
   			return;	
   		}

		// Switch Between Reference Tabs
   		if (to.name.substring(0, 8) === 'home.tab' && from.name.substring(0, 8) === 'home.tab') {
   			return;
   		}

   		// Switch Between Post Tabs
   		if (to.name.substring(0, 10) === 'home.posts' && from.name.substring(0, 10) === 'home.posts') {
   			return;
   		}
   		
   		$rootScope.previousState = from.name;
		$rootScope.currentState = to.name;

		$rootScope.stateStack.push(from.name);

   		console.log($rootScope.previousState + ' -> ' + $rootScope.currentState);
	});

	// Back Navigation
	$rootScope.back = function () {
		console.log($rootScope.previousState);
		if ($rootScope.previousState === 'home.tab.selling') {
			$location.path('home/tab/selling');
		}
		if ($rootScope.previousState === 'home.tab.buying') {
			$location.path('home/tab/buying');
		}
		if ($rootScope.previousState === 'home.search') {
			$location.path('home/search/' + $rootScope.query);
		}
		// Back to home -> posts <- search <- ?
		if ($rootScope.previousState === 'home.posts.selling' || 
			$rootScope.previousState === 'home.posts.buying') {
			if ($rootScope.currentState === 'home.search') {

				// Pop state stack until reach a home tab
				console.log("here");
				for (var i = 0; i < $rootScope.stateStack.length; i++) {
					var state = $rootScope.stateStack[i];
					if (state.indexOf("tab") > -1) {
						$location.path('home/tab/' + state.substring(9));
					 	return;
					}
				}
			}
		}
		// else {
		// 	$window.history.back();
		// }
	};
})

// Search Controller

app.controller('SearchCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $window, Results) {

	//$scope.storage = $sessionStorage;

	// Configure Results button
	$scope.showResultsButton = $rootScope.showResultsButton;
	
	// Make initial search
	$scope.search = function (query) {
		console.log("SearchCtrl search: " + $scope.query);

		// Show Results button
		$rootScope.showResultsButton = true;

		// Perform search
		Results.search($scope.query);

		// Go to Results 
		$location.path( '/home/search/' + $scope.query);
	};

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

// Results Controller

app.controller('ResultsCtrl', function($rootScope, $scope, $location, $stateParams, $sessionStorage, $localStorage, $window, Results) {

	// Get query from Results service
	$scope.query = Results.getQuery();

	// Fake results from factory
	$scope.results = Results.all();
	
	// Select book from initial search
	$scope.selectBook = function(title) {
		console.log("ResultsCtrl select: " + title);
		Results.selectBook(title);
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

app.controller('PostCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, $ionicPopup, Posts, Results, Me) {

	// Fake posts from factory
	$scope.posts = Posts.all();

	// My user information
	$scope.me = Me.get();

	// Get selected book for subheader
	$scope.book = Results.getBook();

	// Configure Nav-Bar buttons
	$scope.showPostButtons = true;

	// Back Navigation
	$scope.back = $rootScope.back;


	// Post Detail Modal
	$ionicModal.fromTemplateUrl('templates/post-detail-modal.html', {
		id: 'detail',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.detailModal = modal;
	});

	$scope.openPostDetail = function(index) {
		$scope.post = Posts.get(index);
		$scope.detailModal.show();
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


// Results Modal
// app.directive('resultsModal', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       show: '=',
//       queryInput: '=query'
//     },
//     //replace: true, // Replace with the template below
//     transclude: true, // we want to insert custom content inside the directive
//     link: function(scope, element, attrs) {
//       scope.dialogStyle = {};
//       if (attrs.width)
//         scope.dialogStyle.width = attrs.width;
//       if (attrs.height)
//         scope.dialogStyle.height = attrs.height;
//       scope.hideModal = function() {
//         scope.show = false;
//       };
//     },
//     templateUrl: 'templates/results-modal.html'
//   };
// });
