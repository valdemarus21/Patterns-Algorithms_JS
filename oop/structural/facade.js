class ConveyorLaptopFacade {
	constructor(itemOptions) {
		this.laptop = itemOptions.laptop;
	}
	assembleLaptop() {
		this.laptop.setRam();
		this.laptop.setEngine();
		this.laptop.setDisplay();
		this.laptop.setTouchPad();
		return this.laptop;
	}
	changeEngine(engine_type) {
		this.laptop.changeEngine(engine_type);
		this.laptop.setEngine();
	}
	changeRam(ram_type) {
		this.laptop.changeRam(ram_type);
		this.laptop.setRam();
	}
}

class Conveyor {
	constructor() {
		this.engineType = '';
		this.ramType = '';
	}

	setRam() {
		console.log(`RAM SET to ${this.ramType}`);
	}
	setEngine() {
		console.log(`ENGINE SET to ${this.engineType}`);
	}
	setDisplay() {
		console.log('DISPLAY SET');
	}
	setTouchPad() {
		console.log('TOUCHPAD SET!');
	}
	changeEngine(engine_type) {
		this.engineType = engine_type;
	}
	changeRam(ram_type) {
		this.ramType = ram_type;
	}
}

var laptopConveyor = new Conveyor(); // Create a Conveyor instance
var conveyor = new ConveyorLaptopFacade({ laptop: laptopConveyor }); // Pass the Conveyor instance
var laptop = conveyor.assembleLaptop();
conveyor.changeEngine('Intel i5-13xxx');
conveyor.changeRam('DDRL5 32GB');
console.log(laptop);
