class Builder {
	build() {
		this.addEngine();
		this.installChassis();
		this.addElectronic();
		this.collectAccessories();
	}
}
class TeslaBuilder extends Builder {
	addEngine() {
		console.log('Add Electronic Engine');
	}
	installChassis() {
		console.log('Install Tesla chassis');
	}
	addElectronic() {
		console.log('Add special electronic');
	}
	collectAccessories() {
		console.log('collect accessories');
	}
}
class BmwBuilder extends Builder {
	addEngine() {
		console.log('Add Electronic Engine');
	}
	installChassis() {
		console.log('Install BMW chassis');
	}
	addElectronic() {
		console.log('Add special electronic');
	}
	collectAccessories() {
		console.log('collect accessories');
	}
}

var teslaBuilder, bmwBuilder;
teslaBuilder = new TeslaBuilder();
bmwBuilder = new BmwBuilder();
bmwBuilder.build();
teslaBuilder.build();
