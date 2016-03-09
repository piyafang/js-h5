// JavaScript Document
$(function(){
	$('nav .pshow').hover(				
		function(){
		$('.pshow p').eq($(this).index()-1).show();},
		function(){
		$('.pshow p').hide();
		}
	)

	$('#hkind').hover(
			
		function(){
			$('#kind_list').show();
		},	
		function(){
			$('#kind_list').hide();
		}

	)
})



window.onload=function(){
	loadingShow();
	navliShow();
	// hkindShow();
	brandlistShow();
	icoShow();
}


function loadingShow(){
	var oLoading=document.getElementById('loading');
	var aSpan=oLoading.getElementsByTagName('span');
	var aA=oLoading.getElementsByTagName('a');
	for( var i=0;i<aSpan.length;i++){
		aA[i].index=i;
		aA[i].onmouseover=function(){
			for(var j=0;j<aSpan.length;j++){
				aSpan[j].className='';
			}
		 aSpan[this.index].className='showSpan';
		}
	}
}

function navliShow(){
	var aNav=document.getElementsByTagName('nav')[0];
	var aLi=aNav.getElementsByTagName('li');
	

	for( var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.background='#4a4b4b';
			}
		 aLi[this.index].style.background='#343434';
		 	
		}
	}
}


function brandlistShow(){
	var oBrandbox=document.getElementById('brandlist_box');
	var aDiv= oBrandbox.getElementsByTagName('div');
	var oBrandico=document.getElementById('brandico');
	var aA= oBrandico.getElementsByTagName('a');
	for( var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].onmouseover=function(){
				for(var j=0;j<aA.length;j++){
					aA[j].className='';
					aDiv[j].style.display='none';
				}
			 aA[this.index].className='aActive';
			 aDiv[this.index].style.display='block';
			 	
			}
		}
}


function icoShow(){
	var oicobox=document.getElementById('icobox');
	var aLi= oicobox.getElementsByTagName('li');
	var oRecico=document.getElementById('rec_ico');
	var aSpanBtn= oRecico.getElementsByTagName('span');
	for( var i=0;i<aSpanBtn.length;i++){
			aSpanBtn[i].index=i;
			aSpanBtn[i].onmouseover=function(){
				for(var j=0;j<aSpanBtn.length;j++){
					aLi[j].className='';
					aSpanBtn[j].className='';
				}
			 aLi[this.index].className='icoshow';
			aSpanBtn[this.index].className='bgred';

			 	
			}
		}
}





































