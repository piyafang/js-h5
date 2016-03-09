define(function(require,exports,module){
	var M = require('doMove');
	exports.slides=function (id){
		var oBox = document.getElementById(id);
		var oUl = oBox.children[0];
		var aLi = oUl.children;
		var oOl = oBox.children[1];
		var aBtn = oOl.children;
		oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onmouseover=function(){
					for(var i=0;i<aBtn.length;i++){
						aBtn[i].className='';
					}
					this.className='on';
					M.move(oUl,{left:-index*aLi[0].offsetWidth});
				};
			})(i);
		}
	};
});