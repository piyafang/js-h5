'use strict';
function json2url(json){
	var arr = [];
	for(var i in json){
		arr.push(i+'='+json[i]);
	}
	return arr.join('&');
}
function jsonp(json){
	json = json||{};
	if(!json.url)return;
	json.data=json.data||{};
	json.cbName = json.cbName||'cb';
	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	
	var oS = document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
	window[json.data[json.cbName]]=function(json2){
		json.success&&json.success(json2);
	}
}