class AsusRogZephyrus {
	constructor({ model, price, chipset }) {
		this.model = model;
		this.price = price;
		this.chipset = chipset;
	}

	produce() {
		return new AsusRogZephyrus({ model: this.model, price: this.price, chipset: this.chipset });
	}
}

var prototypeLaptop = new AsusRogZephyrus({
	model: 'default',
	price: 1200,
	chipset: 'intel-i5-13xxx',
});

var laptop1 = prototypeLaptop.produce();
console.log(laptop1);
var laptop2 = prototypeLaptop.produce();
laptop2.chipset = 'intel-i7-14xxx';
