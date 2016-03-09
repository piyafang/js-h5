$.fn.toRed=function(){
	this.css('background','red');
};
$(function(){
	$('*').each(function(index, element) {
        if($(this).attr('toRed')==''){
			$(this).toRed();
		}
    });
});