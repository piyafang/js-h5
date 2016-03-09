'use strict';
define(function(require,exports,module){
	var T = require('Tween');
	var G = require('getStyle');
	exports.move=function (obj,json,options){
		options = options||{};
		options.time=options.time||700;
		options.type=options.type||T.Tween.Bounce.easeOut;
		var start = {};
		var dis = {};
		for(var name in json){
			start[name] = parseFloat(G.getStyle(obj,name));
			if(isNaN(start[name])){
				switch(name){
					case 'top':
						start[name]=obj.offsetTop;
						break;
					case 'left':
						start[name]=obj.offsetLeft;
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
		var count = Math.floor(options.time/30);
		var n =0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			for(var name in json){
				
				var cur = options.type(n*options.time/count,start[name],dis[name],options.time);
				if(name=='opacity'){
					obj.style.opacity=cur;
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
	};
});







