笔记
---------------------------------------------------------
运动核心
dis = iTarget-start;
var count = Math.floor(time/30);
var cur = start+dis*n/count;

doMove(Tween)

服务器是否能正常的运行。

cookie 		
储存在用户本地终端上的数据
/代表了你的服务器的根目录 	祖宗目录

特性：
1.只能通过域名方式使用。
2.名字和值成对出现。
3.cookie不安全，所以不会存储一些保密性的东西。
4.容量小，4KB左右。
5.cookie本身有生命周期。
expires 	生命周期
默认是session
session 	会话
从打开这个网址开始——到关闭浏览器结束
6.不能跨浏览器。


==========================
怎么用？
什么时候用？
==========================
如何存cookie?
document.cookie='张三'	×

document.cookie='名字=值';

//需求。cookie活的久一点。
//日期对象
document.cookie='名字=值; EXPIRES='+oDate;

PATH 		路径
/
document.cookie='名字=值; PATH=/; EXPIRES='+oDate;

日起对象的问题:
GMT格式
Tue Aug 18 2015 10:32:51 GMT+0800 (中国标准时间)
UTC格式
Tue Aug 18 10:34:28 UTC+0800 2015 
统一GMT格式.
把日期的格式变成GMT格式
.toGMTString()
Tue, 18 Aug 2015 02:36:05 GMT
Tue, 18 Aug 2015 02:36:28 UTC 

var oDate = new Date();
document.cookie='名字=值; PATH=/; EXPIRES='+oDate.toGMTString();

获取cookie
document.cooke
需要通过  	'; ' 	来分割成数组
每一对用	'='	分成数组
如果数组[0]==sName
那么这个值你就需要

删除cookie

如何使用cookie?
addCookie(sName,sValue,iDay);
getCookie(sName);
removeCookie(sName);

拖拽
存什么？
oBox.offsetLeft和oBox.offsetTop
什么时候存cookie?
鼠标抬起是存
什么时候获取cookie?
页面加载之后就要获取

新浪微博 心情文字保存
必会的例子
1.拖拽
2.新浪微博
3.选项卡
4.记住用户名

onsubmit 		form提交事件

cookie作业：以上我做得例子要会
	自己找5个之前的例子用cookie做。

模块化
=================================
requirejs进口的	http://requirejs.org/
seajs国产的 		http://seajs.org

问题:
1.手动引入很多的js文件
2.多个js文件有依赖关系
seajs	模块化解决这两个问题
js文件就是模块
1个js文件就是一个模块	模块是以功能划分

如何定义一个模块?
define(function(require,exports,module){
	//require 	引入一个模块
	//exports 	导出一个模块
	//module 	批量导出模块
});

如何使用一个模块

seajs作业：之前的例子，找10个用seajs写。
requirejs


jquery库
http://jquery.com/ 	官网
本身使用js开发的。
版本
1.x 	亚非拉
2.x 	欧美
	不兼容IE6,7,8

1.7
不建议下最新版本的去使用。不稳定。

*js能做的jquery不一定能做。jquery能做的js一定能做
为了提高开发效率
jquery
初期写jquery的时候会有困惑
jquery中$是最值钱的。
jquery这东西是给不会原生的人用的。
只会切图 	
后台 		


原生				jquery
window.onload		$(function(){});
document.getElementById	$('#id');
oBtn.onclick=function(){};	obj.click(function(){});

.show() 		显示
.style.display='block';


click();				点击事件
mouseover();			鼠标移入事件
mouseout();			鼠标移出事件
.toggle(fn,fn........);		切换
.hover(fn,fn);			移入移出切换

效果:
fadeIn		淡入
fadeOut	淡出
slideDown	滑入
slideUp	滑出
以上不推荐.
推荐： animate()
连续点击会挂
.stop()		****开始之前加上.stop()
把上一个东西先停下，在做我的东西。

jquery能直接操作一组元素

jquery获取元素 	jquery选择器
写法跟css一模一样没有任何区别。
基本的选择器
通过id获取元素			$('#id')
通过class获取元素		$('.class');
通过标签获取元素 		$('标签名');

属性选择器（根据属性获取元素）
$('[属性名=属性值]')

伪类选择器
:first 			获取第一个
:last 			获取最后一个
:even			偶数行
:odd 			奇数行
:eq(index)		根据索引找
:lt(index)		小于
:gt(index)		大于
:contains(text)		内容文本匹配
:has(标签)		标签匹配



操作css样式
.css(样式名);				获取一个样式
.css(样式名,样式值);			设置一个样式
.css({样式名:样式值,样式名:样式值})	批量设置样式

属性的操作
.attr(属性名')				获取一个属性值
.attr(属性名,属性值); 			设置一个属性
.attr({属性名:属性值,属性名:属性值})	批量设置属性


操作class
.addClass('class')		添加一个class
.removeClass('class')		删除一个class

操作内容
表单元素
.val()			获取内容
.val('内容')		设置内容
非表单元素
.html() 		获取内容
.html('内容')		设置内容

对象分两种
原生对象
jquery对象
正常情况下jquery中获取到的this都是原生对象
原生对象不能使用jquery的方法或属性
jquery对象不能使用原生的方法或属性
原生对象-》jquery对象
$(this);


jquery获取位置
绝对位置	getPos
obj.offset().left;		获取绝对left
obj.offset().top;		获取绝对top
普通的位置 	offsetLeft/Top
obj.position().left; 		获取普通left
obj.position().top; 		获取普通top



尺寸
obj.height();			纯高度
obj.width();			纯宽度
obj.innerHeight();		高度加padding
obj.innerWidth();		宽度加padding
obj.outerHeight(); 		高度加padding+border
obj.outerWidth();		宽度加padding+border

DOM操作
obj.append('内容')	元素内部追加内容
要.appendTo('谁')	把一个元素追加到另一个元素里面
obj.prepend('内容')	元素内部前置内容
要.prependTo('谁')	把一个元素前置到另一个元素里面

obj.after('内容')	在元素外部后面加
obj.before('内容')	在元素外部前面加
obj.insertAfter()
obj.insertBefore()

删除元素
remove()

jquery	事件
**jquery中的事件都是绑定上去的。

bind			事件绑定
unbind 		解除绑定
	特危险，一个不小心，所有的事件都没了


.delegate 		事件委托
.undelegate 		取消事件委托

return false 	
阻止默认事件	取消冒泡

阻止默认事件
event.preventDefault();
取消冒泡
event.stopPropagation();

jquery中的循环
$('li').each(function(index, element) {
	//index		索引
	//element 		原生对象

});

原生对象跟jquery对象不通用
原生对象转jquery对象
$(obj);
jquery对象转原生对象
obj[0]
obj.get(0)
==============================



没讲:
jquery   animate
封装插件




小练习：
cookie:
1.拖拽
2.新浪微博
3.选项卡
4.记住用户名
自己再找5个之前的例子用cookie做。

seajs:
自己找10个例子做。

jquery
自己找30个例子做

















