class OrderStatus {
	constructor(name, nextStatus) {
		this.name = name;
		this.nextStatus = nextStatus;
	}
	next() {
		return new this.nextStatus();
	}
}
class WaitingForPayment extends OrderStatus {
	constructor() {
		super('waitingForPayment', Shipping);
	}
}
class Shipping extends OrderStatus {
	constructor() {
		super('shipping', Delivered);
	}
}
class Delivered extends OrderStatus {
	constructor() {
		super('delivered', Delivered);
	}
}
class Order {
	constructor() {
		this.state = new WaitingForPayment();
	}
	nextState() {
		this.state = this.state.next();
	}
}
var testOrder = new Order();
console.log(testOrder.state.name);
testOrder.nextState()
console.log(testOrder.state.name);
testOrder.nextState()
console.log(testOrder.state.name);
