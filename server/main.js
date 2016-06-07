import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	AccountsGuest.enabled = true;
  // code to run on server at startup
});

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

Meteor.publish('projects',function(){
	 return Projects.find();
});
Meteor.publish('solutions', function(){
	 return Solutions.find();
});

Meteor.publish('solutionsTodos',function(){
     return SolutionsTodos.find();
});
Meteor.publish('targetGroups',function(){
	 return TargetGroups.find();

});
