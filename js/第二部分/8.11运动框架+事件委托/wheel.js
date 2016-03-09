// JavaScript Document
function (obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);		
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}

function addWheel(obj,fn){
	//判断滚轮方向
	function fnWheel(ev){
		var bDown=true;
		bDown=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		fn&&fn(bDown);
		ev.preventDefalut&&ev.preventDefalut();
		return false;
		
	}
	//判断各浏览器下的滚轮事件
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEv=ev||event;
			fnWheel(oEv);
		});
	}else{
		obj.onscrollwheel=function(ev){
			var oEv=ev||event;
			fnWheel(oEv);
		};
	}
}