Template.newSolutionView.onCreated(function(){

	this.autorun(()=>{
		var slug = FlowRouter.getParam('slug');
		this.subscribe('oneProblem',slug);
	});
});

Template.newSolutionView.helpers({
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")});
	}
})

AutoForm.hooks({
	insertNewSolution: {
		onSuccess() {
			FlowRouter.go("problem", {slug: FlowRouter.getParam("slug")});
		}
	}
})