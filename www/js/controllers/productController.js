angular.module('controllers')
    .controller('ProductCtrl', function($scope, $stateParams, $state) {
    
        $scope.backToHome = function (){
            $state.go('app.product');
        }
        $scope.new = function(){
            $state.go('app.product-new');
        }
        $scope.submit = function(){
            console.log("this is a example to submit");
        }
    });