/**
 * Description: 
 *   1. The function can be used as class generator for Data Model
 *   2. Create a new Data Object by `new` the object.
 */

/**
 * @param {object} opt 
 */
function MyDataModel(opt) {
	this.attrA = opt.a;
	this.attrB = opt.b;
}

const iOpt = {a: 'hello', b: 'world'};


function main() {

	const testObj = new MyDataModel(iOpt);
	console.log(testObj)

	console.log(testObj.attrA)
}

main()