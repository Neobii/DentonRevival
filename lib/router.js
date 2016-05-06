FlowRouter.route("/", {
	name: "home",
	action() {
		BlazeLayout.render("mainLayout", {main: "homeView"})
	}
})

FlowRouter.route("/about", {
	name: "about",
	action() {
		BlazeLayout.render("mainLayout", {main: "aboutView"})
	}
})

FlowRouter.route("/problems", {
	name: "problems",
	action() {
		BlazeLayout.render("mainLayout", {main: "problemsView"})
	}
})

FlowRouter.route("/new-problem", {
	name: "newProblem",
	action(){
		BlazeLayout.render("mainLayout", {main: "newProblemView"});
	}
})

FlowRouter.route("/problem/:_id", {
	name: "problem",
	action(){
		BlazeLayout.render("mainLayout", {main: "problemView"});
	}
})

FlowRouter.route("/problem/:_id/new-solution", {
	name: "newSolution",
	action(){
		BlazeLayout.render("mainLayout", {main: "newSolutionView"});
	}
})

FlowRouter.route("/problem/:_id/solution", {
	name: "solution",
	action(){
		BlazeLayout.render("mainLayout", {main: "solutionView"});
	}
})

FlowRouter.route("/contribute", {
	name: "contribute",
	action(){
		BlazeLayout.render("mainLayout", {main: "contributeView"})
	}
})

FlowRouter.route("/comments", {
	name: "comments",
	action(){
		BlazeLayout.render("mainLayout", {main: "commentsView"})
	}
})