angular.module('Users', ['User'])
.controller('UserController', ['User', function(User){
  var controller = this;

	controller.users = [ ];

  User.all().success(function(data){
    controller.users = data;
  });
}]);