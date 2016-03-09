define(function(require,exports,module){
	exports.changeTab = function (sId){
		var oBox = document.getElementById(sId);
		var oPrev = oBox.getElementsByTagName('a')[0];
		var oNext = oBox.getElementsByTagName('a')[1];
		var aBtn = oBox.getElementsByTagName('input');
		var aDiv = oBox.getElementsByTagName('div');
		
		var iNow = 0;
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onclick=function(){
					iNow=index;
					tab();
				};
			})(i);
		}
		function tab(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				aDiv[i].style.display='none';
			}
			aBtn[iNow].className='on';
			aDiv[iNow].style.display='block';
		}
		oPrev.onclick=function(){
			iNow--;
			if(iNow<0){
				iNow=aBtn.length-1;
			}
			tab();
		};
		oNext.onclick=function(){
			iNow++;
			if(iNow==aBtn.length){
				iNow=0;
			}
			tab();
		};
	}
});