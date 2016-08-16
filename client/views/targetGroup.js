Template.targetGroupView.onCreated(function(){

	this.autorun(()=>{
		var slug = FlowRouter.getParam('slug');
		this.subscribe('SingletargetGroups',slug);
	});
});

Template.targetGroupView.helpers({
	targetGroup(){
		return TargetGroups.findOne({slug: FlowRouter.getParam("slug")})
	}
})