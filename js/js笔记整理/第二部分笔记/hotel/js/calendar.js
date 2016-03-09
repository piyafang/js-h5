'use strict';
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function findInArr(arr,item){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==item){
			return true;
		}
	}
	return false;
}
function toDou(iNum){
		return iNum<10?'0'+iNum:''+iNum;
}
function getByClass(obj,sClass){
	var aResult = [];
	if(obj.getElementsByClassName){
		aResult = obj.getElementsByClassName(sClass);
	}else{
		var aEle = obj.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			var aClass = aEle[i].className.split(' ');
			if(findInArr(aClass,sClass)){
				aResult.push(aEle[i]);
			}
		}
	}
	return aResult;
}

(function(){
	var bAdd=false;
	window.myCalendar =function (sName){
		var aCalendar = getByClass(document.body,'myCalendar');
		var oTxt = document.getElementsByName(sName)[0];
		var oDiv = document.createElement('div');
		oDiv.className='myCalendar';
		oDiv.innerHTML='<a href="javascript:;" class="prev">&lt;</a><h2>2015-08</h2><a href="javascript:;" class="next">&gt;</a><ol><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="weekend">六</li><li class="weekend">日</li></ol><ul></ul>';
		oTxt.parentNode.insertBefore(oDiv,oTxt);
		var oH2 = oDiv.getElementsByTagName('h2')[0];
		var oPrev = oDiv.getElementsByTagName('a')[0];
		var oNext = oDiv.getElementsByTagName('a')[1];
		var oUl = oDiv.getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		oTxt.onfocus=function(){
			for(var i=0;i<aCalendar.length;i++){
				aCalendar[i].style.display='none';
			}
			oDiv.style.left=this.offsetLeft+'px';
			oDiv.style.top=this.offsetTop+this.offsetHeight+5+'px';
			oDiv.style.display='block';
		};
		oDiv.onclick=oTxt.onclick=function(ev){
			var oEvent = ev||event;
			oEvent.cancelBubble=true;
		};
		addEvent(document,'click',function(){
			oDiv.style.display='none';
		});
		var iNow =0 ;
		function calendar(){
			oUl.innerHTML='';	
			var oDate = new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oH2.innerHTML=oDate.getFullYear()+'-'+toDou((oDate.getMonth()+1));
			
			//获取这个月第一天是周几
			var oDate = new Date(); //?
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setDate(1);
			var w = oDate.getDay();
			if(w==0)w=7;
			w--;
			for(var i=0;i<w;i++){
				var oLi = document.createElement('li');
				oUl.appendChild(oLi);
			}
			
			
			//获取这个月有多少天
			var oDate = new Date();	//?
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setMonth(oDate.getMonth()+1,0);
			var n = oDate.getDate();//n这个月有多少天
			for(var i=0;i<n;i++){
				var oLi = document.createElement('li');
				oLi.innerHTML=i+1;
				oUl.appendChild(oLi);
			}
			function addEv(obj){
				obj.onmouseover=function(){
					this.style.background='#f90';
				};
				obj.onmouseout=function(){
					this.style.background='';
				};
				obj.onclick=function(){
					var oDate = new Date();//?
					oDate.setMonth(oDate.getMonth()+iNow,1);
					oTxt.value=oDate.getFullYear()+'-'+toDou((oDate.getMonth()+1))+'-'+this.innerHTML;
					oDiv.style.display='none';
				};
			}
			
			var oDate = new Date();
			var today = oDate.getDate();
			for(var i=0;i<aLi.length;i++){
				if(iNow<0){
					aLi[i].className='past';
				}else if(iNow==0){
					if(aLi[i].innerHTML<today){
						aLi[i].className='past';
					}else if(aLi[i].innerHTML==today){
						aLi[i].className='today';
						addEv(aLi[i]);
					}else{
						addEv(aLi[i]);
					}
				}else{
					addEv(aLi[i]);
				}
			}
	
		}
		calendar();
		oPrev.onclick=function(){
			iNow--;
			calendar();
		};
		oNext.onclick=function(){
			iNow++;
			calendar();
		};
		if(bAdd)return;
		bAdd=true;
	}
})();
window.onload=function(){
	myCalendar('startDate');
	myCalendar('endDate');
	var oDes=document.getElementsByName('destination')[0];
	var oChooseCity=getByClass(document.body,'chooseCity')[0];
	var bChoose=true;
	oDes.onclick=function(ev){
		var oEvent=ev||event;
		if(bChoose){
			oChooseCity.style.display='block';
		}else{
			oChooseCity.style.display='none';	
		}
		bChoose=!bChoose;
		oEvent.cancelBubble=true;
	};
	document.onclick=function(){
		oChooseCity.style.display='none';			
	};


};
