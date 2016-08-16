Template.calculateMetrics.onCreated(function(){

	this.autorun(()=>{
		this.subscribe('metrics');
	});
});


Template.calculateMetrics.helpers({
	metrics() {
		return Metrics.find({})
	}
})