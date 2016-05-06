Template.problemsList.events({
	"click [data-action='upvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		Problems.update({_id: problemId}, {$inc: {score: 1}})
	},
	"click [data-action='downvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		Problems.update({_id: problemId}, {$inc: {score: -1}})
	},
})

Template.problemsList.helpers({
	problems() {
		return Problems.find({}, {sort: {score: -1}})
	}
})