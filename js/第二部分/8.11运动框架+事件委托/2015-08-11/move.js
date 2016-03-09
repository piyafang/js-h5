'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
var timer =null;
function startMove(obj,iTarget,time){
	var start = obj.offsetLeft;
	var dis = iTarget-start;
	var count= Math.floor(time/30);
	var n = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		obj.style.left=start+dis*n/count+'px';
		if(n==count){
			clearInterval(timer);
		}
	},30);
}
function startMove2(obj,iTarget,time){
	var start = obj.offsetTop;
	var dis = iTarget-start;
	var count= Math.floor(time/30);
	var n = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		obj.style.top=start+dis*n/count+'px';
		if(n==count){
			clearInterval(timer);
		}
	},30);
}
function startMove3(obj,iTarget,time){
	var start = obj.offsetWidth;
	var dis = iTarget-start;
	var count= Math.floor(time/30);
	var n = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		obj.style.width=start+dis*n/count+'px';
		if(n==count){
			clearInterval(timer);
		}
	},30);
}
function startMove4(obj,iTarget,time){
	var start = obj.offsetHeight;
	var dis = iTarget-start;
	var count= Math.floor(time/30);
	var n = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		obj.style.height=start+dis*n/count+'px';
		if(n==count){
			clearInterval(timer);
		}
	},30);
}
function startMove5(obj,iTarget,time){
	var start = 1;
	var dis = iTarget-start;
	var count= Math.floor(time/30);
	var n = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		obj.style.filter='alpha(opacity:'+(start+dis*n/count)*100+')';
		obj.style.opacity=start+dis*n/count;
		if(n==count){
			clearInterval(timer);
		}
	},30);
}