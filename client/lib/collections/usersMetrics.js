UsersMetrics = new Mongo.Collection(null);

UsersMetrics.helpers({
	metric() {
		return Metrics.findOne({_id: this.metricId});
	},
	user() {
		return Meteor.users.findOne({_id:this.userId})
	}
})

UsersMetrics.attachSchema({
	metricId: {
		type: String,
		label: "Metric Id"
	},
	userId: {
		type: String,
		label: "userId",
		autoValue() {
			if(this.isInsert){
				return this.userId;
			}
		}
	}
})