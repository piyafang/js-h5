'use strict';
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	function fnWheel(ev){
		var bDown = true;
		bDown = ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		fn&&fn(bDown,ev);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEvent= ev||event;
			fnWheel(oEvent);
		});
	}else{
		addEvent(obj,'mousewheel',function(ev){
			var oEvent = ev||event;
			fnWheel(oEvent);
		});
	}
}

