(function(){
	var app = angular.module('board-cards', [ ]);

  app.controller('StatusController', function(){
  	this.statuses = cardStatuses;
  });

  app.directive('cardDetail', function(){
  	return{
  		restrict: 'E',
  		templateUrl: 'directives/card-detail.html'
  	};
  });

  app.directive('cardForm', function(){
    return{
      restrict: 'E',
      templateUrl: 'directives/card-form.html'
    };
  });

  var cardStatuses = [
  	{
  		name: 'Proposed',
  		order: 0
  	},
  	{
  		name: 'Needs Discussion',
  		order: 1
  	},
  	{
  		name: 'Ready to Be Worked',
  		order: 2
  	},
  	{
  		name: 'In Progress',
  		order: 3
  	},
  	{
  		name: 'Done',
  		order: 4
  	}
  ];
})();