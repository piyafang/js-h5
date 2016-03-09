'use strict';
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
/*
**addWheel 		给元素加滚轮事件
**obj			给谁加事件
**fn			执行什么函数
*/
function addWheel(obj,fn){
	//判断是滚轮的方向
	function fnWheel(ev){
		var bDown=true;//是否往下滚
		//判断用哪个属性
		bDown=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		
		//调用fn这个函数,把方向给传过去 
		fn&&fn(bDown);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}
	//判断是否是火狐浏览器。
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEvent = ev||event;
			//判断是往上还是往下滚
			fnWheel(oEvent);
		});
	}else{
		obj.onmousewheel=function(ev){
			var oEvent = ev||event;
			//判断是往上还是往下滚
			fnWheel(oEvent);
		}
	}
}