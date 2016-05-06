App = {};

App.upvote = function(type, targetId) {
	if(type == "problem"){
		Problems.update({_id: targetId}, {$inc: {score: 1}})	
	}
	if(type == "solution"){
		Solutions.update({_id: targetId}, {$inc: {score: 1}})
	}
	UsersVotes.insert({targetId: targetId, voteType: type, voteValue: 1})
}

App.downvote = function(type, targetId) {
	if(type == "problem"){
		Problems.update({_id: targetId}, {$inc: {score: -1}})	
	}
	if(type == "solution"){
		Solutions.update({_id: targetId}, {$inc: {score: -1}})
	}
	UsersVotes.insert({targetId: targetId, voteType: type, voteValue: -1})
}