class Model {
	constructor(color) {
		this.color = color;
	}
}
class Color {
	constructor(type) {
		this.type = type;
	}
	get() {
		return this.type;
	}
}
class BlackColor extends Color {
	constructor() {
		super('DARK-BlACK');
	}
}
class SilverColor extends Color {
	constructor() {
		super('SILVER-METALIC');
	}
}

class Audi extends Model {
	constructor(color) {
		super(color);
	}
	paint() {
		return `Auto : Audi, Color: ${this.color.get()}`;
	}
}
class BMW extends Model {
	constructor(color) {
		super(color);
	}
	paint() {
		return `Auto : BMW, Color : ${this.color.get()}`;
	}
}

var blackBMW = new BMW(new BlackColor())
console.log(blackBMW.paint())