angular.module('controllers')
    .controller('ResultCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
    
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
    }]
)

