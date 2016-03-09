'use strict';
$.fn.rndColor=function(){
	this.find('li').each(function(index,element){
		this.style.background='rgba('+parseInt(Math.random()*256)+','+parseInt(Math.random()*256)+','+parseInt(Math.random()*256)+','+Math.random()+')';
	});
};