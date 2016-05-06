Meteor.methods({
	updateSlugs() {
		Problems.find({}).forEach(function(problem){
			Problems.update({_id: problem._id}, {$set: {fake: "asdsfe"}})
		})
		Solutions.find({}).forEach(function(solution){
			Solutions.update({_id: solution._id}, {$set: {fake: "asdsfe"}})
		})
	}
})