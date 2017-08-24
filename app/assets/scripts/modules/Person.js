class Person {
	constructor(fullName, passion) {
		this.name = fullName;
		this.passion = passion;
	}

	
	greet() {
		console.log("Hello! I'm " + this.name + "! I love " + this.passion + "!");
	}
}

export default Person;
