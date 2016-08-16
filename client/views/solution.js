Template.solutionView.onCreated(function(){

	this.autorun(()=>{
		var solutionSlug = FlowRouter.getParam("solutionSlug");
		this.subscribe('oneSolution',solutionSlug);
	});
});
Template.solutionView.onCreated(function(){
	
	this.autorun(()=>{
		var singleslug = FlowRouter.getParam('slug');
		this.subscribe('oneProblem',singleslug);
	});
});
Template.solutionView.helpers({
	solution() {
		return Solutions.findOne({slug: FlowRouter.getParam("solutionSlug")})
	},
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")});
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
	"click [data-action='add-todo']"(e, t) {
		Session.set("currentlyAddingTodo", true);
	},
	"click [data-action='cancel-todo']"(e, t) {
		Session.set("currentlyAddingTodo", false);
	}
})