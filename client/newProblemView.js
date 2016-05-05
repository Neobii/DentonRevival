AutoForm.hooks({
	insertProblem: {
		onSuccess() {
			FlowRouter.go("problems");
		}
	}
})