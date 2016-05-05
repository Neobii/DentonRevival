Template.solution.events({
	"click [data-action='upvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		Solutions.update({_id: solutionId}, {$inc: {score: 1}})
	},
	"click [data-action='downvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		Solutions.update({_id: solutionId}, {$inc: {score: -1}})
	},
})