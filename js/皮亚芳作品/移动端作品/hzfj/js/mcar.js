/**
 * @author liss
 */


var idx = 0;

(function($) {
	$.fn.picLazyLoad = function(settings) {
		var $this = $(this), _winScrollTop = 0, _winHeight = $(window).height();
		settings = $.extend({
			threshold : 0,
			placeholder : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'
		}, settings || {});
		lazyLoadPic();
		function lazyLoadPic() {
			var len = $this.length;
			$this.each(function(i) {
				var $self = $(this);
				if ($self.attr('data-src')) {
					$self.attr('src', $self.attr('data-src'));
					$self.removeAttr('data-src');
					$self.on('load',function(){
						idx++;
						$('.load .num').html(parseInt((idx/len)*100)+'%');
						if(i == len-1 ){
							loadfn();
						}
					})		
				}
			});
		}

	}
})(Zepto);

	
    var len = $('.item').length, newIdex = 0;
    $('.item').bind('swipeUp',function(){
        var idex = $('.item').index($(this));
        if(idex <= len-2){
            $(this).hide();
            $('.item').eq(idex+1).show();
            idex = idex+1;
            $('.topBtn').hide();
            //$('.btBtn').hide();
            newIdex = idex;
            arrow(idex, len-1);
            
        }
    });
    
    $('.item').bind('swipeDown',function(){
        var idex = $('.item').index($(this));
        if(idex > 0){
            $(this).hide();
            $('.item').eq(idex-1).show();
            idex = idex-1;
            $('.topBtn').hide();
            //$('.btBtn').hide();
            newIdex = idex;
            arrow(idex, len-1);
            
        }
    });
    
    function arrow(idx,len){
        setTimeout(function(){
        	if(idx==0){
        		$('.topBtn').hide();
        	}else{
        		$('.topBtn').show();
        	}
        	if(idx == len){
        		$('.btBtn').hide();
        	}else{
        		$('.btBtn').show();
        	}
        },2000);
    };
    
    $('.lazypic').picLazyLoad();
    

function loadfn(){
	
	$('.load').remove();
	$('.cover').show();
	arrow(0);
}


var arr = [ "FadeIn", "FadeInT",  "FadeInL",  "FadeInR",  "FadeInB"]
var key ,flag = false, vsrc, imgh, imgw, imgt, Lens=false;
$('.lazypic').singleTap(function(){
	var picSrc = $(this).attr('data-bigimg'), iw = $("body").height(), iws =  $("body").width();
	if(picSrc){
		$('.filter').show();
		key = parseInt(Math.random()*(arr.length-1));
		if(vsrc == picSrc){
			$('.pageImg').show().addClass(arr[key]);
			return false;
		}
		$('.loadings').show();
		vsrc = picSrc;
		//$('.pageImg').find('img').attr('src',vsrc);
		
		var sImg = new Image();
		sImg.src = vsrc
		
		sImg.onload = function(){
			$('.loadings').hide();
			$('.pageImg').find('img').attr('src',vsrc);
			imgh = sImg.height; imgw = sImg.width;
			if(imgh>imgw) flag = true;
			var iHp = parseInt($('body').height()*0.9);
			var iWp = parseInt(iHp*(imgh/imgw));
			var iHp2 = parseInt(iws*(imgh/imgw));
			$('.pageImg').css({
				"width" :"100%",
				"left" : 0,
			});
			
			imgt = iHp/2 - iHp2/2;
			
			 $('.pageImg').find('img').css({
					"position":"absolute",
					"top":imgt, 
			});
			
			
			//if(flag){
				
				// $('.pageImg').find('img').css({
					// "top" : "50%",
					// "marginTop" : 
				// });				
			// }else{
				// $('.pageImg').css({
					// "height":iHp,
					// "width" :iWp,
					// "marginLeft" : -iWp/2
				// });
				// $('.pageImg').find('img').css({
					// "width":iHp,
					// "position":"absolute",
					// "top":"50%",
					// "left":"50%",
					// "marginTop":-iWp/2, 
					// "marginLeft":-iHp/2, 
				// }).addClass('rotates');
			// }
			$('.pageImg').show().addClass(arr[key]);
		};
			
	}


});

$('.pageImg,.filter').singleTap(function(){
	//$(this).find('img').removeAttr('src').removeAttr('style');
	//.removeAttr('style');
	if(!Lens){
		$(this).removeClass(arr[key]);
		$('.pageImg').hide()
		$('.filter').hide();
		flag = false;
	
      }
		
	return false;
	
});


$('.pageImg').doubleTap(function(){
	
	if(Lens){
		$('.pageImg').find('img').css({
			"top":imgt,
			"left" : 0,
			"width" : "100%",
			"height" : "auto" 
		});
		Lens = false;
	}else{
		var ihps = parseInt($('body').height()*0.9), iwps = parseInt($('body').width());
		$('.pageImg').find('img').css({
			"width" : imgw,
			"height" : imgh,
			"top" : ihps/2 - imgh/2,
			"left" : iwps/2 - imgw/2
		});
		Lens = true;
	}

	
});

$('.pageImg img').get(0).addEventListener('touchstart',DownHandle,false);
$('.pageImg img').get(0).addEventListener('touchmove',MoveHandle,false);
$('.pageImg img').get(0).addEventListener('touchend',UpHandle,false);

var startPoint = {}, endPoint = {};

function DownHandle(e){
	if(!Lens) return false;
	e.preventDefault();
	e = e.changedTouches[e.changedTouches.length - 1];
	var x = (e.clientX + document.body.scrollLeft || e.pageX),
	    y = (e.clientY + document.body.scrollTop || e.pageY);
	startPoint = {
	    'x': x,
	    'y': y
	};	
};


function MoveHandle(e){
	if(!Lens) return false;
	e.preventDefault();
 	e = e.changedTouches[e.changedTouches.length - 1];
    var x = (e.clientX + document.body.scrollLeft || e.pageX),
        y = (e.clientY + document.body.scrollTop || e.pageY);
    // var ix = x - lastPoint.x; 
    // var iy = y - lastPoint.y;
//     
    // var il = $('.pageImg img').position().left, it = $('.pageImg img').position().top;
//     
//     
//     
    // $('.pageImg img').css({
    	// "left" : il-ix,
    	// "top" : it - iy
    // });
//     
    // console.log(il+"+2+"+it);
//     
    // lastPoint = {
	    // 'x': x,
	    // 'y': y
	// };	
	
	endPoint = {
	    'x': x,
	    'y': y
	};	
	

	var x = startPoint.x - endPoint.x, y = startPoint.y - endPoint.y;
	var il = $('.pageImg img').position().left, it = $('.pageImg img').position().top;
	var h1 = parseInt($('body').height()*0.9), w1 = parseInt($('body').width()), h2 = $('.pageImg img').height(), w2 =$('.pageImg img').width(); 
	il = il - 2*x;
	it = it - 2*y;
	console.log(h1+";"+w1);
	console.log(h2+";"+w2);
	if(il>=0){
		il = 0;
	}
	if(il <= w1-w2){
		il = w1-w2;
	}
	
	if(it>=0){
		it = 0;
	}
	if(it <= h1-h2){
		it = h1-h2;
	}
	
	$('.pageImg img').css({
		top : it,
		left : il	
	});
		
	startPoint.x = endPoint.x;
	startPoint.y = endPoint.y;	

	
};


function UpHandle(e){
	if(!Lens) return false;
	e.preventDefault();
	
 	return false;
};














