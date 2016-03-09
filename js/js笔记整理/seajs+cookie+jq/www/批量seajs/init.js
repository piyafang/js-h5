seajs.config({
	alias:{
		'w':'sum.js'
	}
});
seajs.use('w',function(mod){
	mod.sum();
});