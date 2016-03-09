window.onload=function(){
	var oBox = document.getElementById('box');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLi = oUl.children;
	var oOl = oBox.getElementsByTagName('ol')[0];
	var aBtn=  oOl.children;
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
	var W = oUl.offsetWidth/2;
	var iNow=0;
	var timer =null;
	oBox.onmouseover=function(){
		clearInterval(timer);
		oPrev.style.display='block';
		oNext.style.display='block';
	};
	oBox.onmouseout=function(){
		timer = setInterval(function(){
			fnNext();
		},2000);
		oPrev.style.display='none';
		oNext.style.display='none';
	};
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[i].onclick=function(){
				if(iNow%aBtn.length==0&&index==4){
					iNow--;
				}
				if((iNow%aBtn.length==4||iNow==-1)&&index==0){
					iNow++;
				}
				iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
				tab();
			};
		})(i);
	}
	function tab(){
		document.title=iNow;
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
		}
		if(iNow>0){
			aBtn[iNow%aBtn.length].className='on';
		}else{
			aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
		}
		startMove(oUl,-iNow*aLi[0].offsetWidth);
		//oUl.style.left=-iNow*aLi[0].offsetWidth+'px';
	}
	oPrev.onclick=function(){
		iNow--;
		tab();
	};
	oNext.onclick=fnNext;
	function fnNext(){
		iNow++;
		tab();
	}
	
	timer = setInterval(function(){
		fnNext();
	},2000);
	
	
	var left = 0;
	function startMove(obj,iTarget){
		var start = left;
		var dis = iTarget-start;
		var count = Math.floor(700/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var a = 1-n/count;
			left = start+dis*(1-Math.pow(a,3));
			if(left<0){
				obj.style.left=left%W+'px';
			}else{
				obj.style.left=(left%W-W)%W+'px';
			}
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
	}
	
};