class Laptop {
	constructor() {
		this.discreteVideoRam = false;
		this.extensibleMemory = false;
	}
}

class LaptopBuilder {
	constructor() {
		this.laptop = new Laptop();
	}
	addDiscreteVideoRam(discreteVideoRam) {
		this.laptop.discreteVideoRam = discreteVideoRam;
		return this;
	}
	addExtensibleMemory(memoryType) {
		this.laptop.extensibleMemory = memoryType;
		return this;
	}
	updateHardDrive(hardDriveType) {
		this.laptop.hardDrive = hardDriveType;
		return this;
	}
	build() {
		return this.laptop;
	}
}

var laptop = new LaptopBuilder()
	.addDiscreteVideoRam('RTX 4060')
	.addExtensibleMemory('MAX_MEMORY: 32GB')
	.build();

console.log(laptop);
