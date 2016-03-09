// JavaScript Document
window.onload=function(){
	switchOver();
	searchDown();
	transShow();
	shipGroup();
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
	for(var i=0;i<aAd_ship.length;i++){
		aAd_ship[i].onmouseover=function(){
			var oH4=this.getElementsByTagName('h4')[0];
			oH4.style.display='block';
		};
		aAd_ship[i].onmouseout=function(){
			var oH4=this.getElementsByTagName('h4')[0];
			oH4.style.display='none';
		};
	}
}

function shipGroup(){
	var oShipGroup=document.getElementById('ship_group');
	var aDd=oShipGroup.getElementsByTagName('dd');
	var oShip_grounp_info=document.getElementById('ship_grounp_info');
	var aShip_info=oShip_grounp_info.getElementsByTagName('div');
	for(var i=0;i<aDd.length;i++){
		(function(index){
			aDd[i].onmouseover=function(){
				for(var i=0;i<aDd.length;i++){
					aDd[i].className='';
					aShip_info[i].style.display='none';
				}
				this.className='active';
				aShip_info[index].style.display='block';
			};
		})(i);
	}
	
}






































