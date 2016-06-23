angular.module('users', [ ])
.controller('UserController', [ '$http', function($http){
  var controller = this;

	controller.users = [ ];

  $http.get('../test-data/team-members.json').success(function(data){
    controller.users = data;
  });
}]);