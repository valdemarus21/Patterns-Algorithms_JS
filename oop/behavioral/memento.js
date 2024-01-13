class Memento {
	constructor(value) {
		this.value = value;
	}
}
var creator = {
	save: (val) => new Memento(val),
	restore: (memento) => memento.value,
};

class Caretaker {
	constructor() {
		this.values = [];
	}
	addMemento(memento) {
		this.values.push(memento);
	}
	getMemento(index) {
		return this.values[index];
	}
}

var careTaker = new Caretaker();

careTaker.addMemento(creator.save('first memento'));
careTaker.addMemento(creator.save('second memento'));
careTaker.addMemento(creator.save('third memento'));
careTaker.addMemento(creator.save('fourth memento'));

console.log(creator.restore(careTaker.getMemento(1)))