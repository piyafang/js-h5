// JavaScript Document
window.onload=function(){
		var oUl=document.getElementById('ul_container');
		var aLi=oUl.children;
		var aPos=[];	
		oUl.onmousedown=function(ev){
			var oEv=ev||event;
			var disX=oEv.clientX-oUl.offsetLeft;	
			var disY=oEv.clientY-oUl.offsetTop;
			for(var i=0;i<aLi.length;i++){
				aPos[i]={x: aLi[i].offsetLeft, y: aLi[i].offsetTop};
			}
			document.onmousemove=function(ev){
				var oEv=ev||event;
				var l=oEv.clientX-disX;
				var t=oEv.clientY-disY;
				for(var i=0;i<aLi.length;i++){
				aLi[i].style.left=aPos[i].x+0.1*parseInt(aLi[i].style.zIndex)*l+'px';
				aLi[i].style.top=aPos[i].y+0.1*parseInt(aLi[i].style.zIndex)*t+'px';
				}

			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				oUl.releaseCapture&&oUl.releaseCapture();
			};
			oUl.setCapture&&oUl.setCapture();
			return false;
	};		
};
