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
      return friends[resultId];
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
