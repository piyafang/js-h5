// JavaScript Document
(function(){
	var bRadio=false;
	window.makeRadio=function(sName){
		var aSex=document.getElementsByName(sName);
		var aSpan=[];
		for(var i=0;i<aSex.length;i++){
			var oSpan=document.createElement('span');
			aSpan.push(oSpan);
			aSex[0].parentNode.insertBefore(oSpan,aSex[i]);
			(function(index){
				aSpan[i].onclick=function(){
					for(var i=0;i<aSex.length;i++){
						aSpan[i].className='';
					}
					this.className='on';
					aSex[index].checked=true;		
				};			
			}) (i);			
		}
		
		
		for(var i=0;i<aSex.length;i++){
			aSex[i].style.display='none';			
		}
		
		if(bRadio) return;		
		bRadio=true;		
		
		var oLink=document.createElement('link');
		oLink.rel='stylesheet';
		oLink.href='radio.css';
		var oHead=document.getElementsByTagName('head')[0];
		oHead.appendChild(oLink);
		
	};
}) ();