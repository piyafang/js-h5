'use strict';
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}
//startMove
//json{width:500,height:500}
/*
for(var name in json){
	name  sName 	width/height/opacity
	json[name]	iTarget 
}
*/
function startMove(obj,json,time){
	//把start和dis都变成json
	var start = {};
	var dis = {};
	
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		//总距离
		dis[name] = json[name]-start[name];
	}
	//总时间
	var count = Math.floor(time/30);
	//走了多少次
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			var cur = start[name]+dis[name]*n/count;
			//2.opacity没有px并且要设置filter
			if(name=='opacity'){
				obj.style[name]=cur
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
		}
	},30);
}










