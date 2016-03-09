'use strict';
/*
**addEvent 		事件绑定
*/
function addEvent(obj,sEv,fn){
	//判断兼容
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}

/*
**removeEvent 	解除事件绑定
*/
function removeEvent(obj,sEv,fn){
	//判断兼容
	if(obj.removeEventListener){
		obj.removeEventListener(sEv,fn,false);
	}else{
		obj.detachEvent('on'+sEv,fn);
	}
}









