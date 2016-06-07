Template.newPerformanceIndicatorView.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		var slug = FlowRouter.getParam('slug');
		instance.subcribe('oneProblem',slug);
	});
});

Template.newPerformanceIndicatorView.helpers({
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")});
	}
})

/*AutoForm.hooks({

})*/