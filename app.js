(function(){
  var app = angular.module('board', [ ]);

  app.controller('BoardController', function(){
  	this.cards = tasks;
  	
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
  });

  app.controller('UserController', function(){
  	this.users = teamMembers;
  })

  app.controller('ListController', function(){
  	this.list = 1;

  	this.selectList = function(selectedList){
  		this.list = selectedList;
  	};

  	this.isSelected = function(listSelected){
  		return this.list === listSelected;
  	};
  });
  app.controller('StatusController', function(){
  	this.statuses = cardStatuses;
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

  var teamMembers = [
  	{
  		name: 'Student 1',
  		email: 'student1@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 2',
  		email: 'student2@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 3',
  		email: 'student3@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 4',
  		email: 'student4@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 5',
  		email: 'student5@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 6',
  		email: 'student6@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 7',
  		email: 'student7@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 8',
  		email: 'student8@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 9',
  		email: 'student9@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Student 10',
  		email: 'student10@sample.com',
  		role: 'Student',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor A',
  		email: 'mentora@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor B',
  		email: 'mentorb@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor C',
  		email: 'mentorc@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor D',
  		email: 'mentord@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor E',
  		email: 'mentore@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor F',
  		email: 'mentorf@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor G',
  		email: 'mentorg@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor H',
  		email: 'mentorh@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor I',
  		email: 'mentori@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	},
  	{
  		name: 'Mentor J',
  		email: 'mentorj@sample.com',
  		role: 'Mentor',
  		phone: '5555555555'
  	}
  ];

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