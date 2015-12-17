var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.currentPage = 1;
  $scope.totalPages = 0;


  $scope.getUsers = function() {
    mainService.getUsers($scope.currentPage).then(function(response) {
      $scope.users = response.data;
      $scope.totalPages = response.total_pages;
    })
  };

  $scope.getUsers();

  $scope.previous = function() {
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.getUsers();
    }
  };

  $scope.next = function() {
    if ($scope.currentPage < $scope.totalPages) {
      $scope.currentPage++;
      $scope.getUsers();
    }
  };
});
