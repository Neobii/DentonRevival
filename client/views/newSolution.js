Template.newSolutionView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		var slug = FlowRouter.getParam('slug');
		instance.subscribe('oneProblem',slug);
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