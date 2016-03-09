笔记
==========================================
面向对象——知道怎么用，但是不知道是怎么回事。

类		某一类东西
对象		某一个东西

关于new作用：
1.自动帮你	this = new Object();
2.自动帮你	return this;

关于this
1.优先级
2.只看最后一次调用
3.只管一层


优先级:
高	new 		object
	定时器		window
	事件		触发事件的元素
	方法		方法属于哪个对象
	其他		window/undefined



MVC 		代码分离
M 	model 		模型：数据
V 	view 		视图：用户能看到的
C	controller 	控制：中介，隔离，牵线

耦合：	代表了两个模块的关联和依赖关系
耦合越低越好

MVC是分离代码的。但是做不到完全分离。


angular js
ng-app 		作用范围
ng-model 		数据源：数据从哪来
ng-bind 		数据到哪去
{{}}			数据到哪去
ng-repeat 		循环	item in arr
ng-init 		数据初始化
ng-controller 		控制


M		ng-model
V 		{{}}	ng-bind 	
C 		ng-controller

获取app
ng-app="index";
app = angular.module('index',[]);
app.controller('main',function($scope,$http){
	$scope.$watch('数据源',function(){});
	$http 	交互
	$http.get
	$http.post
	$http.jsonp
	例：
	$http.get(url,{params:{}}).success(fn).error(fn);
});

angulejs有作业：	把之前所有的交互的例子用angule写一遍

语言特性：
垃圾回收：生存周期
内存是有限的。如果没有垃圾回收的话，会造成：内存泄露。
局部 	很短		函数结束的时候，函数中的局部变量就没了。
全局	很长		页面关闭的时候消失。
闭包 	可长可短	如果这个变量还在使用，整条作用域链上的变量都不会消失
作用域链	子级找，找父级，父级的父级，父级的父级的父级，。。。全局

递归：		任何的大事都可以分化成小事
斐波那契数列——兔子数列
fn(n)=fn(n-1)+fn(n-2);

算过的东西要保存。

性能优化：
1.稳定
2.扩展
3.优化
0.1s 		0.00000001s

优化：
1.网络性能：
	F12 network 		需要经验
	YSLow 		学习

减少http请求
尽量合并雪碧图
合并文件
代码压缩
图片懒加载
script放在最后面，css放在最前面。
CDN


2.执行性能：
有用的
1.不适用全局变量
2.尽量不要用属性，要用变量
3.循环的length保存
4.少用for...in
5.尽量用正则
6.用系统提供的东西
没用的
var str = '';
str+='abc';
str+='bcd';
str+='cdf';

var arr = [];
arr.push('abc');
arr.push('bcd');
arr.push('cdf');
arr.join('');

=======================================

正则
正则表达式
规则表达式
为了方便
------------------------------------------------------------------
new RegExp('规则','选项');
/规则/选项;
-----------------------------------------------------------------
特性：
1.懒		
2.笨 		
3.贪婪 		


选项	img
	i 		Ignore 	忽略大小写
	m 		muti-line 	多行模式
	g 		global 		全局匹配
量词
{n}		n个
{n,m}		最少n个，最多m个
{n,} 		最少n个，最多不限
{1,} 		最少一个，最多不限
{0,1}		最少没有，最多一个，出现一次或不出现
{0,} 		最少没有，最多不限
? 		{0,1} 	最少没有，最多一个
+		{1,} 	最少一个，最多不限	
* 		{0,}	最少没有，最多不限	【不推荐】

修饰符
^ 		行首
$		行尾

方括号
1.或
[1234]		1或2或3或4
[1,2,3,4]	1或2或3或4或,
a[abc]c 
aac 	abc	acc
2.范围
[0-9]		0-9
[a-z]		a-z
[A-Z]		A-Z
[a-zA-Z0-9]	所有字母和所有数字
[16-89]		1或6-8或9
3.排除
[^a-z]		排除a-z
转义
\d		所有数字
\w		所有字母和数字_
\s 		所有空白
\D 		除了数字
\W		除了字母数字_
\S 		除了空白
.		匹配所有

如果想在页面输出一个\
\\

str.search(re);		查找
str.match(re);		匹配
re.test(str); 		校验
test在使用时必须加上^$

str.replace(字符串|正则,字符串|函数)

cookie	存东西
特性：
1.容量小		4kb
2.生命周期默认是session
3.不能跨浏览器
4.不安全
5.配合服务器环境使用
6.名字和值成对出现
7.path默认是当前文件的目录

form有问题:
1.刷新页面（覆盖页面），用户体验差，浪费钱
2.没办法从服务器取数据
ajax 	Asynchronous Javascript And XML
	(异步javascript和XML)
	无刷新从服务器取数据

写ajax的步骤
创建
get				post
打开 	发送			打开	设置请求头	发送
接收

不要完全相信接口,要自己试

jsonp
ajax不能跨域

seajs 		框架		模块化
作用：
1.不用手动引入一堆js
2.解决依赖关系


定义一个模块
define(function(require,exports,module){
	//require 		导入
	//exports 		导出一个模块
	//module 		批量导出模块
});

使用
seajs.use('模块的名字',function(mod){});

jquery 		库
$(function(){})		window.onload
$('#id')
$('.class');
$('tagName');
:lt
:gt
:first
:last
:odd
:even
:has
:contains

操作class
addClass
removeClass
操作属性
attr(sName);		获取
attr(sName,sValue);	设置一个
attr({sName:sValue});	批量设置
操作样式
css(sName); 		获取一个
css(sName,sValue); 	设置一个
css({sName:sValue}); 	批量设置
操作内容
html() 		获取
html('');	设置
val() 		获取
val('');		设置


运动
startMove(obj,iTarget);
startMove(obj,iTarget,time);
startMove(obj,sName,iTarget,time);
startMove(obj,json,time);
startMove(obj,json,time,fnEnd);
startMove(obj,json,time,type,fnEnd);
startMove(obj,json,option);

doMove

运动核心：
dis = iTarget-start;
count = Math.floor(time/30);
var n =0;

匀速
start+dis*n/count;
加速
var a = n/count;
start+dis*Math.pow(a,3);
减速
var a = 1-n/count;
start+dis*(1-Math.pow(a,3));

=======================================
事件
事件对象 		保存了事件的详细信息
var oEvent = ev||event;
oEvent.clientX
oEvent.clientY
oEvent.keyCode
oEvent.ctrlKey,shiftKey,altKey
oEvent.cancelBubble
oEvent.srcElement 		事件委托
oEvent.target			事件委托
oEvent.toElement 		
oEvent.fromElement
oEvent.relatedTarget
oEvent.preventDefault();	事件绑定中的取消默认事件
oEvent.wheelDelta 		
oEvent.detail			
oEvent.readState		domready
oEvent.pageX			
oEvent.pageY			

事件
事件冒泡
	oEvent.cancelBubble=true;
事件绑定
obj.addEventListener(sEv,fn,false);
obj.removeEventListener(sEv,fn,false);
obj.attachEvent('on'+sEv,fn);
obj.detachEvent('on'+sEv,fn);
	false 	冒泡
	true 	捕获
事件捕获
obj.setCapture	不兼容
obj.setCapture&&obj.setCapture();
obj.releaseCapture&&obj.releaseCapture();

事件委托
oEvent.srcElement||oEvent.target;


DOMReady
onreadystatechange
DOMContentLoaded


this哪有问题？
定时器中使用this
套了一层使用this
行间事件套了一层
attachEvent中


onload
onerror
onclick
ondblclick
onmouseover
onmouseout
onmousedown
onmousemove
onmouseup
onfocus
onblur
onkeydown
onkeyup
onchange
onresize
onscroll
onreadystatechange
DOMContentLoaded
onpropertychange
oninput
onmouseenter
onmouseleave
onsubmit
oncontextmenu
DOMMouseScroll
onmousewheel


js组成部分
ECMAScript 		 核心解释器
DOM 			文档对象模型
BOM 			浏览器对象模型

DOM
-------------------------------------------------------
获取子元素
childNodes	获取子节点，包括文本节点
	nodeType 	检测
	3 		文本节点
	1 		标签节点
	
children	获取子节点只包括第一层

获取父节点 	parentNode 	offsetParent
结构 	parentNode 	document
定位	offsetParent	body


上一个兄弟节点
previousElementSibling||previousSibling
下一个兄弟节点
nextElementSibling||nextSibling

首尾子节点
firstElementChild||firstChild
lastElementChild||lastChild

物体信息
offsetLeft
offsetTop
offsetWidth 		
offsetHeight

创建元素
document.createElement
插入元素
insertBefore(要，谁);
appendChild(要);
删除元素
obj.removeChild();

克隆
obj.cloneNode(true)		深度克隆
obj.removeAttribute('id');

body		document.body
html 		document.documentElement
document 	document

obj.scrollHeight 		元素内容高度

document.documentElement.scrollTop||document.body.scrollTop

document.documentElement.clientWidth

tagName 		节点名字全是大写

操作属性
.
[]
attribute
setAttribute
getAttribute
removeAttribute

BOM
window.open
window.close
window.location
window.location.pathName
window.location.host
window.location.hash
window.location.search
window.location.href
window.location.reload();

window.navigator.userAgent

语言特性
预解析
把所有的声明提到顶部
但是不会影响作用域
引用
只有对象有
逗号表达式
听后面的
var a = (12,5)		优先级
alert((1,5))		传参

赋值表达式
var a = b = c = d = 5;
严格模式
'use strict';	推荐在每个js文件上加上
文件中		必须在第一行
script中	必须是第一行
函数中		必须是第一行

解决了：
	this
	不加var声明变量
	with
	if，forswitch，for。。in。。while中定义函数

不兼容：不兼容IE8-

------------------------------------------------------
angularjs 		交互所有例子
面向对象		从简单开始写例子












