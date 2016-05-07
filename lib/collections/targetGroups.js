TargetGroups = new Mongo.Collection("targetGroups");

TargetGroups.friendlySlugs();

TargetGroups.attachSchema({
	name: {
		type: String,
		label: "Target Group"
	},
	description: {
		type: String,
		label: "Description",
		optional: true
	},
	slug: {
		type: String,
		label: "Slug"
	}
});