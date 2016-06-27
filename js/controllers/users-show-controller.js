angular.module('Board')
.controller('UserController', ['User', function(User){
  var controller = this;

	controller.users = [ ];

  User.all().success(function(data){
    controller.users = data;
  });
}]);