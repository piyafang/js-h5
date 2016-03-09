// JavaScript Document
function tools(){
	bgpic();
	searchshow();
	navtab('navtv','navtv_box');
	navtab('navmove','navmove_box');
	bannerpic();
	bannerSshow();
	shadow('intermove_l_ul');
	shadow('hot_l_ul');
	shadow('tvplay_l_ul');
	shadow('moveplay_l_ul');
	shadow('variety__l_ul');
	shadow('cartoon_l_ul');
	shadow('only_ul');
	
	btnlr();
	wpshow('intermove_r');
	wpshow('tvplay_r');
	wpshow('moveplay_r');
	wpshow('variety_r');
	weekshow();
	side();
	 
}

// 图标背景
function bgpic(){
	var oHr=document.getElementById('header_r');
	var aLi=oHr.getElementsByTagName('li');
	var arr1=[-96,-296,-496];
	var arr2=[4,-196,-396];
	for(var i=0;i<aLi.length;i++){
		
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			var oA=this.getElementsByTagName('a')[0];
			oA.style.backgroundPosition='0 '+arr1[this.index]+'px';
		}
		aLi[i].onmouseout=function(){
			var oA=this.getElementsByTagName('a')[0];
			oA.style.backgroundPosition='0 '+arr2[this.index]+'px';
		}
	}
}
// 搜索框
function searchshow(){
	search_uplist
	var oSearch=document.getElementById('search');
	var oSearchShow=document.getElementById('search_uplist');
	var aLi=oSearchShow.getElementsByTagName('li');
	 oSearch.onclick=function(){
	 	if(oSearchShow.style.display=='block'){
	 		oSearchShow.style.display='none';
	 		oSearch.style.borderColor='#fff';
	 	}else{
	 		oSearchShow.style.display='block';
	 		oSearch.style.borderColor='#FD8D4E';
	 	}
	 }

	 for(var i=0;i<aLi.length;i++){
	 	aLi[i].onmouseover=function(){
	 		for(var i=0;i<aLi.length;i++){
	 			aLi[i].className='';
	 		}
	 		this.className='active';
	 	};
	 	aLi[i].onclick=function(){
	 		var oInp=oSearch.getElementsByTagName('input')[0];
	 		var oSpan=this.getElementsByTagName('span')[0];
	 		oInp.value=oSpan.innerHTML;
	 		oSearchShow.style.display='none';
	 		oSearch.style.borderColor='#fff';
	 	};
	 }	
}
// nav选项卡
function navtab(navid1,navid2){
	var onavid1=document.getElementById(navid1);
	var onavid2=document.getElementById(navid2);
	var aA=onavid2.getElementsByTagName('a');
	onavid1.onmouseover=function(){
		onavid2.style.display='block';
	}
	onavid1.onmouseout=function(){
		onavid2.style.display='none';
	}
	for(var i=0;i<aA.length;i++){
		aA[i].onmouseover=function(){
			for(var i=0;i<aA.length;i++){
				aA[i].className='';
			}
			this.className='active';
		}
	}
}

// sbanner

function bannerSshow(){
	var obannerS=document.getElementById('banner_s');
	var aLi=obannerS.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
				var oB=this.getElementsByTagName('b')[0];
				var oI=this.getElementsByTagName('i')[0];
				oI.style.display='block';
				oB.style.display='none';

		}
			aLi[i].onmouseout=function(){
				var oB=this.getElementsByTagName('b')[0];
				var oI=this.getElementsByTagName('i')[0];
				oB.style.display='block';
				oI.style.display='none';
		}
	}
	
}

// banner
function bannerpic(){
	// var oBody=document.body;
	var oSearchShow=document.getElementById('search_uplist');
	var oBannerbg=document.getElementById('banner_bg');
	var obannerS=document.getElementById('banner_s');
	var i=1;
	var timer=null;
	function bgchange(){
				if(i<7){
					oBannerbg.style.backgroundImage='url(img/t'+i+'.jpg)';
					i++;
				}else{i=1;
					oBannerbg.style.backgroundImage='url(img/t'+i+'.jpg)';
				}
	}	
	timer=setInterval(bgchange,2000);
	
	oBannerbg.onmouseover=function(){
		clearInterval(timer);	
		oSearchShow.style.display='none';

	};
	oBannerbg.onmouseout=function(){
		timer=setInterval(bgchange,2000);
	};

}

//背景色 
function shadow(id){
	var oModul=document.getElementById(id);
	var aLi=oModul.getElementsByTagName('li');
	 for(var i=0;i<aLi.length;i++){
	 	aLi[i].onmouseover=function(){
	 		var oShowbox=this.getElementsByTagName('div')[0];
	 			oShowbox.style.display='block';
	 	}
	 	aLi[i].onmouseout=function(){
	 		var oShowbox=this.getElementsByTagName('div')[0];
	 			oShowbox.style.display='none';
	 	}
	 }
}


//左右按钮
function btnlr(){	
	var oBtnbox=document.getElementById('mod_l');
	var aBtnspan=oBtnbox.getElementsByTagName('span');
	var arr1=[-240,-80];
	var arr2=[-160,0];
	for(var i=0;i<aBtnspan.length;i++){
		
		aBtnspan[i].index=i;
		aBtnspan[i].onmouseover=function(){
			this.style.backgroundPosition='0 '+arr1[this.index]+'px';
		}
		aBtnspan[i].onmouseout=function(){
			this.style.backgroundPosition='0 '+arr2[this.index]+'px';
		}
	}
	
}

// 文字与图片
function wpshow(wpid){
	var oWp=document.getElementById(wpid);
	var aLi=oWp.getElementsByTagName('Li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className='';
			}
			this.className='on';
		}
	}
}


//week
function weekshow(){
	var oBtnbox=document.getElementById('week');
	var aBtn=oBtnbox.getElementsByTagName('a');
	var oMain=document.getElementById('weekmain');
	var aMainli=oMain.getElementsByTagName('li');
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onclick=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				aMainli[i].className='';
			}
			this.className='current';
			aMainli[this.index].className='on';
		}
	}

}

// side
function side(){
	var oSide=document.getElementById('side');
	var aBtnspan=oSide.getElementsByTagName('span');
	var arr1=[-54,-162];
	var arr2=[0,-108];
	for(var i=0;i<aBtnspan.length;i++){		
		aBtnspan[i].index=i;
		aBtnspan[i].onmouseover=function(){
			this.style.backgroundPosition='0 '+arr1[this.index]+'px';
		}
		aBtnspan[i].onmouseout=function(){
			this.style.backgroundPosition='0 '+arr2[this.index]+'px';
		}
	}
}









