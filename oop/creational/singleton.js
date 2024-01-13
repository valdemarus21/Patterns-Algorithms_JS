/*
An object that exists in a single instance 
*/
// WITH GLOBAL VARIABLE
var instance;

class Counter {
	constructor() {
		if (!instance) instance = this;
		instance.count = 0;
		return instance;
	}
	getCount() {
		return instance.count;
	}
	increaseCount() {
		return instance.count++;
	}
}

var testCount1 = new Counter();
var testCount2 = new Counter();

testCount1.increaseCount();
testCount1.increaseCount();
testCount1.increaseCount();
console.log('testCount2 is', testCount2);

// LINK ON STATIC OPTION IN CLASS CONSTRUCTOR

class superCounter {
	constructor() {
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}
	getCounter() {
		return this.count;
	}
	increaseCount() {
		return this.count++;
	}
}
var superTestCount1 = new superCounter();
var superTestCount2 = new superCounter();
var superTestCount3 = new superCounter();

superTestCount1.increaseCount();
superTestCount1.increaseCount();
superTestCount2.increaseCount();
superTestCount3.increaseCount();
superTestCount1.increaseCount();

console.log(superTestCount1);
