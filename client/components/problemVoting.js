Template.problemVoting.events({
	"click [data-action='upvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		App.upvote("problem", problemId);
	},
	"click [data-action='downvote']"(e, t) {
		let problemId = $(e.currentTarget).attr("data-problemId");
		App.downvote("problem", problemId);
	},
})

Template.problemVoting.helpers({
	hasVotedOn(problemId){
		return !!(Meteor.user().hasVoted("problem", problemId));
	}
})