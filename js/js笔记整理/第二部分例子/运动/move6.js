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
/*
options{}
	type 	运动类型
	time 	运动时间
	end 	链式
*/
function startMove(obj,json,options){
	options = options||{};
	options.time=options.time||700;
	options.type=options.type||'ease-out';
	//把start和dis都变成json
	var start = {};
	var dis = {};
	
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		//没有默认值
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
				break;
				case 'top':
					start[name]=obj.offsetTop;
				break;
				case 'width':
					start[name]=obj.offsetWidth;
				break;
				case 'height':
					start[name]=obj.offsetHeight;
				break;
				case 'opacity':
					start[name]=1;
				break;
				case 'borderWidth':
					start[name]=0;
				break;
			}
		}
		//总距离
		dis[name] = json[name]-start[name];
	}
	//总时间
	var count = Math.floor(options.time/30);
	//走了多少次
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
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
			options.end&&options.end();
		}
	},30);
}










