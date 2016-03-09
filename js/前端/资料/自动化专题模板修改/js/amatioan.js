// JavaScript Document
$(function(){
	$(document).scroll();
	$('.topMore_btn').on('click', function(){
		var $this=$(this);
		var content=$this.parents('.topCityNav');
		if(content.height()==32){
				content.animate({'height':'64px'},500);
			}
	});
	$(window).on('scroll',function(){
		var $this=$(this);
		var foaltLfet=$('.foaltLfet');
		foaltLfet.show();
			if($this.scrollTop()<512){
				foaltLfet.css({'top':512-$this.scrollTop()+30+'px'});
			}else{
				foaltLfet.css({'top':'30px'});
			}
		});
	$('.returnHome').on('click', function(){
		$(document).scrollTop(512);
	});
	$('.amaCollectionBtn').on('click', function(){
		var my_url=	window.location.href;
		AddFavorite(my_url, '搜房网自动化专题页')
	})
})
//加入收藏
  function AddFavorite(sURL, sTitle) {
            sURL = encodeURI(sURL); 
        try{   
             window.external.addFavorite(sURL, sTitle);    
        }catch(e) {   
           try{   
                window.sidebar.addPanel(sTitle, sURL, "");   
            }catch (e) {   
                alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
            }   
        }
    }
