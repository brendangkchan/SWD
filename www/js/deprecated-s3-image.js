
	var uploadImage = function(image, postID, imageID) {

		var d = $q.defer();
		var user = User.user();

		AWSService.credentials().then(function() {

		    // Handle the upload
		    AWSService.s3({
		    	params: {
		    		Bucket: AWSService.Bucket()
		    	}
		    }).then(function(s3) {

				// We have a handle of our s3 bucket
				var file = image; // Get the first file
				var key = user.id + '-' + postID + '-' + imageID + '.jpg';

				//var key = image.substr(image.lastIndexOf('/') + 1);

				var params = {
					//ACL: 'public-read',
					Key: key,
					ContentType: 'image/jpeg',
					Body: file
				}

				console.log('Uploading image: ' + image);
				console.log('With key: ' + key);

				s3.putObject(params, function(err, data) {

					if (err) {
						console.log(err);
					}

					// The file has been uploaded
					// or an error has occurred during the upload
					if (!err) {
						console.log('Upload successful!');
						console.log(data);

						var params = {
							Bucket: AWSService.Bucket(), 
							Key: key, 
							//acl: 'public-read'
							//Expires: 900*4 
						};
						s3.getSignedUrl('getObject', params, 
							function(err, url) {
								
								if (err) {
									console.log(err);
								}

								// Now have signed url
								console.log('Image URL: ' + url);
						});
					}
				});
		  	});
		});
		return d.promise;
	};


 	var accessKeyId, secretAccessKey;


    var  uploadImageAlt = function(imageURI, postID, imageID) {
 
        var deferred = $.Deferred(),
            ft = new FileTransfer(),
            options = new FileUploadOptions();

        var user = User.user();

        var fileName = user.id + '-' + postID + '-' + imageID + '.jpg';


        var s3URI = encodeURI("http://bgchan-swd.s3.amazonaws.com/"),
	    acl = "public-read";


	    var 
		    //crypto = require('crypto'),
		    crypto,
		    secret = secretAccessKey,
		    policy,
		    policyBase64,
		    signature;
	 
		policy = {
		    "expiration": "2020-12-31T12:00:00.000Z",
		    "conditions": [
		        {"bucket": "bgchan-swd"},
		        ["starts-with", "$key", ""],
		        {"acl": 'public-read'},
		        ["starts-with", "$Content-Type", ""],
        		["content-length-range", 0, 524288000]
		    ]
		};

		//["starts-with", "$key", ""],
		//["starts-with", "$Content-Type", ""],
        //["content-length-range", 0, 524288000]
		 
		//policyBase64 = new Buffer(JSON.stringify(policy), 'utf8').toString('base64');
		policyBase64 = encodeURI(JSON.stringify(policy)).toString(CryptoJS.enc.Base64);
		//policyBase64 = JSON.stringify(policy).toString(CryptoJS.enc.Base64);
		console.log("Policy Base64:");
		console.log(policyBase64);
		 
		//signature = crypto.createHmac('sha1', secret).update(policyBase64).digest('base64');
		signature = CryptoJS.SHA1(secret).toString(CryptoJS.enc.Base64);

		console.log("Signature:");
		console.log(signature);



        console.log('Uploading image: ' + imageURI);
		console.log('With key: ' + fileName);
 
        options.fileKey = "file";
        options.fileName = fileName;
        options.mimeType = "image/jpeg";
        options.chunkedMode = false;
        var params = {
            "key": fileName,
            "AWSAccessKeyId": accessKeyId,
            "acl": "public-read",
        	"policy": policyBase64,
            "signature": signature,
            "Content-Type": "image/jpeg",
            //"file": imageURI
            // ft. upload with file: no key, without file: no awsaccess
            // http post with file: nothing happens, without: conflicting acl, policy
        };

        options.params = JSON.stringify(params);
        //options.params = params;


        console.log('params:');
        console.log(JSON.stringify(options));
 
        ft.upload(imageURI, s3URI,
            function (e) {
            	// Success
            	console.log(e);
                deferred.resolve(e);
            },
            function (e) {
            	// Fail
            	console.log(e);
                deferred.reject(e);
            }, 
            options);

 
        return deferred.promise();    
    };