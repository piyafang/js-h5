'use strict';
function myRadio(sName){
	var aSpan = [];
	var aSex = document.getElementsByName(sName);
	for(var i=0;i<aSex.length;i++){
		var oSpan = document.createElement('span');
		aSpan.push(oSpan);
		aSex[0].parentNode.insertBefore(oSpan,aSex[i]);
		(function(index){
			oSpan.onclick=function(){
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].className='';
				}
				this.className='on';
				aSex[index].checked=true;
			};
		})(i);
	}
	for(var i=0;i<aSex.length;i++){
		aSex[i].style.display='none';
	}
	
	var oLink = document.createElement('link');
	oLink.rel='stylesheet';
	oLink.href='myRadio.css';
	var oHead = document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);
	
}







