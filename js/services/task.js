angular.module('Task', [ ])
.factory('Task', ['$http', function TaskFactory($http){
	return {
		all: function() {
			return $http({method: "GET", url: "../test-data/board-tasks.json"});
		}
	};
}]);