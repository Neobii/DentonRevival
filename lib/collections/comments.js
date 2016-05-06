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
		autoValue() {
			if(this.isInsert && Meteor.isClient){
				if(FlowRouter.getRouteName() === "problem"){
					return "problem";
				}
				if(FlowRouter.getRouteName() === "solution"){
					return "solution";
				}
				return "global";
			}
		}
	},
	problemId: {
		type: String,
		label: "Problem Id",
		optional: true,
		autoValue() {
			if(this.isInsert && Meteor.isClient){
				if(FlowRouter.getRouteName() === "problem"){
					return FlowRouter.getParam("_id");
				}
			}
		}
	},
	solutionId: {
		type: String,
		label: "Solution Id",
		optional: true
	}
}))