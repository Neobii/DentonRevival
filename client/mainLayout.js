Template.mainLayout.events({
	"click [data-action='add-comment']"() {
		Session.set("isAddingComment", true);
	},
	"click [data-action='cancel-comment']"() {
		Session.set("isAddingComment", false);
	}
})