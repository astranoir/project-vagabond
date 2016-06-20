(function(){
  var app = angular.module('board', ['board-users', 'board-lists', 'board-cards']);

  app.controller('BoardController', [ '$http', function($http){
  	var board = this;

    board.cards = [ ];

    $http.get('../assets/test-data/board-tasks.json').success(function(data){
      board.cards = data;
    });
  	
  	this.createNewCard = function(){
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

  	this.newCard = this.createNewCard();

  	this.addCard = function(){
  		this.newCard.updatedOnUTC = new Date();
  		this.cards.push(this.newCard);

	  	this.newCard = this.createNewCard();
  	};
  }]);
})();