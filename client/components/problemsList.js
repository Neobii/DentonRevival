Template.problemsList.helpers({
	problems() {
		return Problems.find({}, {sort: {score: -1}})
	},
})