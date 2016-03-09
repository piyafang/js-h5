'use strict';
var bAdd = false;
function mySelect(sName){
	var oS = document.getElementsByName(sName)[0];
	var oDiv = document.createElement('div');
	oDiv.className='my_select';
	
	var oH2 = document.createElement('h2');
	oH2.innerHTML=oS.options[oS.selectedIndex].text;
	oDiv.appendChild(oH2);
	var oUl = document.createElement('ul');
	oH2.onclick=function(){
		oUl.style.display='block';
	};
	for(var i=0;i<oS.options.length;i++){
		var oLi = document.createElement('li');
		oLi.innerHTML=oS.options[i].text;
		oUl.appendChild(oLi);
		(function(index){
			oLi.onclick=function(){
				//把值给h2
				oH2.innerHTML=this.innerHTML;
				//把ul隐藏
				oUl.style.display='none';
				//改变select选中项
				oS.selectedIndex=index;
			};
		})(i);
	}
	oDiv.appendChild(oUl);
	oS.parentNode.insertBefore(oDiv,oS);
	oS.style.display='none';
	if(bAdd)return;
	bAdd=true;
	var oLink = document.createElement('link');
	oLink.rel='stylesheet';
	oLink.href='select.css';
	var oHead = document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);
}










