var app = angular.module('search', ['ionic'])

app.controller('SearchCtrl', function($scope, $ionicModal) {

	$ionicModal.fromTemplateUrl('search-modal.html', {
		scope: $scope,
		animation: 'slide-in-left'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
	$scope.modal.remove();
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

/*	// Triggered by search entry
	$scope.showPopup = function() {
		$scope.data = {}

		// Custome popup
		var myPopup = $ionicPopup.show({
		    templateUrl: 'search-popup.html',
		    title: 'Enter Wi-Fi Password',
		    subTitle: 'Please use normal things',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Save</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		          if (!$scope.data.wifi) {
		            //don't allow the user to close unless he enters wifi password
		            e.preventDefault();
		          } else {
		            return $scope.data.wifi;
		          }
		        }
		      },
		    ]
		  });

		  myPopup.then(function(res) {
		    console.log('Tapped!', res);
		  });

		  // Close after timeout
		  // $timeout(function() {
		  //    myPopup.close(); 
		  // }, 3000);
	}*/
