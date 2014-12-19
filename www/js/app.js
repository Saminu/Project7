/**
 * Created by simba on 15/12/2014.
 */
var Application = angular.module ('Application',[]);

Application.controller('casinoCtrl', ['$scope','$http', function($scope, $http){

    var shuffleArray = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    $http.get('js/listings/casino.json').success(function(data){
        $scope.casino = data;

        shuffleArray($scope.casino);
    });

}]);