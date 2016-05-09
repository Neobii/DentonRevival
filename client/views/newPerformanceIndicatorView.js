Template.newPerformanceIndicatorView.helpers({
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")});
	}
})