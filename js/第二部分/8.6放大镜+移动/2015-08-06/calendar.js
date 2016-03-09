'use strict';
(function(){
	var bAdd = false;
	window.myCalendar = function (sName){
		var oTxt = document.getElementsByName(sName)[0];
		var oDiv = document.createElement('div');
		oDiv.className='myCalendar';
		oDiv.innerHTML='<a href="javascript:;" class="prev">←</a>'+
			'<h2>2015-08</h2>'+
			'<a href="javascript:;" class="next">→</a>'+
			'<ol>'+
				'<li>一</li>'+
				'<li>二</li>'+
				'<li>三</li>'+
				'<li>四</li>'+
				'<li>五</li>'+
				'<li class="week_end">六</li>'+
				'<li class="week_end">日</li>'+
			'</ol>'+
			'<ul></ul>';
		oTxt.parentNode.insertBefore(oDiv,oTxt);
		var oPrev = oDiv.getElementsByTagName('a')[0];
		var oNext = oDiv.getElementsByTagName('a')[1];
		var oH2 = oDiv.getElementsByTagName('h2')[0];
		var oUl = oDiv.getElementsByTagName('ul')[0];
		var aLi = oUl.children;
		var iNow = 0;
		
		oTxt.onfocus=function(){
			oDiv.style.left=this.offsetLeft+'px';
			oDiv.style.top=this.offsetTop+this.offsetHeight+5+'px';
			oDiv.style.display='block';
		};
		
		document.onclick=function(){
			oDiv.style.display='none';
		};
		
		oDiv.onclick=oTxt.onclick=function(ev){
			var oEvent = ev||event;
			oEvent.cancelBubble=true;
		};
		
		function calendar(){
			//修改h2的值
			var oDate = new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oH2.innerHTML=oDate.getFullYear()+'-'+(oDate.getMonth()+1);
			
			
			//每次调用，都要把之前的干掉。
			oUl.innerHTML='';
			//在前面插空格。第一天是周几，就空周几-1的格。
			//获取第一天是周几
			var oDate = new Date();	//?
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setDate(1);
			var w = oDate.getDay();//第一天的星期是w
			//星期如果是周日就为0，如果为0要变成7
			if(w==0)w=7;
			//空w--的格
			w--;
			for(var i=0;i<w;i++){
				var oLi = document.createElement('li');
				oUl.appendChild(oLi);
			}
			
			
			//获取本月有多少天
			var oDate = new Date();	//?
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oDate.setMonth(oDate.getMonth()+1,0);
			var n = oDate.getDate();//这个月有n天
			//有多少天，就创建多少个li
			for(var i=0;i<n;i++){
				var oLi = document.createElement('li');
				oLi.innerHTML=i+1;
				oUl.appendChild(oLi);
			}
			//给li加事件
			function addEv(obj){
				obj.onmouseover=function(){
					this.style.background='#f90';
				};
				obj.onmouseout=function(){
					this.style.background='';
				};
				obj.onclick=function(){
					var oDate= new Date();
					oDate.setMonth(oDate.getMonth()+iNow,1);
					oTxt.value=oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+this.innerHTML;
					oDiv.style.display='none';
				};
			}
			//获取今天的日。判断是今天还是之前的天
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
		//上个月
		oPrev.onclick=function(){
			iNow--;
			calendar();
		};
		//下个月
		oNext.onclick=function(){
			iNow++;
			calendar();
		};
		if(bAdd)return;
		
		bAdd=true;
		var oLink = document.createElement('link');
		oLink.rel='stylesheet';
		oLink.href='calendar.css';
		var oHead = document.getElementsByTagName('head')[0];
		oHead.appendChild(oLink);
	}
})();