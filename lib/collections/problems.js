Problems = new Meteor.Collection("problems");

Problems.helpers({
	solutions() {
		return Solutions.find({problemId: this._id});
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