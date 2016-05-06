Template.commentsView.helpers({
	comments() {
		return Comments.find({}, {sort: {date: -1}})
	}
})

AutoForm.hooks({
	newCommentGlobal: {
		onSuccess() {
			Session.set("isAddingComment", false)
		}
	}
})