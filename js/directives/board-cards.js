angular.module('board-cards', [ ])
.directive('cardDetail', function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/pages/cards/detail.html'
	};
})
.directive('cardForm', function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/pages/cards/form.html'
  };
});