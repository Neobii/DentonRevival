AutoForm.hooks({
	insertProblem: {
		onSuccess() {
			FlowRouter.go("home");
		}
	}
})