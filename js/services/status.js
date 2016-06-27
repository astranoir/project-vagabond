angular.module('Board')
.factory('Status', ['$http', function StatusFactory($http){
	return {
		all: function() {
			return $http({method: "GET", url: "../test-data/card-statuses.json"});
		}
	};
}]);