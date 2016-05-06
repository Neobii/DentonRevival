Template.commentsView.helpers({
	comments() {
		if(FlowRouter.getRouteName() === "comments"){
			return Comments.find({type: "global"}, {sort: {date: -1}})
		}
		if(FlowRouter.getRouteName() === "problem") {
			var p = Problems.findOne({slug: FlowRouter.getParam("slug")})
			return Comments.find({problemId: p._id}, {sort: {date: -1}});
		}
		if(FlowRouter.getRouteName() === "solution") {
			var s = Solutions.findOne({slug: FlowRouter.getParam("solutionSlug")})
			return Comments.find({solutionId: s._id}, {sort: {date: -1}});
		}
	}
})

AutoForm.hooks({
	newCommentGlobal: {
		onSuccess() {
			Session.set("isAddingComment", false)
		}
	}
})