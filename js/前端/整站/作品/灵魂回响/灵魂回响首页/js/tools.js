// JavaScript Document
window.onload=function(){
	
	cyqSever();
	navshow();
	// icoshow();
	focuspicshow('focusBtn1','focus_pic1');
	focuspicshow('focusBtn2','focus_pic2');
	focuschange();
	focuslishow();
	activecenter();
	lidivshow('contactul','contactdiv');
	lidivshow('mediaul','mediadiv');
	lidivshow('enjoyul','enjoydiv');
	actrshow();
	 kjimgshow();
}





// 畅游全服务
function cyqSever(){
 $('#cyqSever').hover(function(){
 	$('#cyqSever_list').show()},function(){
		$('#cyqSever_list').hide();

 		}
	
    )
 $('#cyqSever_list p a').hover(function(){
 	$(this).css('color','#985DA3')},function(){
 	$(this).css('color','#333');
 })
 
}

// 导航
function navshow(){
	$('#nav_h dl').hover(function(){
		$('#nav_h dt').eq($(this).index()).hide();
		$('#nav_h dd').eq($(this).index()).show();

	},function(){
		$('#nav_h dt').eq($(this).index()).show();
		$('#nav_h dd').eq($(this).index()).hide();
	})
}


// ico

// 魔神天降
function focuspicshow(fBtn,fpic){

	var ofBtn=document.getElementById(fBtn);
	var aBtn=ofBtn.getElementsByTagName('span');
	var ofpic=document.getElementById(fpic);
	var afPic=ofpic.getElementsByTagName('a');
	for( var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
				afPic[j].className='';
			}
			this.className='bgred';
			afPic[this.index].className='show';
		}
	}


}

// focuschange
function focuschange(){
	var oChangeBtn=document.getElementById('changeBtn');
	var aBtn=oChangeBtn.getElementsByTagName('a');
	var oFocus_l=document.getElementById('focus_l');
	var oDiv=oFocus_l.getElementsByTagName('div');
	for( var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
				oDiv[j].style.display='none';
			}
			this.className='active';

			oDiv[this.index].style.display='block';
		}
	}

}

// focuslishow
function focuslishow(){
$('#focusli li').hover(function(){
	$('#focusli li').removeClass('show');
	$(this).addClass('show');
})
}

//lidivshow
function lidivshow(mainul,maindiv){
	var omainul=document.getElementById(mainul);
	var aLi=omainul.getElementsByTagName('li');

	var omaindiv=document.getElementById(maindiv);
	var aDiv=omaindiv.getElementsByTagName('div');
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
				aDiv[j].style.display='none';
			}
			this.className='active';
			aDiv[this.index].style.display='block';
		}
	}


}


// 活动中心
function activecenter(){

	var oActbtn=document.getElementById('actcbtn');
	var aLiBtn=oActbtn.getElementsByTagName('li');
	var oActcpic=document.getElementById('actc_pic');
	var aApic=oActcpic.getElementsByTagName('a');

	var arr=[0,-109,-218,-327,-436,-545];
	for(var i=0;i<aLiBtn.length;i++){
		aLiBtn[i].index=i;
		aLiBtn[i].onmouseover=function(){
			for(var j=0;j<aLiBtn.length;j++){
				aLiBtn[j].style.backgroundPosition='';
				aApic[j].style.display='none';
			}
			this.style.backgroundPosition=arr[this.index]+'px -471px';
			aApic[this.index].style.display='block';	
		}
		
	}
	
}

//活动中心右边
function actrshow(){
	$('.actc_r_t li').hover(function(){
		$('.actc_r_t div').eq($(this).index()).show();
		$('.actc_r_t p').eq($(this).index()).hide();
	},function(){
		$('.actc_r_t div').eq($(this).index()).hide();
		$('.actc_r_t p').eq($(this).index()).show();

	})


}

$(function(){
	$('.actcli_last').mouseover(function(){
		$('.actcli div').css('display','none');
		$('.actcli p').css('display','block');
	})

	$('.actcli_last').mouseout(function(){
		$('.actcli div').css('display','block');
		$('.actcli p').css('display','none');
	})
})

//快捷入口轮播图


function kjimgshow(){
  var kj_img=document.getElementById('kj_img');
  var imgul=document.getElementById('imgul');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
var a=0;
	imgul.onmouseover=function(){
		
			$('#prev').mouseover(function(){
				var a = 0;
				a++;
				var num = a*-215;
				$('#imgul').css('margin-left',num+'px');	
			})
			$('#next').mouseover(function(){
				if(a=3){
					a--;
				var num = a*-215;
				$('#imgul').css('margin-left',num+'px');
				
				}	
			})
	}

}

