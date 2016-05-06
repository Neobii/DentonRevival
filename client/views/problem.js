Template.problemView.helpers({
	problem() {
		return Problems.findOne({_id: FlowRouter.getParam("_id")})
	}
})

Template.problemView.events({
	"click [data-action='upvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		Problems.update({_id: problemId}, {$inc: {score: 1}})
	},
	"click [data-action='downvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		Problems.update({_id: problemId}, {$inc: {score: -1}})
	},
})

AutoForm.hooks({
	newCommentProblem: {
		onSuccess() {
			Session.set("isAddingComment", false)
		}
	}
})