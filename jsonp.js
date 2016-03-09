//版权 北京智能社©, 保留所有权利

function jsonp(url, data, success)
{
	data.cb='jsonp'+Math.random();
	data.cb=data.cb.replace('.', '');
	
	//拼url
	var arr=[];
	for(var i in data)
	{
		arr.push(i+'='+encodeURIComponent(data[i]));
	}
	var str=arr.join('&');
	
	window[data.cb]=function (json)
	{
		success(json);
		
		//机会
		oHead.removeChild(oS);
		window[data.cb]=null;
	};
	
	//
	var oS=document.createElement('script');
	oS.src=url+'?'+str;
	
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}