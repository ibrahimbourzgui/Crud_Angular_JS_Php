var app = angular.module('myApp', [])
app.controller('myController', function($scope, $http) {
   $scope.btname = 'ADD'
 
    $scope.insertIntoDB = function() {

        if ($scope.nom == null) {
            alert('Enter Nom')
            return;
        } else if ($scope.prenom == null) {
            alert('Enter Prenom')
            return;
        } else if ($scope.phone == null) {
            alert('Enter Phone')
            return;
        }
        $http.post('../Model/insert.php', {
            'send_nom': $scope.nom,
            'send_prenom': $scope.prenom,
            'send_phone': $scope.phone,
            'send_btnName': $scope.btname,
            'send_id': $scope.id
        }).success(function(data) {
            alert(data);
            $scope.loadTable();
            $scope.nom = null;
            $scope.prenom = null;
            $scope.phone = null;
            $scope.btname = 'ADD'

        })

    }

    $scope.loadTable = function() {
        $http.get('../Model/select.php').success(function(data) {
            $scope.val = data;
        })
    }

$scope.updateDB = function(id, nom, prenom, phone) {
if($scope.btname == 'ADD'){
    $scope.id = id;
    $scope.nom = nom;
    $scope.prenom = prenom;
    $scope.phone = phone;
    $scope.btname = 'Update'
}else if ($scope.btname =='Update'){
    $scope.id = null;
    $scope.nom = null;
    $scope.prenom = null;
    $scope.phone = null;
    $scope.btname = 'ADD'
}
      
    }

         $scope.deleteDB = function(id) {
            if (confirm('Are You Sure, You Want to Delete')) {
                $http.post('../Model/delete.php', { 'send_id' : id })
                .success(function(data) {
                 $scope.loadTable();
                })
            }else {
                false;
            }
        }


})
