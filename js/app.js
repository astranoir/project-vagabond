angular.module('board', ['users', 'statuses', 'lists', 'board-cards'])
.controller('BoardController', [ '$http', function($http){
	var controller = this;

  controller.cards = [ ];

  $http.get('../test-data/board-tasks.json').success(function(data){
    controller.cards = data;
  });
	
	controller.createNewCard = function(){
		var newCard = {
	  	title: '',
	  	responsible: [],
	  	accountable: '',
	  	consulted: [],
	  	informed: [],
	  	description: '',
	  	dueDateUTC: '',
	  	budgetUSD: 0,
	  	finalCostUSD: 0,
	  	status: '',
	  	isArchived: false,
	  	updatedBy: 'system',
	  	updatedOnUTC: '',
	  	order: 999
	  };
	  return newCard;
	};

	controller.newCard = controller.createNewCard();

	controller.addCard = function(){
		controller.newCard.updatedOnUTC = new Date();
		controller.newCard.updatedBy = 'system';
		controller.cards.push(controller.newCard);

  	controller.newCard = controller.createNewCard();
  	return controller.cards;
	};
}]);