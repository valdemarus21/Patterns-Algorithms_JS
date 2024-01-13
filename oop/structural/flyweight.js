class Laptop {
	constructor(model) {
		this.model = model;
	}
}

class LaptopFactory {
	constructor(name) {
		this.models = {};
	}
	create(name) {
		var model = this.models[name];
		if (model) return model;
		console.count('model');
		this.models[name] = new Laptop(name);
		return this.models[name];
	}
	getModels() {
		console.table(this.models);
	}
}
var factory = new LaptopFactory();

var asus = factory.create('asus');
var acer = factory.create('acer');
var apple1 = factory.create('apple');
var apple2 = factory.create('apple');
var apple3 = factory.create('apple');

console.log(factory.getModels())