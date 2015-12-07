/**
 * Created by marton on 04/12/15.
 */
angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function($scope, $cordovaBarcodeScanner, $state) {
	var data;

	$scope.read = function() {
		if ( Object.keys(ionic.Platform.device()).length != 0 ){
			document.addEventListener("deviceready", function () {
				$cordovaBarcodeScanner
					.scan()
					.then(function(barcodeData) {
						//console.log("Barcode -> " + barcodeData.text);
						//console.log("Barcode Format -> " + barcodeData.format);
						//console.log("Cancelled -> " + barcodeData.cancelled);

						if ( barcodeData.cancelled ){
							$state.go("app.home");
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
})

.controller('ResultCtrl', function($scope, $stateParams, $state) {

	$scope.backToHome = function (){
		$state.go('app.home');
	}
	if ( $stateParams["success"] ){
		if ( $stateParams["data"] ){
			$scope.barcode = $stateParams["data"][0].barcode;
			$scope.barcode_format = $stateParams["data"][0].barcode_format;
		}
	}else{
		console.log($stateParams["message"]);
	}
});