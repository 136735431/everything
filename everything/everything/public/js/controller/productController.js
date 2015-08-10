/**
 * Created by admin on 2015/8/10.
 */
var app = angular.module("myapp",[]);

app.controller("productController",["$scope","$http",function($scope,$http){
    $http.get("/productlist").success(function(data){
        if(data.code == 0){
            $scope.products = data.data;

        }else{
            alert("err");
        }
    });
}]);