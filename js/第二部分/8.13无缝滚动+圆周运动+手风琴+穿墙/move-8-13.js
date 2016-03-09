'use strict';

function getByStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}

function startMove(obj,json,options){
	options=options||{};
	options.time=options.time||700;
	options.type=options.type||'ease-out';
	
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getByStyle(obj,Name));
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
		dis[name]=json[name]-start[name];		
	}
	
	var count=Math.floor(options.time/30);
	var n=0;
	clearInteval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch (options.type){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;
				break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if(name=='opacity'){
				obj.style[name]=cur;
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