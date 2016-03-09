// JavaScript Document
$(function(){
	$('.pie_li').live('click', function(){
			var $this=$(this);
			$this.addClass('li_hover').siblings().removeClass('li_hover');
			var myindex=$('.pie_li').index($this);
			$('.pie_img').find('li').eq(myindex).show().siblings().hide();
		});
	$('.Ledge_Ascend').live('click', function(){
		var $this = $(this);
		   if($this.hasClass('Ledge_Ascend_1')){
			   $this.removeClass('Ledge_Ascend_1').siblings('.Ledge_Desce').addClass('Ledge_Desce_1');
		   }else{
			    $this.addClass('Ledge_Ascend_1').siblings('.Ledge_Desce').removeClass('Ledge_Desce_1');
		   }
	});
	//$('.Ledge_Desce').live('click', function(){
//		var $this = $(this);
//		   if($this.hasClass('Ledge_Desce_1')){
//			   $this.removeClass('Ledge_Desce_1').siblings('.Ledge_Ascend').addClass('Ledge_Ascend_1');
//		   }else{
//			    $this.addClass('Ledge_Desce_1').siblings('.Ledge_Ascend').removeClass('Ledge_Ascend_1');
//		   }
//	});
});