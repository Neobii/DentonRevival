Template.problemsList.onCreated(function(){

	this.autorun(()=>{
		this.subscribe('problems');
	});
});


Template.problemsList.helpers({
	problems() {
		return Problems.find({}, {sort: {score: -1}})
	},
})