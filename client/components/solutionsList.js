Template.solutionsList.onCreated(function(){
	this.autorun(()=>{
		this.subscribe('solutions');
	});
});
Template.solutionsList.helpers({
	solutions() {
		return Solutions.find({}, {sort: {score: -1}, limit: 3}).fetch();
	}
});