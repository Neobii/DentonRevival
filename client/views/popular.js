Template.popularView.helpers({
	popularProblems() {
		return Problems.find({}, {sort: {score: -1}, limit: 3});
	}
})