Template.solutionVoting.events({
	"click [data-action='upvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		App.upvote("solution", solutionId);
	},
	"click [data-action='downvote']"(e, t) {
		let solutionId = $(e.currentTarget).attr("data-solutionId");
		App.downvote("solution", solutionId);
	},
})

Template.solutionVoting.helpers({
	hasVotedOn(solutionId){
		return !!(Meteor.user().hasVoted("solution", solutionId));
	}
})