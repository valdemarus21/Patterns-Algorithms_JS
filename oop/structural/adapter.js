class IntelI5 {
	simpleInterface() {
		console.log('IntelI5');
	}
}

class IntelI7 {
	complecatedInterface() {
		console.log('IntelI7');
	}
}

class Intel7Adapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		this.engine.complecatedInterface();
	}
}

class Laptop {
	startEngine(engine) {
		engine.simpleInterface();
	}
}

var laptop0 = new Laptop();
var intelI5 = new IntelI5();

laptop0.startEngine(intelI5); // Использует IntelI5 напрямую

var laptop1 = new Laptop();
var engineAdapter = new Intel7Adapter(new IntelI7());
laptop1.startEngine(engineAdapter);
