function laptopProducer(kind) {
	return kind === 'gaming' ? gamingLaptopFactory : officeLaptopFactory;
}

function gamingLaptopFactory() {
	return new RogStrix();
}
function officeLaptopFactory() {
	return new VivoBook();
}

class RogStrix {
	info() {
		return 'this is a gaming laptop asus rog strix';
	}
}
class VivoBook {
	info() {
		return 'this is a office laptop asus vivobook';
	}
}

var produce = laptopProducer('gaming');
var laptop1 = new produce();
console.log(laptop1.info());
