var app = angular.module('signup', []);


// Conversation Controller
app.controller('SignupCtrl', function($scope, $state, $http, $ionicLoading, $sessionStorage, AWSHelper, User) {

	var schoolDB = [];
	var seenStates = [];
	$scope.noResults = false;
	$scope.placeholder = 'Filter by state';

	// Load school file
	$http.get('res/schools.json').success (function(data){
        $scope.rawSchools = data;

       //  angular.forEach($scope.rawSchools, function(school) {


       //  	// Check if state exists
       //  	if (seenStates.indexOf(school.STATE) <= -1) {
       //  		// Add state
       //  		seenStates.push(school.STATE);

       //  		schoolDB.push(
       //  			{
       //  				name: school.STATE,
       //  				schools: []
       //  			} 
       //  		);

       //  	}


       //  	// Find matching state
       //  	angular.forEach(schoolDB, function(state) {
       //  		if (state.name === school.STATE) {
       //  			state.schools.push({
       //  				id: school.ID,
       //  				name: school.NAME
       //  			});
       //  		}
       //  	});

      	// });

       //  console.log(schoolDB);
       //  console.log(seenStates.sort());

       //  $scope.states = schoolDB;
    });

	// Search for specific school after choosing state
	$scope.searchSchool = function(query) {

		console.log('Searching for school: ' + query);

		var matchingSchools = [];

		//angular.forEach($scope.stateSchools, function(school) {
		angular.forEach($scope.rawSchools, function(school) {
			// Check if query in name
			if (school.NAME.indexOf(query) >= 0) {
				matchingSchools.push(school);
			}
		});

		console.log('Number of matches: ' + matchingSchools.length);
		if (matchingSchools.length === 0) $scope.noResults = true;

		$scope.schools = matchingSchools;
	};


	// Choose school
	$scope.selectSchool = function(school) {
		console.log('Selected school: ' + school);

		$sessionStorage['user'].schoolID = school.ID.toString();
		$sessionStorage['user'].school = school.NAME;

		User.uploadUser();
		$state.go('home.tab.selling');
	};


	// Go back to lsit of states
	$scope.back = function() {
		console.log('Back pressed');
	};


});
