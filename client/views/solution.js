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
		Solutions.update({_id: solutionId}, {$inc: {score: 1}})
	},
	"click [data-action='downvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		Solutions.update({_id: solutionId}, {$inc: {score: -1}})
	},
})