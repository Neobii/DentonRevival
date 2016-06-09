Template.targetGroupsView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('targetGroups');
	});
});

Template.targetGroupsView.helpers({
	targetGroups(){
		return TargetGroups.find({})
	}
})