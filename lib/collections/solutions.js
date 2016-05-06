Solutions = new Mongo.Collection("solutions");

Solutions.hooks({
	update() {
		if(this.score < -5){
			Solutions.remove({_id: this._id})
		}
	}
})

Solutions.attachSchema(new SimpleSchema({
	problemId: {
		type: String,
		label: "Problem Id",
		autoValue() {
			if(this.isInsert && Meteor.isClient){
				return FlowRouter.getParam("_id");
			}
		}
	},
	score: {
		type: Number,
		label: "Score",
		defaultValue: 0
	},
	title: {
		type: String,
		label: "Solution",
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	}
}))