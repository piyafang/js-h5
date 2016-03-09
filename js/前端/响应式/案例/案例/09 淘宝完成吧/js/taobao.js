$(document).ready(function() {
	$(".notice-hd li").hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
		/*alert($(this).index()); 通过上面的li获取响应的索引值，给下面的ul使用*/
		$(".notice-bd ul").eq($(this).index()).show().siblings().hide();
	});
});