UsersVotes = new Mongo.Collection(null);

UsersVotes.attachSchema(new SimpleSchema({
	voteValue: {
		type: Number,
		label: "Vote value"
	},
	voteType: {
		type: String,
		label: "Vote Type"
	},
	userId: {
		type: String,
		label: "Vote",
		autoValue() {
			if(this.isInsert){
				return this.userId;
			}
		}
	},
	targetId: {
		type: String,
		label: "Vote Target"
	}
}))