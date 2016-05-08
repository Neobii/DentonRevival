Metrics = new Mongo.Collection("metrics");

Metrics.attachSchema({
	metricType: {
		type: String,
		label: "Metric type"
	},
	title: {
		type: String,
		label: "Metric Title"
	},
	targetId: {
		type: String,
		label: "Metric Target"
	},
	question: {
		type: String,
		label: "Yes or no question."
	}
})