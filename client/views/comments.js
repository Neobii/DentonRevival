Template.commentsView.helpers({
	comments() {
		if(FlowRouter.getRouteName() === "comments"){
			return Comments.find({type: "global"}, {sort: {date: -1}})
		}
		if(FlowRouter.getRouteName() === "problem") {
			return Comments.find({problemId: FlowRouter.getParam("_id")}, {sort: {date: -1}});
		}
		if(FlowRouter.getRouteName() === "solution") {
			return Comments.find({solutionId: FlowRouter.getParam("solutionId")}, {sort: {date: -1}});
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