Template.surveyQuestions.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('metrics');
	});
});
Template.surveyQuestions.helpers({
	metrics() {
		return Metrics.find()
	}
})