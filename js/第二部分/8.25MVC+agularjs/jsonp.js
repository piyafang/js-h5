'use strict';
function jsonp(json){
	json = json||{}
	if(!json.url)return;
	json.data=json.data||{};
	json.cbName=json.cbName||'cb';
	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	var arr = [];
	for(var i in json.data){
		arr.push(i+'='+encodeURIComponent(json.data[i]));
	}
	var sDate = arr.join('&');
	var oS = document.createElement('script');
	window[json.data[json.cbName]] = function (json2){
		json.success&&json.success(json2);
		oH.removeChild(oS);
	}
	oS.src=json.url+'?'+sDate;
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);	
}