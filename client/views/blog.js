Template.blogView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('blogEntries');
	});
});

Template.blogView.helpers({
	blogEntries() {
		return BlogEntries.find({}, {sort: {date: -1}});
	}
});