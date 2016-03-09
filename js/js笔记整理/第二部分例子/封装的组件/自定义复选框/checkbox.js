// JavaScript Document
(function(){
	var bAdd=false;	
	window.myCheckbox=function (chooseBtnId){
			var oChooseAll=document.getElementById(chooseBtnId);
			var aInp=document.getElementsByName('code');
			var oUl=document.createElement('ul');
			var oHall=document.createElement('h2');
			oChooseAll.parentNode.insertBefore(oHall,oChooseAll);
			oChooseAll.style.display='none';
			var aA=[];
			for(var i=0;i<aInp.length;i++){
				var oLi=document.createElement('li');
				var oA=document.createElement('a');
				oLi.appendChild(oA);
				aA.push(oA);
				aInp[i].parentNode.insertBefore(oLi,aInp[i]);
				(function(index){
					oA.onclick=function(){
						if(this.className==''){
							this.className='on';
						}else{
							this.className='';
						}
						if(!aInp[index].checked){
							aInp[index].checked=true;
						}else{
							aInp[index].checked=false;
						}
					};			
				}) (i);
				
			}
			
			for(var i=0;i<aInp.length;i++){
				aInp[i].style.display='none';
			}
			oHall.onclick=function(){
				if(this.className==''){
					this.className='on';				
					oChooseAll.checked=true;
					for(var i=0;i<aInp.length;i++){				
							aA[i].className='on';
							aInp[i].checked=true;					
					}
				}else{
					this.className='';
					oChooseAll.checked=false;
					for(var i=0;i<aInp.length;i++){	
						aA[i].className='';
						aInp[i].checked=false;
					}
				}
			};
			
			if(bAdd) return;
			bAdd=true;
			
			var oLink=document.createElement('link');
			oLink.rel='stylesheet';
			oLink.href='checkbox.css';
			var oHead=document.getElementsByTagName('head')[0];
			oHead.appendChild(oLink);
	}
}) ();