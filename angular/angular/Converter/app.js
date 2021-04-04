var myapp = angular.module('myApp',[]);
myapp.controller('myController',['$scope','$filter',function($scope,$filter){
    $scope.decimal = "";
    $scope.binary = "";
    $scope.octal = "";
    $scope.hexa = "";

    $scope.$watch('decimal',function(newValue,oldValue){
        if (newValue != "" ) {
       $scope.binary = parseInt(newValue,10).toString(2);
       $scope.octal = parseInt(newValue,10).toString(8);
       $scope.hexa = parseInt(newValue,10).toString(16).toUpperCase();
    }else{
        $scope.binary = "";
        $scope.octal = "";
        $scope.hexa = "";

    }
    });

    $scope.$watch('binary',function(newValue,oldValue){
        if (newValue != "" ) {
        $scope.decimal = parseInt(newValue,2).toString(10);
    }else{
        $scope.binary = "";
        $scope.octal = "";
        $scope.hexa = "";

    }
     });

     $scope.$watch('octal',function(newValue,oldValue){
        if (newValue != "" ) {
        $scope.decimal = parseInt(newValue,8).toString(10);
    }else{
        $scope.binary = "";
        $scope.octal = "";
        $scope.hexa = "";

    }
     });

     $scope.$watch('hexa',function(newValue,oldValue){
        if (newValue != "" ) {
        $scope.decimal = parseInt(newValue,16).toString(10);
    }else{
        $scope.binary = "";
        $scope.octal = "";
        $scope.hexa = "";

    }
     });
}]);