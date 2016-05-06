Template.problemView.helpers({
	problem() {
		return Problems.findOne({_id: FlowRouter.getParam("_id")})
	}
})

Template.problemView.events({
	"click [data-action='upvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		App.upvote("problem", problemId)
	},
	"click [data-action='downvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		App.downvote("problem", problemId);
	},
})

AutoForm.hooks({
	newCommentProblem: {
		onSuccess() {
			Session.set("isAddingComment", false)
		}
	}
})