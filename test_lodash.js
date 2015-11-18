var assert = require('assert');
var lib = require('./lodash_practise.js').uti;
console.log(lib);

describe("Camel case ",function(){
	it('of an array of words',function(){
		assert.equal(("thisIsAnExample"),lib.camelCase(["this ","is","an","example"]));
		
	});
});
describe("kebab case ",function(){
	it('of an array of words',function(){
		assert.equal(("this-is-an-example"),lib.kebabCase("This isAn example"));
		
	});
});