var $ = require('jquery');
//var Person = require('./modules/Person');
//new Syntax for same result:
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes 0$ in taxes.");
	}
}

alert("ABC 321");

var steffen = new Person("Steffen", " everything art");
steffen.greet();

var dimi = new Adult("Dimi", "writing");
dimi.greet();
dimi.payTaxes();


