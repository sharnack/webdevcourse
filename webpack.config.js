var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"), //cause webpack needs absolute path
		filename: "App.js"
	}
}