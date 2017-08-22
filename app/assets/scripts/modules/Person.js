function Person(fullName, passion) {
	this.name = fullName,
	this.passion = passion,
	this.greet = function() {
		console.log("Hi! I'm " + this.name + "! I love " + this.passion + "!");
	}
}