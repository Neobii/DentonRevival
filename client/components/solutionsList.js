Template.solutionsList.helpers({
	solutions() {
		return Solutions.find({}, {sort: {score: -1}})
	}
})