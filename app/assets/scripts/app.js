function Person(fullName, passion) {
	this.name = fullName,
	this.passion = passion,
	this.greet = function() {
		console.log("Hi! I'm " + this.name + "! I love " + this.passion + "!");
	}
}

var steffen = new Person("Steffen", "art");
steffen.greet();

var dimi = new Person("Dimi", "writing");
dimi.greet();