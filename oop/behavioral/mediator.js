class OfficialLaptopDealer {
	constructor() {
		this.customers = [];
	}
	orderLaptop(customer, laptop, info) {
		var name = customer.getName();
		this.addToCustomerList(name);
		console.group('ORDER NAME');
		console.log(`ORDER NAME : ${laptop}`);
		console.log(`ADDITIONAL INFO : ${JSON.stringify(info)}`);
		console.log(`CUSTOMER NAME : ${name}`);
		console.groupEnd('ORDER NAME');
	}
	addToCustomerList(name) {
		this.customers.push(name);
	}
	getCustomerList() {
		return this.customers;
	}
}

class Customer {
	constructor(name, dealerMediator) {
		this.name = name;
		this.dealerMediator = dealerMediator;
	}
	getName() {
		return this.name;
	}
	makeOrder(laptop, info) {
		this.dealerMediator.orderLaptop(this, laptop, info);
	}
}

var mediator = new OfficialLaptopDealer();
var ivan = new Customer('Ivan', mediator);
var peter = new Customer('Peter', mediator);

ivan.makeOrder('Asus Rog Strix', 'IntelI7-13xxx');
peter.makeOrder('Acer Nitro', 'AMD Radeon 7600HS');
mediator.getCustomerList();
