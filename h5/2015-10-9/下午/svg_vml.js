//版权 北京智能社©, 保留所有权利

var isIE=/MSIE [6-8]/.test(navigator.userAgent);

//只针对低版本IE
if(isIE)
{
	//1.ns
	document.namespaces.add('zns', 'urn:schemas-microsoft-com:vml');
	//2.style
	document.createStyleSheet().addRule('zns\\:*', 'behavior: url(#default#VML); position:absolute;');
}

//1.创建“画布”
function createPage(w, h)
{
	if(isIE)
	{
		var oDiv=document.createElement('div');
		
		oDiv.style.cssText='width:'+w+'px; height:'+h+'px; overflow:hidden;';
		
		return oDiv;
	}
	else
	{
		var oSvg=document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		
		oSvg.setAttribute('width', w);
		oSvg.setAttribute('height', h);
		
		return oSvg;
	}
}

//2.创建形状——rect
function createRect(x, y, w, h, background, borderColor, borderWidth)
{
	if(isIE)
	{
		//<zns:rect style="left:100px; top:100px; width:400px; height:300px;" fillcolor="red" strokecolor="green" strokeweight="5">
		
		var obj=document.createElement('zns:rect');
		
		obj.style.left=x+'px';
		obj.style.top=y+'px';
		obj.style.width=w+'px';
		obj.style.height=h+'px';
		
		obj.fillcolor=background;
		obj.strokecolor=borderColor;
		obj.strokeweight=borderWidth;
		
		return obj;
	}
	else
	{
		//<rect x="100" y="100" width="400" height="300" style="fill:red; stroke:green; stroke-width:5;">
		
		var obj=document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		
		obj.setAttribute('x', x);
		obj.setAttribute('y', y);
		obj.setAttribute('width', w);
		obj.setAttribute('height', h);
		
		obj.style.fill=background;
		obj.style.stroke=borderColor;
		obj.style.strokeWidth=borderWidth;
		
		return obj;
	}
}

//3.添加












