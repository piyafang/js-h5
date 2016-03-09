function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	
	function fnWheel(ev){
		var oEvent=ev || event;
		var bDown=true;
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		
		fn(bDown,oEvent);
		
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		obj.addEventListener(obj,'DOMMouseScroll',fnWheel);	
	}else{
		addEvent(obj,'mousewheel',fnWheel);
	}
}