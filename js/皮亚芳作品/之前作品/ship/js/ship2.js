// JavaScript Document
window.onload=function(){
	switchOver();
	 searchDown();
	transShow();
	quantumSlides();
	tab('cabinUl','quantum_mod_intro');
	tab('diningUl','quantum_mod_intro2');
	tab('funUl','quantum_mod_intro3');
	
};


//getByClass
function findInArr(arr,sClass){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==sClass){
			return true;
		}
	}
	return false;
}
function getByClass(obj,sClass){
	var aResult = [];
	if(obj.getElementsByClassName){
		aResult=obj.getElementsByClassName(sClass);
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

//头部图片切换
function switchOver(){
	var oHeaderPic=document.getElementById('header_pic');
	var aA=oHeaderPic.children;
	var iNow=0;
	var timer=null;
	function tab(){
		for(var i=0;i<aA.length;i++){
			startMove(aA[i],{'opacity':0})
		}
		startMove(aA[iNow],{'opacity':1})
	}
	function nextShow(){
		iNow++;
		if(iNow>=aA.length)iNow=0;
		tab();
	}
	clearInterval(timer);
	timer=setInterval(nextShow,2000);
	oHeaderPic.onmouseover=function(){
		clearInterval(timer);
	};
	oHeaderPic.onmouseout=function(){
		timer=setInterval(nextShow,2000);
	};
};

//搜索下拉框
function searchDown(){
	var oSearch=document.getElementById('search');
	var aDownBtn=oSearch.getElementsByTagName('span');
	var aDownUl=oSearch.getElementsByTagName('ul');
	var bOk=true;
	for(var i=0;i<aDownBtn.length;i++){
		(function (index){
			aDownBtn[i].onclick=function(){
				if(bOk){
					aDownUl[index].style.display='block';
				}else{
					aDownUl[index].style.display='none';
				}
				bOk=!bOk;
			};
		}) (i);
	}
}

//透明层显示
function transShow(){
	var aAd_ship=getByClass(document,'ad_ship');
	var aQuantum_slides=getByClass(document,'quantum_slides');
	function show(obj){
		for(var i=0;i<obj.length;i++){
			obj[i].onmouseover=function(){
				var oH4=this.getElementsByTagName('h4')[0];
				oH4.style.display='block';
			};
			obj[i].onmouseout=function(){
				var oH4=this.getElementsByTagName('h4')[0];
				oH4.style.display='none';
			};
		}
	}
	show(aAd_ship);
	show(aQuantum_slides);
}
	
//

function quantumSlides(){
	var oQuantum_slides_box=document.getElementById('quantum_slides_box');
	var aQuantum_slides=oQuantum_slides_box.getElementsByTagName('div');
	var oQuantum_sPic=document.getElementById('quantum_sPic');
	var aQuantum_sImg=oQuantum_sPic.getElementsByTagName('img');
	var iNow=0;
	var timer=null;
	function quantumSlidesChange(){
		for(var i=0;i<aQuantum_slides.length;i++){
			(function (index){
				for(var i=0;i<aQuantum_slides.length;i++){
						aQuantum_slides[i].style.display='none';
				}
				aQuantum_slides[iNow].style.display='block';
			}) (i);
		}
		for(var i=0;i<aQuantum_sImg.length;i++){
				aQuantum_sImg[i].src='images/s_quantum'+(iNow+2)%4+'.png';
		}
	}
	changeIntime();
	clearInterval(timer);
	timer=setInterval(changeIntime,2000);
	function changeIntime(){
		quantumSlidesChange();
		iNow++;
		if(iNow==3)iNow=0;
	}
	oQuantum_slides_box.onmouseover=function(){
		clearInterval(timer);
	};
	oQuantum_slides_box.onmouseout=function(){
		timer=setInterval(changeIntime,2000);
	};
		
}

//选项卡
function tab(id1,id2){
	var obj1=document.getElementById(id1);
	var aLi=obj1.children;
	var obj2=document.getElementById(id2);
	var aDiv=obj2.getElementsByTagName('div');
	
	for(var i=0;i<aLi.length;i++){
		(function(index){
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					aDiv[i].style.display='none';
				}
				aLi[index].className='active';
				aDiv[index].style.display='block';
			};
		}) (i);
	}
}

//图片切换


























