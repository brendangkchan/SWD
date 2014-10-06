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

	$scope.selectState = function(state) {
		console.log('Selected state: ' + state);

		$ionicLoading.show({
	     	template: "<div class='button-icon icon ion-loading-c'></div>",
			animation: 'fade-in',
			showBackdrop: false,
			maxWidth: 200,
			showDelay: 0
	    });

		// Find matching state
    	angular.forEach(schoolDB, function(object) {
    		if (object.name === state) {
    			$scope.schools = object.schools;
    		}
    		$scope.stateSelected = true;
    		$scope.placeholder = 'Filter by school name';

    		$ionicLoading.hide();
    	});
	};

	$scope.back = function() {
		console.log('Back pressed');
		$scope.stateSelected = false;
		$scope.placeholder = 'Filter by state';
	};

	$scope.selectSchool = function(school) {
		console.log('Selected school: ' + school);

		$sessionStorage['user'].schoolID = school.id.toString();
		$sessionStorage['user'].school = school.name;

		User.uploadUser();
		$state.go('home.tab.selling');
	};


});
