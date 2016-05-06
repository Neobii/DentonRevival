Template.solutionView.helpers({
	solution() {
		return Solutions.findOne({_id: FlowRouter.getParam("solutionId")})
	},
	problem() {
		return Problems.findOne({_id: FlowRouter.getParam("_id")});
	}
})

Template.solutionView.events({
	"click [data-action='upvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		App.upvote("solution", solutionId);
	},
	"click [data-action='downvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		App.downvote("solution", solutionId)
	},
})