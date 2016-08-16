Template.problemView.onCreated(function(){

	this.autorun(()=>{
		var slug = FlowRouter.getParam("slug");
		this.subscribe('oneProblem',slug);	
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

