function baseStrategy(amount) {
	return amount;
}
function premiumStrategy(amount) {
	return amount * 0.85;
}
function platinumStrategy(amount) {
	return amount * 0.65;
}

class CustomerCart {
	constructor(discount) {
		this.discount = discount;
		this.amount = 0;
	}
	checkout() {
		return this.discount(this.amount);
	}
	setAmount(amount) {
		this.amount = amount
	}
}

var baseCustomer = new CustomerCart(baseStrategy)
var premiumCustomer = new CustomerCart(premiumStrategy)
var platinumCustomer = new CustomerCart(platinumStrategy)

baseCustomer.setAmount(5000)
console.log(baseCustomer.checkout())

premiumCustomer.setAmount(5000)
console.log(premiumCustomer.checkout())