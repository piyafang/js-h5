function hoverDir(obj,oEvent){
	var w = obj.offsetWidth/2+obj.offsetLeft;
	var h = obj.offsetHeight/2+obj.offsetTop;
	var x = w-oEvent.clientX;
	var y = h-oEvent.clientY;
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(oBox){
	var oSpan = oBox.children[0];
	oBox.onmouseover=function(ev){
		var oEvent = ev||event;
		var oFrom = oEvent.fromElement||oEvent.relatedTarget;
		if(oBox.contains(oFrom))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				oSpan.style.left='200px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top='200px';
				break;
			case 2:
				oSpan.style.left='-200px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left=0;
				oSpan.style.top='-200px';
				break;
		}
		startMove(oSpan,{left:0,top:0});
	};
	oBox.onmouseout=function(ev){
		var oEvent = ev||event;
		var oTo = oEvent.toElement||oEvent.relatedTarget;
		if(oBox.contains(oTo))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				startMove(oSpan,{top:0,left:200});
				break;
			case 1:
				startMove(oSpan,{top:200,left:0});
				break;
			case 2:
				startMove(oSpan,{top:0,left:-200});
				break;
			case 3:
				startMove(oSpan,{top:-200,left:0});
				break;
		}
	};
}