angular.module('controllers')
    .controller('HomeCtrl', function($scope, $cordovaDevice, $cordovaBarcodeScanner, $state, $cordovaSQLite, db) {
        var data;

        // db.then(function(val) {
        //     console.log(val);
        // },
        // function(){
        //     console.log('Error');
        // });


            
        // document.addEventListener("deviceready", function () {
        //
        // 	// Open the database
        // 	console.log('abriendo BD');
        // 	var db2 = $cordovaSQLite.openDB({name: "lector.db", bgType: 1});
        //
        //     console.log(db2);
        //
        // 	var query = "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, brand TEXT, count NUM, code TEXT)";
        // 	$cordovaSQLite.execute(db, query, ["test", 100]).then(function (res) {
        // 		console.log("insertId: " + res.insertId);
        // 	}, function (err) {
        // 		console.error(err);
        // 	});
        //
        //
        // 	};
        //
        //
        // 	console.log("this is a test");
        // 	$scope.execute();
        // });


        // console.log($cordovaDevice.getDevice());
        // console.log(Object.keys(ionic.Platform.device()).length);

        $scope.read = function() {

            console.log(ionic.Platform.device());
            console.log(Object.keys(ionic.Platform.device()).length);

            if ( Object.keys(ionic.Platform.device()).length != 0 ){
                document.addEventListener("deviceready", function () {
                    $cordovaBarcodeScanner
                        .scan()
                        .then(function(barcodeData) {
                            //console.log("Barcode -> " + barcodeData.text);
                            //console.log("Barcode Format -> " + barcodeData.format);
                            //console.log("Cancelled -> " + barcodeData.cancelled);

                            if ( barcodeData.cancelled ){
                                //$state.go("app.home");
                                return;
                            }else{
                                data = {
                                    success: true,
                                    data: [
                                        {
                                            "barcode": barcodeData.text,
                                            "barcode_format": barcodeData.format
                                        }
                                    ]
                                };
                            }
                            $state.go('app.result', data);
                        }, function(error) {
                            console.log("An error happened -> " + error);
                            data = {
                                success: false,
                                message: "We have a problem with the plugin"
                            }
                            $state.go('app.result', data);
                        });
                }, false);
            }else{
                data = {
                    success: true,
                    data: [
                        {
                            "barcode": "1234567890",
                            "barcode_format": "QR_CODE"
                        }
                    ]
                };
                $state.go('app.result', data);
            }
        }
    }
)

