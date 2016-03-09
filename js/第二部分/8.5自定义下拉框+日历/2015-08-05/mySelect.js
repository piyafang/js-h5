'use strict';
(function(){
	var bAdd = false;
	window.mySelect = function (sName){
		var obj = document.getElementsByName(sName)[0];
		var oDiv = document.createElement('div');
		oDiv.className='my_select';
		var oH2 = document.createElement('h2');
		oH2.innerHTML=obj.options[obj.selectedIndex].text;
		oDiv.appendChild(oH2);
		var oUl = document.createElement('ul');
		oH2.onclick=function(){
			oUl.style.display='block';
		};
		for(var i=0;i<obj.options.length;i++){
			var oLi = document.createElement('li');
			oLi.innerHTML=obj.options[i].text;
			oUl.appendChild(oLi);
			(function(index){
				oLi.onclick=function(){
					oH2.innerHTML=this.innerHTML;
					oUl.style.display='none';
					obj.selectedIndex=index;
				};
			})(i);
		}
		oDiv.appendChild(oUl);
		obj.parentNode.insertBefore(oDiv,obj);
		obj.style.display='none';
		if(bAdd)return;
		
		bAdd=true;
		var oLink = document.createElement('link');
		oLink.rel='stylesheet';
		oLink.href='mySelect.css';
		var oHead = document.getElementsByTagName('head')[0];
		oHead.appendChild(oLink);
	}
})();












