Template.popularView.helpers({
	problemCount() {
		return Problems.find().count();
	},
	solutionCount() {
		return Solutions.find().count();
	},
	voteCount() {
		return UsersVotes.find().count()
	},
	segmentCount(){
		return TargetGroups.find().count();
	},
	targetGroups() {
		return TargetGroups.find();
	},
	popularProblems() {
		return Problems.find({}, {sort: {score: -1}, limit: 3});
	}
})