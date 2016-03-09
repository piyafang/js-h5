'use strict';
function ajax(url,fnSucc,fnFail){
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//2.打开连接
	oAjax.open('GET',url,true);
	//3.发送
	oAjax.send();
	//4.接收
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail(oAjax.status);
			}
		}
	};
}










