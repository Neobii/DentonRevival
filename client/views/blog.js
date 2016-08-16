Template.blogView.onCreated(function(){

	this.autorun(()=> {
		this.subscribe('blogEntries');
	});
});

Template.blogView.helpers({
	blogEntries() {
		return BlogEntries.find({}, {sort: {date: -1}});
	}
});