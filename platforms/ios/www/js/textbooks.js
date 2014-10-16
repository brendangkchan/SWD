var app = angular.module('textbooks', []);


// Conversation Controller
app.factory('Textbooks', function($state, $http, $sessionStorage, $localStorage) {

	var books;
	$localStorage.batches = [];


	$http.get('res/textbooks-p1.json').success (function(data){
        books = data;

        console.log('Parsing ' + books.length + ' textbooks');

		var batch = [];

		var count = 0;        	

        // For each book
    	for (var i = 0; i < 10000 && i < books.length; i++) {
    		var book = books[i];

        	// Increase count
        	count++;

        	// Single request
        	var request = 
        		{
	        		'PutRequest' : {
			        	'Item' : {
			        		'id' : { 'S' : book.id },
			        		'course_id' : { 'S' : book.course_id },
			        		'title' : { 'S' : book.title },
			        		'author' : { 'S' : book.author },
			        		'isbn13' : { 'S' : book.isbn13 },
			        		'isbn10' : { 'S' : book.isbn10 }
			        	}
			        }
		        };

	        // Save request to batch
	        batch.push(request);

	        // After every 25
	        if (count === 25) {

	        	// Reset count
	        	count = 0;
	        	batch = [];

	        	// New batch
	        	requestBatch = 
		        	{
		        		'RequestItems' : {
		        			'test-textbook-3' : batch
		        		}
		        	};

	        	// Save batch
	        	$localStorage.batches.push(requestBatch);
	        }

		}

		// Check last batch
		if (batch.length > 0) {
			// New batch
        	requestBatch = 
	        	{
	        		'RequestItems' : {
	        			'test-textbook-3' : batch
	        		}
	        	};
        	// Log batch
        	console.log(requestBatch);

        	// Save batch
        	$localStorage.batches.push(requestBatch);
		}

        // Log results
        console.log($localStorage.batches[50]);
        console.log('Created ' + $localStorage.batches.length + ' batches');
    });

	return {
		uploadTextbooks: function() {
			var user = User.user();
			var d = $q.defer();

			// Load AWS credentials
	        AWSService.credentials().then(function() {
	            AWSService.dynamo({
	              params: {TableName: 'test-textbook-3'}
	            })
	            .then(function(table) {
				// Query table for user
				console.log('Uploading books to table: ' + 'test-textbook-3');
                    
					// Reference from own created post
                    var itemParams = {
                    	Item: {
                    		// User's id
	            			'userEmail': { 'S': user.id },
	            			'userID': { 'S': user.id },
	            			'school': { 'S': user.schoolID },
	            			// add post id to list
	                		'post': { 'S': post.id },
	                		'price': { 'S': post.price.toString() },
	                		'title': { 'S': post.type + ' ' + book.title },
	                		'author': { 'S': book.author },
	                		'icon': { 'S': book.icon },
	                		'type': { 'S': post.type },
	                		'status': { 'S': 'open' }
	                		//'conversations': { 'SS': ['null'] }
                    	},
                    	ReturnValues: 'ALL_OLD'
                    };

                    console.log(itemParams.Item);

                    // Put entry in table
                    table.putItem(itemParams, 
                    	function(err, data) {
                    		if (data) {
                    			//console.log(data);
					          	d.resolve(data);
					        } else {
					        	console.log(err, err.stack);
					          	d.reject(err);
					        }
                	}); 
				});
	        });
			return d.promise;
		}



	}
});