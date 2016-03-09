// JavaScript Document
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
}
var options={};
 	options.type=options.type||'ease-out';
	options.time=options.time||700;
function startMove(obj,json,options){
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var a=n/count;
					var cur=dis[name]*a+start[name];
				break;
				case 'ease-in':
					var a=n/count;
					var cur=dis[name]*Math.pow(a,3)+start[name];
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=dis[name]*(1-Math.pow(a,3))+start[name];
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
				options.fnEnd&&options.fnEnd();
		}
	},30);
}