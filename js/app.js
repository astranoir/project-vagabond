angular.module('Board', [ ])
.controller('BoardController', ['Task', function(Task){
	var controller = this;

  controller.cards = [ ];

  Task.all().success(function(data){
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