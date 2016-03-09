define(function(require,exports,module){
	exports.tab = function (){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
			aDiv[i].style.display='none';
		}
		aBtn[iNow].className='on';
		aDiv[iNow].style.display='block';
	};
});