angular.module('Statuses', ['Status'])
.controller('StatusController', [ 'Status', function(Status){
  var controller = this;

  controller.statuses = [ ];

  Status.all().success(function(data){
    controller.statuses = data;
  });
}]);