Comments = new Mongo.Collection("comments");

Comments.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	comment: {
		type: String,
		label: "Comment"
	},
	date: {
		type: Date,
		label: "Date",
		autoValue() {
			if(this.isInsert){
				return new Date();
			}
		}
	},
	type: {
		type: String,
		label: "Comment Type",
		defaultValue: "global"
	},
	problemId: {
		type: String,
		label: "Problem Id",
		optional: true
	},
	solutionId: {
		type: String,
		label: "Solution Id",
		optional: true
	}
}))