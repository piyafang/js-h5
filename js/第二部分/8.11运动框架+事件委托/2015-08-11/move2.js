'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
function startMove(obj,sName,iTarget,time){
	var start = parseInt(getStyle(obj,sName));
	var dis = iTarget-start;
	var count = Math.floor(time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		obj.style[sName]=start+dis*n/count+'px';
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
	
}







