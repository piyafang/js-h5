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
/*type
linear 		匀速运动
ease-in 	加速运动
ease-out 	减速运动
*/
function startMove(obj,json,type,time,fnEnd){
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
			switch(type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
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
			fnEnd&&fnEnd();
		}
	},30);
}










