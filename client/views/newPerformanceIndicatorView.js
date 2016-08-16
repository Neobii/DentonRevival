Template.newPerformanceIndicatorView.onCreated(function(){

	this.autorun(()=>{
		var slug = FlowRouter.getParam('slug');
		this.subscribe('oneProblem',slug);
	});
});

Template.newPerformanceIndicatorView.helpers({
	problem() {
		return Problems.findOne({slug: FlowRouter.getParam("slug")});
	}
})

/*AutoForm.hooks({

})*/

AutoForm.hooks({
  insertNewMetric: {
    onSuccess: function (doc) {
    	//this might return an id of a problem or the whole problem object I'm not sure
        FlowRouter.go('problem',  {slug: FlowRouter.getParam('slug')});
   
    }
  }
});