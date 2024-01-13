/* Minimum factory has :
 * A constructor class that generates an object
 * A class that calls this creation with the given parameters
 */

class ProductItem {
	constructor({ ...itemProperties }) {
		var { itemType, itemPrice, itemUrl, itemValue } = itemProperties;
		this.itemPrice = itemPrice;
		this.itemUrl = itemUrl;
		this.itemValue = itemValue;
		this.itemType = itemType;
	}
}

class ProductItemFactory {
	create(type) {
		if (type === 'laptop') {
			return new ProductItem({
				itemType: 'laptop',
				itemUrl: 'https://test.addr.com',
				itemValue: null,
			});
		}
		if (type === 'pc') {
			return new ProductItem({
				itemType: 'pc',
				itemUr: 'https://test.addr.com',
				itemValue: null,
			});
		}
	}
}

var productFactory = new ProductItemFactory();

var asusRogStrix = productFactory.create('laptop');
var pcInstance = productFactory.create('pc');
console.log(asusRogStrix);
console.log(pcInstance);
