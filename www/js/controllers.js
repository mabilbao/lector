/**
 * Created by marton on 04/12/15.
 */
angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $cordovaBarcodeScanner) {

	$scope.read = function() {
		document.addEventListener("deviceready", function () {
			$cordovaBarcodeScanner
					.scan()
					.then(function(barcodeData) {
						console.log("Barcode -> " + barcodeData.text);
						console.log("Barcode Format -> " + barcodeData.format);
						console.log("Cancelled -> " + barcodeData.cancelled);


					}, function(error) {
						console.log("An error happened -> " + error);
					});
		}, false);
	}
})

.controller('ResultCtrl', function($scope, $cordovaBarcodeScanner) {


});