angular.module('Lists', [ ])
.controller('ListController', function(){
	this.list = 1;

	this.selectList = function(selectedList){
		this.list = selectedList;
	};

	this.isSelected = function(listSelected){
		return this.list === listSelected;
	};
});