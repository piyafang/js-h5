define(function(require,exports,module){
	var A = require('a');
	var B = require('b');
	exports.sum=function(){
		alert(A.a+B.a);
	};
});