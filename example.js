var summary = require('./index.js');

summary.summarize('http://www.golem.de/news/edward-snowden-ein-held-des-digitalen-zeitalters-1312-103498.html', function(title, summary, failure) {
	if (failure) {
		console.log("There was an error.");
	}

    console.log(' - ' + title + ' - ');
	console.log(summary);
});