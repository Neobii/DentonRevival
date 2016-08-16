Projects = new Mongo.Collection("projects");

Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Projects"
	},
	description: {
		type: String,
		label: "Description",
		autoform: {
    afFieldInput: {
      type: "textarea",
      rows: 5,
  		}
	  }
	},
	solutionId: {
		type: String,
		label: "Solution"
	}
}))