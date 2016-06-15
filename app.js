(function(){
  var app = angular.module('board', [ ]);

  app.controller('BoardController', function(){
  	this.cards = tasks;
  });

  var tasks = [
	  {
	  	title: 'CAD Design for Arms',
	  	responsible: ['student 1'],
	  	accountable: 'student 1',
	  	consulted: ['student 2', 'student 3'],
	  	informed: ['student 2', 'student 3', 'student 4'],
	  	description: 'Create CAD design for grabbing arms in SolidWorks',
	  	status: 'Ready to be Worked',
	  	updatedBy: 'system',
	  	updatedAt: 'Wed, 15 Jun 2016 16:59:33 UTC'
	  },
	  {
	  	title: 'CAD Design for Drive Train',
	  	responsible: ['student 1'],
	  	accountable: 'student 1',
	  	consulted: ['student 2', 'student 3'],
	  	informed: ['student 2', 'student 3', 'student 4'],
	  	description: 'Create CAD design for drive train in SolidWorks',
	  	status: 'Ready to be Worked',
	  	updatedBy: 'system',
	  	updatedAt: 'Wed, 15 Jun 2016 16:59:33 UTC'
	  }
  ];
})();