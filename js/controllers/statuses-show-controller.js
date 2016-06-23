angular.module('statuses', [ ])
.controller('StatusController', [ '$http', function($http){
  var controller = this;

  controller.statuses = [ ];

  $http.get('../test-data/card-statuses.json').success(function(data){
    controller.statuses = data;
  });
}]);