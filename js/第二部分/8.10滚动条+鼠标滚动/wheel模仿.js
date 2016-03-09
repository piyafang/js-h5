'use strict';
//addEvent函数
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}

//addWheel大函数
function addWheel(obj,fn){

	//判断滚轮方向
	function fnWheel(ev){
		var bDown=true;
		// if(ev.wheelDelta){
		// 	if(ev.wheelDelta<0){
		// 		bDown=true;
		// 	}else{
		// 		bDown=false;
		// 	}
		// }else{
		// 	if(ev.detail>0){
		// 		bDown=true;
		// 	}else{
		// 		bDown=false;
		// 	}

		// }
		bDown=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		//调用这个fn函数，把方向传过去
		fn&&fn(bDown);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}


	//判断不同浏览器的滚轮
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEv=ev||event;
		});
	}else{
		obj.onmouseWheel=function(ev){
			var oEv=ev||event;
		};
	}

	
}
