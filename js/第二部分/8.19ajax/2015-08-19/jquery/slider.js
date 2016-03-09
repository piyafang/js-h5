'use strict';
$.fn.slider=function(){
	$('.slider').each(function(index,element){
		var obj = $(this);
		obj.find('ol li').click(function(){
			var oUl = obj.find('ul');
			$(this).addClass('on').siblings().removeClass('on');
			oUl.stop().animate({top:-$(this).index()*oUl.find('li').height()});
		});
	});
};