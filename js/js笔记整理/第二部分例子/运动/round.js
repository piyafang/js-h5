window.onload=function(){
	var oBox = document.getElementById('box');
	var oSpan = oBox.children[0];
	var R = oBox.offsetWidth/2;
	var N = 10;//代表了数量
	for(var i=0;i<N;i++){
		var oSpan = document.createElement('span');
		oBox.appendChild(oSpan);
	}
	var aSpan = oBox.children;
	var bOk = true;
	document.onclick=function(){
		if(bOk){
			for(var i=0;i<aSpan.length;i++){
				startMove(aSpan[i],i*360/N);
			}
		}else{
			for(var i=0;i<aSpan.length;i++){
				startMove(aSpan[i],0);
			}
		}
		bOk=!bOk;
	};
	function startMove(obj,iTarget){
		var start = obj.a||0;
		var dis = iTarget-start;
		var count = Math.floor(700/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var a = 1-n/count;
			var cur = start+dis*(1-Math.pow(a,3));
			
			obj.style.left=R+Math.sin(cur*Math.PI/180)*R+'px';
			obj.style.top=R-Math.cos(cur*Math.PI/180)*R+'px';
			obj.a = cur;
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
	}
};