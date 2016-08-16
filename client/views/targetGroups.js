Template.targetGroupsView.onCreated(function(){
	this.autorun(()=>{
		this.subscribe('targetGroups');
	});
});

Template.targetGroupsView.helpers({
	targetGroups(){
		return TargetGroups.find({})
	}
})