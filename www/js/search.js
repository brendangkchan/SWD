var app = angular.module('search', ['ionic', 'ngAnimate'])


// Dummy Search Results

app.factory("Results", function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results = [
    { id: 0, title: 'Unbroken: A World War II Story of Survival, Resilience, and Redemption', author: 'Laura Hillenbrand', icon: 'img/test/book1.jpg'},
    { id: 1, title: 'Diagnostic and Statistical Manual of Mental Disorders', author: 'American Psychiatric Association', icon: 'img/test/book2.jpg'},
    { id: 2, title: 'StrengthsFinder 2.0', author: 'Tom Rath', icon: 'img/test/book3.jpg'},
    { id: 3, title: 'Publication Manual of the American Psychological Association', author: 'American Psychiatric Association', icon: 'img/test/book4.jpg'}
  ];


  //return messages;

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

app.controller('SearchCtrl', function($scope, Results) {

	var showResultsButton = false;
	var showModal = false;
	$scope.query = "";

	// Fake results from factory
	$scope.results = Results.all();

	$scope.setShowModal = function () {
		this.showModal = true;
	}

	$scope.search = function (query) {
		this.showResultsButton = true;
		this.showModal = true;
		this.query = $scope.query;
		console.log("Query is: " + $scope.query);
		//this.openModal();
	};

	$scope.setHasResults = function() {
		this.showResultsButton = true;
	}
});

// Blank modal with query
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      queryInput: '=query'
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
    templateUrl: 'templates/modalDialog.html'
  };
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

