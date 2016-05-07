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

FlowRouter.route("/problem/:slug", {
	name: "problem",
	action(){
		BlazeLayout.render("mainLayout", {main: "problemView"});
	}
})

FlowRouter.route("/problem/:slug/new-solution", {
	name: "newSolution",
	action(){
		BlazeLayout.render("mainLayout", {main: "newSolutionView"});
	}
})

FlowRouter.route("/problem/:slug/solution/:solutionSlug", {
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

FlowRouter.route("/how-to", {
	name: "howTo",
	action(){
		BlazeLayout.render("mainLayout", {main: "howToView"})
	}
})

FlowRouter.route("/blog", {
	name: "blog",
	action(){
		BlazeLayout.render("mainLayout", {main: "blogView"})
	}
})

FlowRouter.route("/add-blog-entry", {
	name: "addBlogEntry",
	action(){
		BlazeLayout.render("mainLayout", {main: "addBlogEntryView"})
	}
})

FlowRouter.route("/new-target-group", {
	name: "newTargetGroup",
	action(){
		BlazeLayout.render("mainLayout", {main: "newTargetGroupView"});
	}
})

FlowRouter.route("/target-groups", {
	name: "targetGroups",
	action(){
		BlazeLayout.render("mainLayout", {main: "targetGroupsView"})
	}
})

FlowRouter.route("/popular", {
	name: "popular",
	action(){
		BlazeLayout.render("mainLayout", {main: "popularView"});
	}
})