Template.targetGroupView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		var slug = FlowRouter.getParam('slug');
		instance.subscribe('SingletargetGroups',slug);
	});
});

Template.targetGroupView.helpers({
	targetGroup(){
		return TargetGroups.findOne({slug: FlowRouter.getParam("slug")})
	}
})