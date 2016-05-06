BlogEntries = new Mongo.Collection("blogEntries");

BlogEntries.attachSchema({
	title: {
		type: String,
		label: "title"
	},
	body: {
		type: String,
		label: "body",
		autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
        settings: // summernote options goes here
      }
    }
	},
	date: {
		type: Date,
		label: "Date",
		autoValue() {
			if(this.isInsert){
				return new Date();
			}
		}
	}
})