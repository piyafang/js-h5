'use strict';
/*
**addCookie 	创建cookie
**sName 		名字
**sValue 		值
**iDay 			什么时候过期
*/
//iDay存的是数字。
function addCookie(sName,sValue,iDay){
	if(iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=sName+'='+sValue+'; PATH=/; EXPIRES='+oDate.toGMTString();
	}else{
		document.cookie=sName+'='+sValue+'; PATH=/';
	}
}
/*
**getCookie 	通过名字获取cookie的值
**sName 		名字
**return 		返回cookie的值
*/
function getCookie(sName){
	var arr = document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0]==sName){
			return arr2[1];
		}
	}
}

/*
**removeCookie 	删除cookie
**sName 		通过名字删除这个cookie
*/
function removeCookie(sName){
	addCookie(sName,1,-1);
}















