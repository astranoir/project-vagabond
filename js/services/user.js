angular.module('User', [ ])
.factory('User', ['$http', function UserFactory($http){
	return {
		all: function() {
			return $http({method: "GET", url: "../test-data/team-members.json"});
		}
	};
}]);