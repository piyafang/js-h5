'use strict';
(function(){
	var bAdd = false;
	function toDou(iNum){
		return iNum<10?'0'+iNum:''+iNum;
	}
	
	window.myCalendar=function (sName){
		var oTxt = document.getElementsByName(sName)[0];
		var oDiv=document.createElement('div');
		oDiv.innerHTML='<a href="javascript:;" class="prev">&lt;</a><h2>2015-08</h2><a href="javascript:;" class="next">&gt;</a><ol><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li class="weekend">六</li><li class="weekend">日</li></ol><ul></ul>';
		oDiv.className='calendar';
		oTxt.parentNode.insertBefore(oDiv,oTxt);
		var oPrev = oDiv.getElementsByTagName('a')[0];
		var oNext = oDiv.getElementsByTagName('a')[1];
		var oH2 = oDiv.getElementsByTagName('h2')[0];
		var oOl = oDiv.getElementsByTagName('ol')[0];
		var oUl = oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
	
		oTxt.onfocus=function(){
			oDiv.style.top=this.offsetTop+this.offsetHeight+5+'px';
			oDiv.style.left=this.offsetLeft+'px';
			oDiv.style.display='block';
		}
		document.onclick=function(){
			oDiv.style.display='none';
		};
		oDiv.onclick=oTxt.onclick=function(ev){
			var oEvent=ev||event;
			oEvent.cancelBubble=true;			
		};
		
		
	
		var iNow=0;
		function calendar(){
			oUl.innerHTML='';//先将日历清空
	
			//h2的内容
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oH2.innerHTML=oDate.getFullYear()+'-'+toDou((oDate.getMonth()+1));
			//获取第一天是周几
			var oDate=new Date();
			oDate.setDate(1);
			var w=oDate.getDay();//第一天是星期w
			if(w==0)w=7;//如果是周日让0变成7
			w--;
			//增加空li
			for(var i=0;i<w;i++){
				var oLi=document.createElement('li');
				oUl.appendChild(oLi);
			}
			//获取这个月有多少天
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setMonth(oDate.getMonth()+1,0);
			var n=oDate.getDate();//这个月有n天
			for(var i=0;i<n;i++){
				var oLi=document.createElement('li');
				oLi.innerHTML=i+1;
				oUl.appendChild(oLi);			
			}
	
			//判断是否是今天
			function addEv(oLi){
				oLi.onmouseover=function(){
					this.style.background='#f90';
				};
				oLi.onmouseout=function(){
					this.style.background='';
				};
				oLi.onclick=function(){
					var oDate=new Date();
					oDate.setMonth(oDate.getMonth()+iNow,1);
					oTxt.value=oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+toDou(this.innerHTML);
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
		
		var oLink=document.createElement('link');
		oLink.rel='stylesheet';
		oLink.href='myCalendar.css';
		var oHead=document.getElementsByTagName('head')[0];
		oHead.appendChild(oLink);
	}
}) ();
