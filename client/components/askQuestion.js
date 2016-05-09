Template.askQuestion.events({
	"click [data-action='vote-yes']"(){
		Metrics.update({_id: this._id}, {$inc: {votesYes: 1}});
		UsersMetrics.insert({metricId: this._id, userId: Meteor.userId()})
	},
	"click [data-action='vote-no']"(){
		Metrics.update({_id: this._id}, {$inc: {votesNo: 1}});
		UsersMetrics.insert({metricId: this._id, userId: Meteor.userId()})
	}
})