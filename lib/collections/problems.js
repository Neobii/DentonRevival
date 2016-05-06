Problems = new Meteor.Collection("problems");

Problems.after.update(function(userId, doc) {
	if(doc.score < -5){
		Problems.remove({_id: doc._id});
		Comments.remove({problemId: doc._id});
	}
})

Problems.helpers({
	solutions() {
		return Solutions.find({problemId: this._id}, {sort: {score: -1}});
	},
	comments() {
		return Comments.find({problemId: this._id}, {sort: {date: -1}})
	}
})

Problems.attachSchema({
	title: {
		type: String,
		label: "What's your problem?"
	},
	score: {
		type: Number,
		defaultValue: 0,
		label: "Score"
	},
	description: {
		type: String,
		label: "Description, optional (don't offer solutions just yet!)",
		optional: true
	}
})