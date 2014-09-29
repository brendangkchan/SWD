var app = angular.module('posts', ['ionic', 'ngAnimate', 'ngStorage']);

// Dummy Posts

app.factory("Posts", function($rootScope, $location, $state, $localStorage, References, Results, AWSHelper) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [
    { id: '', user: { name: 'Elias G', icon: 'img/test/boy1.jpg' }, price: 10, edition: 7, condition: 'Good', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Janice B', icon: 'img/test/girl3.jpg' }, price: 6, edition: 6, condition: 'Good', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Kimberly M', icon: 'img/test/girl2.jpg' }, price: 9, edition: 7, condition: 'New', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Blanche S', icon: 'img/test/boy2.jpg' }, price: 8, edition: 6, condition: 'Fair', images: [], comments: '', type: 'sell'},
    { id: '', user: { name: 'Myron G', icon: 'img/test/boy1.jpg' }, price: 7, edition: 7, condition: 'Fair', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'Lauren H', icon: 'img/test/girl1.jpg' }, price: 11, edition: 6, condition: 'Good', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'Alma M', icon: 'img/test/girl2.jpg' }, price: 6, edition: 7, condition: 'New', images: [], comments: '', type: 'buy'},
    { id: '', user: { name: 'Elaine F', icon: 'img/test/girl3.jpg' }, price: 8, edition: 6, condition: 'Poor', images: [], comments: '', type: 'buy'},
  ];

  var images = [
  	'img/test/image1.jpg',
  	'img/test/image2.jpg',
  	'img/test/image3.jpg',
  	'img/test/image4.jpg',
  ];

  var conditions = [
		{ value: 'New' },
		{ value: 'Good' },
		{ value: 'Fair' },
		{ value: 'Poor' }
	];

  var comments = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh interdum eros vulputate ultricies. Morbi pretium sed massa at aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nibh interdum eros vulputate ultricies. Morbi pretium sed massa at aliquam.';

  for (var i=0; i<posts.length; i++) {
  	for (var j=0; j<4; j++) {
  		posts[i].images.push(images[j]);
  	}
  	posts[i].comments=comments;

  	var id = Math.random().toString(36).slice(2);
  	posts[i].id = id;
  }

  // Post types
  //var sell_posts = posts.slice(0, 4);
  //var buy_posts = posts.slice(4);
  var sell_posts;
  var buy_posts;

  // Post to message
  var post;
  $localStorage.post;
  

  if ($localStorage.post != null) {
  	post = $localStorage.post;
  }

  // Add to references after messaging someone
  var addToReferences = function(post) {
  	var book = Results.getBook();
  	console.log('Attempting to add to references: ' + book.title);
  	var index = References.addConversation(Results.getBook(), post);

  	//$location.path('home/conversation/');
    $state.go('home.conversation');
  };

  // Create reference after creating post
  var createReference = function(post) {
  	console.log('Creating reference from post');
  	var book = Results.getBook();

  	References.addReference(book, post);
  }


  return {
    all: function() {
      return posts;
    },
    selling: function() {
    	return sell_posts;
    },
    buying: function() {
    	return buy_posts;
    },
    get: function(postIndex) {
      // Simple index lookup
      return posts[postIndex];
    },
    conditions: function() {
    	return conditions;
    },
    message: function(post) {
    	console.log('Messaging: ' + post.user);

    	$localStorage.post = post;
    	post = $localStorage.post;

    	addToReferences(post);
    },
    getPost: function() {
    	return post;
    },
    getPosts: function() {
    	//var posts = AWSHelper.getPosts(book);
    	//console.log(posts);

    	AWSHelper.getPosts(Results.getBook()).then(function (data) {
			var posts = data;

			sell_posts = new Array();
    	buy_posts = new Array();

	    	for (var i = 0; i < posts.length; i++) {
	    		var post = posts[i];
	    		if ( post.type === 'sell') {
	    			sell_posts.push(post);
	    		}
	    		if (post.type === 'buy') {
	    			buy_posts.push(post);	
	    		}
	    	}

	    	console.log(sell_posts);
	    	console.log(buy_posts);

	    	return {
	    		sell: sell_posts,
	    		buy: buy_posts,
	    	};
		});

    	
    },
    createPost: function(book, post) {

    	// Check for existing book
    	if (References.checkForBook(book, post)) {
        $ionicLoading.show({ template: 'You already have a post for this book!', noBackdrop: true, duration: 1500 });
    		return;
    	}

    	// Add id
    	post.id = Math.random().toString(36).slice(2);

    	// Add to references
    	createReference(post);

    	// Upload post to db
    	return AWSHelper.uploadPost(book, post)
    }

  }
});



// Posts Controller

app.controller('PostCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, $ionicLoading, $ionicScrollDelegate, $ionicTabsDelegate, $sessionStorage, $location, Posts, Results, References, User) {

  // Fake posts from factory
  //$scope.posts = Posts.selling();

  //My user information
  $scope.me = User.user();


  // Get selected book for subheader
  $scope.book = Results.getBook();

  // Configure Nav-Bar buttons
  $scope.showPostButtons = true;

  // Back Navigation
  $scope.back = $rootScope.back;

  // Message post
  // $scope.message = function(post) {
  //  Posts.message(post);
  // }

  // Selector data
  $scope.data = {
    'price': '',
    'edition': '',
    'condition': '',
    'comments': ''
  }

  // Post type
  // if ($rootScope.currentState === 'home.posts.selling') {
  //  $scope.type = 'sell';
  // }
  // if ($rootScope.currentState === 'home.posts.buying') {
  //  $scope.type = 'buy';
  // }
  //$scope.type = 'sell';


  // Possible conditions
  $scope.conditions = Posts.conditions();

  // Create Post
  $scope.createPost = function () {
    // New Post
    var post = { 
      id: '',   // Set in factory
      user: $scope.me.name,
      userID: $scope.me.id,
      userIcon: $scope.me.icon,
      price: $scope.data.price, 
      edition: $scope.data.edition, 
      condition: $scope.data.condition,
      images: $scope.images, 
      comments: $scope.data.comments, 
      type: $scope.type // Set in factory
    };

    // Alert user if any field empty
    if (post.price === '' || post.price !== parseInt(post.price)) {
      $ionicLoading.show({ template: 'Please add a price in dollars', noBackdrop: true, duration: 2000 });
      return;
    }
    if (post.edition === '' || post.edition !== parseInt(post.edition)) {
      $ionicLoading.show({ template: 'Please add an edition', noBackdrop: true, duration: 2000 });
      return;
    }
    if (post.condition === '') {
      $ionicLoading.show({ template: 'Please select a condition', noBackdrop: true, duration: 2000 });
      return;
    }

    if (post.comments === '') {
      post.comments = ' ';
    }

    $ionicLoading.show({ template: 'Nice, your post will be up shortly!', noBackdrop: true, duration: 2000 });

    // Hide Modal
    $scope.createModal.hide();

    // Clear form data
    clearFormData();


    // Add Post
    console.log('New Post: ');
    console.log(post);
    Posts.createPost($scope.book, post)
      .then(function() {
        Posts.getPosts($scope.book);
      });

    // Resize scroll container
    $ionicScrollDelegate.$getByHandle('postScroll').scrollBottom();
  }

  var clearFormData = function() {
    $scope.data = {
      'price': '',
      'edition': '',
      'condition': '',
      'comments': ''
    }
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

    // Select post type
    if ($rootScope.currentState === 'home.posts.selling') {
      $ionicTabsDelegate.select(0);
      $scope.type = 'sell';
    }
    if ($rootScope.currentState === 'home.posts.buying') {
      $ionicTabsDelegate.select(1);
      $scope.type = 'buy';
    }
  }

  $scope.closeCreatePost = function() {
    $scope.createModal.hide();
  }

  $scope.toggleType = function() {
    //console.log('Toggle create post type');
    if ($scope.type === 'sell') {
      console.log('Toggle to post type: buy');
      $ionicTabsDelegate.select(1);
      $scope.type = 'buy';
      return;
    }
    if ($scope.type === 'buy') {
      console.log('Toggle to post type: sell');
      $ionicTabsDelegate.select(0);
      $scope.type = 'sell';
      return;
    }
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
    //$scope.detailModal.remove();
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


  // Dummy images
  $scope.images = [];

  $scope.addImage = function() {
    var image = takePicture();
  }


  // init variables
  var pictureSource; // picture source
  var destinationType; // sets the format of returned value
  var url;

  //on DeviceReady check if already logged in (in our case CODE saved)
  ionic.Platform.ready(function() {
    console.log("ready get camera types");
    if (!navigator.camera)
    {
      // error handling
      return;
    }

    pictureSource=navigator.camera.PictureSourceType.PHOTOLIBRARY;
    //pictureSource = navigator.camera.PictureSourceType.CAMERA;
    destinationType = navigator.camera.DestinationType.FILE_URI;
    //destinationType = navigator.camera.DestinationType.DATA_URL;
  });


  // // take picture
  var takePicture = function() {
    console.log("got camera button click");

    var options = {
      quality: 50,
      destinationType: destinationType,
      sourceType: pictureSource,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 720,
      targetHeight: 720,

    };

    if (!navigator.camera)
    {
    // error handling
      console.log("Camera error!");
      return;
    }

    navigator.camera.getPicture(
      function (imageURI) {
        console.log("got camera success ", imageURI);
        $scope.images.push(imageURI);
        $scope.$apply();
        return imageURI;
      },
      function (err) {
        console.log("got camera error ", err);
        return false;
        // error handling camera plugin
      },
      options
    );
  };

});




app.controller('PostSellCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, $ionicLoading, $ionicScrollDelegate, $ionicTabsDelegate,Posts, Results, References, User) {

  // Fake posts from factory
  $scope.posts = Posts.selling();

  // $scope.posts = [
  //   { id: '', user: 'Elias G', userIcon: 'img/test/boy1.jpg', price: 10, edition: 7, condition: 'Good', images: [], comments: '', type: 'sell'}
  // ];

  // Posts.getPosts().then(function(posts) {
  //  $scope.posts = posts.sell;
  // });
  //$scope.posts = Posts.getPosts().sell;

  // My user information
  $scope.me = User.user();

  // Get selected book for subheader
  $scope.book = Results.getBook();

  // Configure Nav-Bar buttons
  $scope.showPostButtons = true;

  // Back Navigation
  $scope.back = $rootScope.back;

  // Message post
  $scope.message = function(post) {
    Posts.message(post);
  }


  // Post Detail Modal
  $ionicModal.fromTemplateUrl('templates/post-detail-modal.html', {
    id: 'detail',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.detailModal = modal;
  });

  $scope.openPostDetail = function(post) {
    $scope.post = post;
    $scope.detailModal.show();

    console.log('Opened detail for ' + $scope.post.type + ' post from ' + $scope.post.user);
  }

  $scope.closePostDetail = function() {
    $scope.detailModal.hide();
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
    //$scope.createModal.remove();
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




// Posts Controller

app.controller('PostBuyCtrl', function($rootScope, $scope, $window, $stateParams, $location, $ionicModal, $ionicPopup, Posts, Results, User) {

  // Fake posts from factory
  $scope.posts = Posts.buying();

  // Posts.getPosts().then(function(posts) {
  //  $scope.posts = posts.buy;
  // });

  //$scope.posts = Posts.getPosts().buy;

  // My user information
  $scope.me = User.user();

  // Get selected book for subheader
  $scope.book = Results.getBook();

  // Configure Nav-Bar buttons
  $scope.showPostButtons = true;

  // Back Navigation
  $scope.back = $rootScope.back;


  $scope.message = function(post) {
    Posts.message(post);
  }


  // Post Detail Modal
  $ionicModal.fromTemplateUrl('templates/post-detail-modal.html', {
    id: 'detail',
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.detailModal = modal;
  });

  $scope.openPostDetail = function(post) {
    $scope.post = post;
    $scope.detailModal.show();

    console.log('Opened detail for ' + $scope.post.type + ' post from ' + $scope.post.user.name);
  }

  $scope.closePostDetail = function() {
    $scope.detailModal.hide();
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
    //$scope.createModal.remove();
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
