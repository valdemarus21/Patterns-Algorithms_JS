class Account {
	pay(orderPrice) {
		if (this.canPay(orderPrice)) {
			console.log(`PAID ${orderPrice} USING ${this.name}`);
		} else if (this.incomer) {
			console.log(`CANNOT PAY USING ${this.name}`);
			this.incomer.pay(orderPrice);
		} else {
			console.log('UNFORTUNATELY, NOT ENOUGH MONEY');
		}
	}
	canPay(amount) {
		return this.balance >= amount;
	}
	setNext(account) {
		this.incomer = account;
	}
	show() {
		console.log(this);
	}
}
class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
	}
}
class PayPal extends Account {
	constructor(balance) {
		super();
		this.name = 'PayPal';
		this.balance = balance;
	}
}
class Privat extends Account {
	constructor(balance) {
		super();
		this.name = 'Privat';
		this.balance = balance;
	}
}

var privat, master, paypal;
privat = new Privat(100);
master = new Master(235);
paypal = new PayPal(232);

master.pay(234);
master.show()