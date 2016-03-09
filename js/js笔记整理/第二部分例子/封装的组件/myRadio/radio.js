'use strict';
(function(){
	var bAdd = false;
	window.myRadio = function (sName){
		var aSex = document.getElementsByName(sName);
		var aSpan = [];
		for(var i=0;i<aSex.length;i++){
			var oSpan = document.createElement('span');
			aSpan.push(oSpan);
			aSex[i].parentNode.insertBefore(oSpan,aSex[i]);
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
		
		if(bAdd)return;
		
		bAdd=true;
		
		var oLink = document.createElement('link');
		oLink.rel='stylesheet';
		oLink.href='radio.css';
		var oHead = document.getElementsByTagName('head')[0];
		oHead.appendChild(oLink);
		
	};
})();






