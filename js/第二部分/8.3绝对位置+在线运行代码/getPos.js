// JavaScript Document
//获取这个元素在页面中的绝对位置.
function getPos(obj){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj = obj.offsetParent;
	}
	return {left:l,top:t};
}
window.onload=function(){
	var oDiv3 = document.getElementById('div3');
	alert(getPos(oDiv3).left);
};
