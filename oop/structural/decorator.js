class Phone {
	constructor() {
		this.model = 'Q1';
		this.price = 1200;
	}
	getPrice() {
		return this.price;
	}
	getDescription() {
		return this.model;
	}
}

class AIAssistant {
	constructor(phone) {
		this.phone = phone;
	}
	getPrice() {
		return this.phone.getPrice() + 1200;
	}
	getDescription() {
		return `${this.phone.getDescription()} with ai assistant`;
	}
}
class Guaranty {
	constructor(phone) {
		this.phone = phone;
	}
	getPrice() {
		return this.phone.getPrice() + 141.1;
	}
	getDescription() {
		return `${this.phone.getDescription()} with guaranty`;
	}
}

class Q1_Phone extends Phone {
	constructor() {
		super();
		this.price = 20000;
		this.model = 'Q1_0.1';
	}
}

var q1test = new Q1_Phone();
q1test = new Guaranty(q1test);
q1test = new AIAssistant(q1test);

console.log(q1test.getPrice(), q1test.getDescription());
