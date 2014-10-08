var app = angular.module('signup', []);


// Conversation Controller
app.controller('SignupCtrl', function($scope, $state, $http, $ionicLoading, $sessionStorage, AWSHelper, User) {

	var schoolDB = [];
	var seenStates = [];
	$scope.stateSelected = false;
	$scope.placeholder = 'Filter by state';

	// Load school file
	$http.get('res/schools.json').success (function(data){
        $scope.rawSchools = data;

        angular.forEach($scope.rawSchools, function(school) {


        	// Check if state exists
        	if (seenStates.indexOf(school.STATE) <= -1) {
        		// Add state
        		seenStates.push(school.STATE);

        		schoolDB.push(
        			{
        				name: school.STATE,
        				schools: []
        			} 
        		);

        	}


        	// Find matching state
        	angular.forEach(schoolDB, function(state) {
        		if (state.name === school.STATE) {
        			state.schools.push({
        				id: school.ID,
        				name: school.NAME
        			});
        		}
        	});

      	});

        console.log(schoolDB);
        console.log(seenStates.sort());

        $scope.states = schoolDB;
    });


	// Choose state from initial list
	$scope.selectState = function(state) {
		console.log('Selected state: ' + state);

		// $ionicLoading.show({
	 //     	template: "<div class='button-icon icon ion-loading-c'></div>",
		// 	animation: 'fade-in',
		// 	showBackdrop: false,
		// 	maxWidth: 200,
		// 	showDelay: 0
	 //    });

		// Find matching state
    	angular.forEach(schoolDB, function(object) {
    		if (object.name === state) {
    			$scope.stateSchools = object.schools;
    		}
    		$scope.stateSelected = true;
    		$scope.placeholder = 'Search by school name';
    	});
	};

	// Search for specific school after choosing state
	$scope.searchSchool = function(query) {

		var matchingSchools = [];

		angular.forEach($scope.stateSchools, function(school) {

			// Check if query in name
			if (school.name.indexOf(query) >= 0) {
				matchingSchools.push(school);
			}
		});

		$scope.schools = matchingSchools;
	};


	// Choose school
	$scope.selectSchool = function(school) {
		console.log('Selected school: ' + school);

		$sessionStorage['user'].schoolID = school.id.toString();
		$sessionStorage['user'].school = school.name;

		User.uploadUser();
		$state.go('home.tab.selling');
	};

	
	// Go back to lsit of states
	$scope.back = function() {
		console.log('Back pressed');
		$scope.stateSelected = false;
		$scope.placeholder = 'Filter by state';
	};


});
