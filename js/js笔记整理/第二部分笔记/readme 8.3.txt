笔记
==================================
js
ECMAScript		核心解释器
DOM			文档对象模型
BOM			浏览器对象模型

DOM树
document
	head
		title
		script
		style
		....
	body
		..
			..
				...
查看标签名
obj.tagName 	（都是大写字母）

节点关系
获取子节点
childNodes 		获取子节点，包括文本节点
	nodeType 	检测节点类型
	文本节点	3
	标签节点	1
children 	获取子节点（只包括第一层）

获取父节点
结构：parentNode 		document
定位：offsetParent 		body

获取兄弟节点:
上一个兄弟节点
obj.previousElementSibling	兼容高版本浏览器
obj.previousSibling		兼容ie6,7,8
obj.previousElementSibling||obj.previousSibling;

下一个兄弟节点
obj.nextElementSibling		兼容高版本浏览器
obj.nextSibling 		兼容ie6,7,8
obj.nextElementSibling||obj.nextSibling

首尾子节点
首
父级.firstElementChild		兼容高版本浏览器
父级.firstChild			兼容ie6,7,8
父级.firstElementChild||父级.firstChild
尾
父级.lastElementChild		兼容高版本浏览器
父级.lastChild			兼容ie6,7,8
父级.lastElementChild||父级.lastChild

物体信息：
obj.offsetWidth 	盒子模型的宽度
obj.offsetHeight 	盒子模型的高度
obj.offsetLeft 		距离定位父级的距离
obj.offsetTop 		距离定位父级的距离

创建元素:
document.createElement('标签名');
插入元素
父级.appendChild(要插入的元素)
父级.insertBefore(要插入的，插入谁之前)
删除元素
父级.removeChild(要删除的元素)

克隆
obj.cloneNode(true) 		深度克隆
**注意：把id去掉


BOM	跟浏览器有关。
window
打开一个新页面。
window.open(地址)
window.open(地址,打开方式);

不兼容：
chrome		拦截
firefox 			阻止
ie 			直接打开

用户操作是兼容的。

关闭页面
window.close();

兼容问题：
chrome 		直接关闭
IE 			询问是否关闭。
firefox 			没反应
脚本不得关闭非脚本打开的窗口。

只能关闭js打开的窗口。

//获取浏览器的详细信息。
if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
}else{
}

window.location 		网站地址json
http://www.a.com/s/a?ie=utf-8&abc=123#1d
window.location.host 		获取域名
www.a.com
window.location.href 		整个地址
http://www.a.com/s/a?ie=utf-8&abc=123#abc
window.location.search		参数
?ie=utf-8&abc=123
window.location.protocol	协议
http://
window.location.pathname 	路径
/s/a
window.location.hash 		锚点
#abc

用户体验:
oHtml = document.body.parentNode;
oHtml = document.documentElement;
获取html标签


右下角富媒体：
1.position:absolute; right:0; bottom:0;
2.position:fixed; right:0; bottom:0;	不兼容ie6
3.自己写（系统给的是最好的。）


onscroll 		当页面滚动时触发。

滚动距离(页面滚了多少它就是多少)
document.documentElement.scrollTop;
不兼容chrome

document.body.scrollTop;
兼容chrome的。

兼容写法：
document.documentElement.scrollTop||document.body.scrollTop;

获取可视区高度
document.documentElement.clientHeight;


改变窗口大小事件
onresize


页面滚动事件
onscroll
改变窗口大小事件
onresize


滚动距离
document.documentElement.scrollTop||document.body.scrollTop;		获取上下滚动距离
document.documentElement.scrollLeft||document.body.scrollLeft;		获取左右滚动距离

可视区的宽高
document.documentElement.clientHeight
	获取可视区高度
document.documentElement.clientWidth
	获取可视区宽度

绝对位置：
 元素在*页面*中的位置。

function getPos(obj){
	var l = 0;
	var t = 0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}

obj.getBoundingClientRect();	获取绝对位置;
	.left		左边距离页面左边的距离
	.top 		上边距离页面上边的距离
	.right 		右边距离页面左边的距离
	.bottom 	下边距离页面上边的距离



-------------------------------------------------------
在线运行代码 
左/右下角悬浮框
对联广告
浏览器宽度-控制颜色
浏览器宽度-控制列数




