// JavaScript Document
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
}
function startMove(obj,sName,iTarget,time){
	var start=parseFloat(getStyle(obj,sName));
	var dis=iTarget-start;
	var count=Math.floor(time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		var cur=dis*n/count+start;
		if(sName=='opacity'){
			obj.style[sName]=cur;
			obj.style.filter='alpha(opacity:'+cur*100+')';
		}else{
			obj.style[sName]=cur+'px';
		}
		if(n==count){
				clearInterval(obj.timer);
		}
	},30);
}