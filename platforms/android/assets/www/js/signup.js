var app = angular.module('signup', []);


// Conversation Controller
app.controller('SignupCtrl', function($scope, $state, $http, AWSHelper, User) {

	// Load school file
	$http.get('res/states.json').success (function(data){
        $scope.states = data;
        $scope.abbrev = [];

        $scope.data = {
        	state: ''
        };

        angular.forEach($scope.states, function(state) {
        	$scope.abbrev.push(state.abbreviation);
      	});

      	AWSHelper.uploadToS3(newSchools, 'schools.json');
    });



});
