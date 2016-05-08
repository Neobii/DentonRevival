Template.targetGroupView.helpers({
	targetGroup(){
		return TargetGroups.findOne({slug: FlowRouter.getParam("slug")})
	}
})