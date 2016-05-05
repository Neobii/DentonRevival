Template.newSolutionView.helpers({
	problem() {
		return Problems.findOne({_id: FlowRouter.getParam("_id")});
	}
})

AutoForm.hooks({
	insertNewSolution: {
		onSuccess() {
			FlowRouter.go("problem", {_id: FlowRouter.getParam("_id")});
		}
	}
})