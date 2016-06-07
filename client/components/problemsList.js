Template.problemsList.onCreated(function(){
	var instance = this;
	instance.autorun(function(){
		instance.subscribe('problems');
	});
});


Template.problemsList.helpers({
	problems() {
		return Problems.find({}, {sort: {score: -1}})
	},
})