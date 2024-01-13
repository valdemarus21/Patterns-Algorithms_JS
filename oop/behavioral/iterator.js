class Iterator {
	constructor(el) {
		this.index = 0;
		this.keys = Object.keys(el);
		this.elements = el;
	}
	next() {
		return this.elements[this.keys[this.index++]];
	}
	hasNext() {
		return this.index < this.keys.length;
	}
}
var laptops = {
	Xiaomi: { model: 'Gaming', color: 'White', price: 12000 },
	Asus: { model: 'Gaming', color: 'Black', price: 1203 },
	Apple: { model: 'Gaming', color: 'Silver', price: 12001 },
};
var collection = new Iterator(laptops);
while (collection.hasNext()) {
	console.log(collection.next());
}
