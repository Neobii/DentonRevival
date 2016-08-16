Template.popularView.onCreated(function(){

	this.autorun(()=>{
		this.subscribe('problems');
	});
});	
Template.popularView.helpers({
	popularProblems() {
		return Problems.find({}, {sort: {score: -1}, limit: 3});
	}
})