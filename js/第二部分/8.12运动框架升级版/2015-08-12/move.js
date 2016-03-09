'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//startMove
function startMove(obj,sName,iTarget,time){
	//开始位置
	//1.opacity是0-1的小数
	var start = parseInt(getStyle(obj,sName));
	//总距离
	var dis = iTarget-start;
	//总时间
	var count = Math.floor(time/30);
	//走了多少次
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		//2.opacity没有px并且要设置filter
		obj.style[sName]=start+dis*n/count+'px';
		
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
}










