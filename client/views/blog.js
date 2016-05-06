Template.blogView.helpers({
	blogEntries() {
		return BlogEntries.find({}, {sort: {date: -1}});
	}
})