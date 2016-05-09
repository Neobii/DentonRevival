Template.statsView.helpers({
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
	commentsCount() {
		return Comments.find().count()
	},
	todosCount() {
		return SolutionsTodos.find().count()
	},
	metricsCount() {
		return Metrics.find().count()
	}
});