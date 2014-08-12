var app = angular.module('search', ['ionic', 'ngAnimate'])


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


  return {
    all: function() {
      return results;
    },
    get: function(resultId) {
      // Simple index lookup
      return results[resultId];
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

  var comments = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh interdum eros vulputate ultricies. Morbi pretium sed massa at aliquam.';

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

// Search Controller

app.controller('SearchCtrl', function($scope, $location, $stateParams, $window, Results) {

	$scope.showResultsButton = false;
	$scope.query = $stateParams.query;

	// Fake results from factory
	$scope.results = Results.all();

	
	$scope.search = function (query) {
		$scope.showResultsButton = true;
		console.log("Query is: " + $scope.query);
		console.log("Show Results Button: " + $scope.showResultsButton);
		$location.path( '/home/search/' + $scope.query);
	};

	$scope.setHasResults = function() {
		this.showResultsButton = true;
	}

	// Back Navigation
	$scope.back = function () {
		$window.history.back();
	}
});


// Posts Controller

app.controller('PostCtrl', function($scope, $window, $stateParams, $ionicModal, Posts, Results, Me) {

	$scope.title = $stateParams.book;	// get title
	$scope.posts = Posts.all();
	$scope.post;
	$scope.me = Me.get();

	var search = function (title) {
		return Results.get(0);
	};

	$scope.book = search($scope.title);
	
	console.log($scope.book);

	// Back Navigation
	$scope.back = function () {
		$window.history.back();
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
		$scope.post = Posts.get(index);
		$scope.detailModal.show();
		console.log("Post is: " + $scope.post);
	}

	$scope.closePostDetail = function() {
		$scope.detailModal.hide();
	}

	// Create Post Modal

	$ionicModal.fromTemplateUrl('templates/create-post-modal.html', {
		id: 'create',
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.createModal = modal;
	});

	$scope.openCreatePost = function() {
		//$scope.post = Posts.get(index);
		$scope.createModal.show();
		//console.log("Post is: " + $scope.post);
	}

	$scope.closeCreatePost = function() {
		$scope.createModal.hide();
	}

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.detailModal.remove();
		$scope.createModal.remove();
	});
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
	// Execute action
	});
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
	// Execute action
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
