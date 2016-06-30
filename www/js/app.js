// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lector', [
	'ionic',
	'controllers',
	'services',
	'ngCordova']
)
.run(function($rootScope, $ionicPlatform, $state, $ionicHistory) {

	$ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

	$ionicPlatform.registerBackButtonAction(function () {
		if ($state.is('app.home')) {
			navigator.app.exitApp();
		} else {
			$ionicHistory.goBack();
			//navigator.app.back();
		}
	}, 101);
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/index.html"
		})
		.state('app.home', {
			url: "/home",
			views: {
				'home-tab': {
					templateUrl: "templates/home.html",
					controller: "HomeCtrl"
				}
			}
		})
		.state('app.result', {
			url: "/result",
			params: {
				success: null,
				message: null,
				data: null
			},
			views: {
				'home-tab': {
					templateUrl: "templates/result.html",
					controller: "ResultCtrl"
				}
			}
		})
		.state('app.product', {
			url: "/product",
			views: {
				'product-tab': {
					templateUrl: "templates/product/index.html",
					controller: "ProductCtrl"
				}
			}
		})
		.state('app.product-new', {
			url: "/new",
			views: {
				'product-tab': {
					templateUrl: "templates/product/new.html",
					controller: "ProductCtrl"
				}
			}
		})
		.state('app.contact', {
			url: "/contact",
			views: {
				'contact-tab': {
					templateUrl: "templates/contact.html"
				}
			}
		});


	$urlRouterProvider.otherwise("/app/home");
});