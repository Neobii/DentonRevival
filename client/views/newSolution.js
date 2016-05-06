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