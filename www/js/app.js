/**
 * Created by simba on 15/12/2014.
 */
var Application = angular.module ('Application',[]);

Application.controller('casinoCtrl', ['$scope','$http', function($scope, $http){

    $http.get('js/listings/casino.json').success(function(data){
        $scope.casino = data;
    });

}]);