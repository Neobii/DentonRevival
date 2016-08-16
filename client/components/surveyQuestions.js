Template.surveyQuestions.onCreated(function(){
	this.autorun(()=>{
		this.subscribe('metrics');
	});
});
Template.surveyQuestions.helpers({
	metrics() {
		return Metrics.find()
	}
})