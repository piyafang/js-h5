// JavaScript Document
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
}
function startMove(obj,json,type,time,fnEnd){
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			switch(type){
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
				fnEnd&&fnEnd();
		}
	},30);
}