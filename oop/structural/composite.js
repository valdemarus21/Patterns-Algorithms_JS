class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setPrice(price) {
		this.price = price;
	}

	setName(name) {
		this.name = name;
	}
}

class Processor extends Equipment {
	constructor() {
		super();
		this.setName('Intel-i5-13xxx');
		this.setPrice(1200);
	}
}
class Ram extends Equipment {
	constructor() {
		super();
		this.setName('Samsung DDR 5 32GB');
		this.setPrice(500);
	}
}
class VideoCard extends Equipment {
	constructor() {
		super();
		this.setName('NVIDIA RTX 4060');
		this.setPrice(1150);
	}
}

class Composite extends Equipment {
	constructor() {
		super();
		this.equipments = [];
	}
	add(equipment) {
		this.equipments.push(equipment);
	}
	getPrice() {
		return this.equipments.map((equipment) => equipment.getPrice()).reduce((a, b) => a + b);
	}
}

class Laptop extends Composite {
	constructor() {
		super();
		this.setName('ASUS ROG STRIX G16');
	}
}
var laptop = new Laptop();
laptop.add(new Processor());
laptop.add(new Ram());
laptop.add(new VideoCard());

console.log(laptop);
