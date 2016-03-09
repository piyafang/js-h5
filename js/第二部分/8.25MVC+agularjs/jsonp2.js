// JavaScript Document
function jsonp(json){
	json=json||{};
	if(!json.url)return;
	json.data=json.data||{};
	json.cbName=json.cbName||'cb';
	json.data[json.cbName]='show'+Math.random();
	json.data[json.cbName]=json.data[json.cbName].replace('.','');
	
	var arr=[];
	for(var i in json){
		arr.push(i+'='+encodeURIComponent(json[i]));	
	}
	var sData=arr.join('&');
	var oScript=document.createElement('script');
	window[json.data[json.cbName]]=function(json2){
		json.success&&json.success(json2);
		oH.removeChild(oS);
	};
	oScript.src=json.url+'?'+sData;
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}



























