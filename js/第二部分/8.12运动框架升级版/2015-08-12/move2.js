'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//startMove
function startMove(obj,sName,iTarget,time){
	//开始位置
	//1.opacity是0-1的小数
	var start = parseFloat(getStyle(obj,sName));
	//总距离
	var dis = iTarget-start;
	//总时间
	var count = Math.floor(time/30);
	//走了多少次
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		var cur = start+dis*n/count;
		//2.opacity没有px并且要设置filter
		if(sName=='opacity'){
			obj.style[sName]=cur
			obj.style.filter='alpha(opacity:'+cur*100+')';
		}else{
			obj.style[sName]=cur+'px';
		}
		
		
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
}










