Template.calculateMetrics.onCreated(function(){
	var instance = this;

	instance.autorun(function(){
		instance.subscribe('metrics');
	});
});


Template.calculateMetrics.helpers({
	metrics() {
		return Metrics.find({})
	}
})