Template.problemView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		var slug = FlowRouter.getParm("slug");
		instance.subscribe('oneProblem',slug);	
	});
});
Template.problemView.helpers({
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")})
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