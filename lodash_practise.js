var ld = require('lodash');
var uti = {};
exports.uti = uti;






uti.camelCase=function(givenSentence){
	return ld.camelCase(givenSentence);
};

uti.kebabCase=function(givenSentence){
	return ld.kebabCase(givenSentence);
};