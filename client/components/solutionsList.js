Template.solutionsList.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('solutions');
	});
});
Template.solutionsList.helpers({
	solutions() {
		return Solutions.find({}, {sort: {score: -1}, limit: 3}).fetch();
	}
});