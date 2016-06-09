Meteor.publish('blogEntries', function(){
	  return BlogEntries.find();
});

Meteor.publish('comments', function(){
	  return Comments.find();
});

Meteor.publish('metrics', function(){
     return Metrics.find();
});

Meteor.publish('problems', function(){
	 return Problems.find();
});
Meteor.publish('oneProblem',function(slug){
	return Problems.find({slug: slug})
});

Meteor.publish('projects',function(){
	 return Projects.find();
});

Meteor.publish('solutions', function(){
	 return Solutions.find();
});

Meteor.publish('oneSolution',function(slug){
		return Solutions.find({slug: slug})
});

Meteor.publish('solutionsTodos',function(){
     return SolutionsTodos.find();
});

Meteor.publish('targetGroups',function(){
	 return TargetGroups.find();

});

Meteor.publish('SingletargetGroups',function(slug){
	 return TargetGroups.find({slug: slug});

});

