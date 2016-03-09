// JavaScript Document
window.onload=function(){
		var oUl=document.getElementById('ul_container');
		var aLi=oUl.children;
		var x=0;
		var y=0;
		document.onmousedown=function(ev){
			var oEv=ev||event;
			var disX=oEv.clientX-x;	
			var disY=oEv.clientY-y;
			document.onmousemove=function(ev){
				var oEv=ev||event;
				var l=oEv.clientX-disX;
				var t=oEv.clientY-disY;
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.marginLeft=0.1*parseInt(aLi[i].style.zIndex)*l+'px';
					aLi[i].style.marginTop=0.1*parseInt(aLi[i].style.zIndex)*t+'px';
				}

			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				document.releaseCapture&&document.releaseCapture();
			};
			document.setCapture&&document.setCapture();
			return false;
	};		
};
