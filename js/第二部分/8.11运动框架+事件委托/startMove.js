// JavaScript Document
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
}

function starMove(obj,sName,iTarget,time){
		var timer=null;
		var start=parseInt(getStyle(obj,sName));
		var dis=iTarget-start;
		var count=Math.floor(time/30);
		var n=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			
			obj.style[sName]=dis*n/count+start+'px';
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);		
}