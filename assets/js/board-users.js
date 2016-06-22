(function(){
	var app = angular.module('board-users', [ ]);

	app.controller('UserController', [ '$http', function($http){
    var board = this;

  	board.users = [ ];

    $http.get('../assets/test-data/team-members.json').success(function(data){
      board.users = data;
    });
  }]);
})();