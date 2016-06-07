Template.popularView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('problems');
	});
});	
Template.popularView.helpers({
	popularProblems() {
		return Problems.find({}, {sort: {score: -1}, limit: 3});
	}
})