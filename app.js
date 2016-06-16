(function(){
  var app = angular.module('board', [ ]);

  app.controller('BoardController', function(){
  	this.cards = tasks;
  });

  app.controller('ListController', function(){
  	this.list = 1;

  	this.selectList = function(selectedList){
  		this.list = selectedList;
  	};

  	this.isSelected = function(listSelected){
  		return this.list === listSelected;
  	};
  });

  var tasks = [
	  {
	  	title: 'Create rules checklist',
	  	responsible: ['Student A', 'Student B'],
	  	accountable: 'Student A',
	  	consulted: ['Student C', 'Student D', 'mentor Alpha'],
	  	informed: ['Student E', 'Student F', 'Student G', 'mentor Beta'],
	  	description: 'Distill rules into easy-to-digest checklist',
	  	dueDateUTC: '1288323623006',
	  	status: 'Done',
	  	isArchived: true,
	  	updatedBy: 'system',
	  	updatedOnUTC: '1288323623006',
	  	order: 5
	  },
	  {
	  	title: 'CAD Design for Arms',
	  	responsible: ['Student 1'],
	  	accountable: 'Student 1',
	  	consulted: ['Student 2', 'Student 3'],
	  	informed: ['Student 2', 'Student 3', 'Student 4'],
	  	description: 'Create CAD design for grabbing arms in SolidWorks',
	  	dueDateUTC: '1288323623006',
	  	status: 'Needs Discussion',
	  	isArchived: false,
	  	updatedBy: 'system',
	  	updatedOnUTC: '1288323623006',
	  	order: 1
	  },
	  {
	  	title: 'CAD Design for Drive Train',
	  	responsible: ['Student 1'],
	  	accountable: 'Student 1',
	  	consulted: ['Student 2', 'Student 3'],
	  	informed: ['Student 2', 'Student 3', 'Student 4'],
	  	description: 'Create CAD design for drive train in SolidWorks',
	  	status: 'Ready to Be Worked',
	  	isArchived: false,
	  	updatedBy: 'system',
	  	updatedOnUTC: '1288323623006',
	  	order: 55
	  },
	  {
	  	title: 'Order food for meeting',
	  	responsible: ['Mentor 1', 'Mentor 2'],
	  	accountable: 'Mentor 2',
	  	consulted: ['Mentor 12', 'Mentor 3'],
	  	informed: ['Mentor 7', 'Student 9', 'Student 11'],
	  	description: 'Order food; Requirements: includes meat dish, gluten-free dish, vegetarian dish',
	  	status: 'In Progress',
	  	budgetUSD: 125,
	  	finalCostUSD: 123.47,
	  	isArchived: false,
	  	updatedBy: 'system',
	  	updatedOnUTC: '1288323623006',
	  	order: 0
	  }
  ];
})();