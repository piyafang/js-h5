'use strict';
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}

/*
**addWheel 		添加滚轮事件
**obj 			给谁添加滚轮事件
**fn 			触发事件执行什么函数
*/
function addWheel(obj,fn){
	//判断鼠标滚轮方向
	function fnWheel(ev){
		var bDown = true;
		if(ev.wheelDelta){
			if(ev.wheelDelta<0){
				bDown=true;
			}else{
				bDown=false;
			}
		}else{
			if(ev.detail>0){
				bDown=true;
			}else{
				bDown=false;
			}
		}
		
		//var bDown = ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		//如果有这个函数，就执行。没有就不执行。
		fn&&fn(bDown);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		//DOMMouseScroll
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEvent = ev||event;
			fnWheel(oEvent);
		});
	}else{
		//onmousewheel
		addEvent(obj,'mouswheel',function(ev){
			var oEvent = ev||event;
			fnWheel(oEvent);
		});
	}
}











