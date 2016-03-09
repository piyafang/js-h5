笔记
服务器 		电脑
基本的功能：存东西
web服务器：响应浏览器请求
cookie		存东西
1.只能通过域名方式使用
2.容量小，4KB
3.不能跨浏览器
4.生命周期默认是session
5.不安全
6.名字和值成对出现
7.名字是唯一的
8.默认的path是当前的文件目录。
addCookie
removeCookie
getCookie

seajs 		国内的
requirejs	外国的
用法一模一样。
5分钟上手。
模块化
*一个js就是一个模块。		一个模块就是一个功能
定义一个模块
define(function(require,exports,module){
	//require 		引入一个模块
	//exports 		导出一个模块
	//module 		批量导出模块
});
使用
seajs.use('名字',function(mod){
});
配置模块，给模块起名字
seajs.config({
	alias:{
		'别名':'路径文件名'
	}
});

jquery
获取元素
操作css
操作属性
操作class
操作内容
DOM
事件
循环
jquery对象原生对象

获取可视区的宽高?

find

jquery 		扩展性很强
如何自己写插件
$.fn.XXX =function(){}		定义插件
**jquery中所有的this都是原生对象，但是有例外。
插件中this是jquery对象

批量写插件
$.fn.extend({
	插件1:function(){},
	插件2:function(){},
	.......
});

seajs

====================================
交互:
前端工程师分两种:
切图+js 	难 		8-15
交互 		简单 		8-20+
================================
什么是交互？
玩的数据.
12
[12,5,3]
{a:'张三',age:18}
https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=fdsfsd&rsv_pq=940cbd0700009cc2&rsv_t=1d09eGoxkJ1wVsgUI3xfv0qyp4BKEfsDBplRhj9nvCPSg%2FRrhypSDMK1YCs&rsv_enter=0&rsv_sug3=7&rsv_sug1=4&inputT=955&rsv_sug4=1049

服务器：	电脑
基本功能：存东西
web服务器：响应浏览器（客户端）请求

1.form		向服务器提交数据
	action 		提交地址
	name 和value 	
	submit

method
	GET 	:
			能看到，不安全，容量小（32KB），有缓存
	POST	:
			看不到，相对安全，容量大（2GB），没有缓存
	
缓存：cache.同一网址浏览器只会访问一次。
	GET: 	分享

逐步的退出了历史的舞台。因为有缺点：
1.刷新页面(覆盖页面),用户体验不好,浪费钱
2.从服务器获取一个数据
=================================
ajax 	Asynchronous Javascript And XML
	异步的javascript和XML
	无刷新从服务器取数据
ajax 	很难
	用
	
	//ajax(地址, 成功回调函数, 失败回调函数)
js文件
move.js
addWheel.js

回调函数
是一个函数,你只负责声明，不关心调用
oBtn.onclick=function(){
}
addWheel(obj,function(bDown){

});

使用ajax注意：
1.cache缓存
	http://www.a.com?t=0
	http://www.a.com?t=1
	http://www.a.com?t=2
	http://www.a.com?t=3

推荐	http://www.a.com?t=Math.random();加随机数
	http://www.a.com?t=new Date().getTime();
2.	ajax拿回来的都是字符串

Uncaught SyntaxError: Unexpected token :
			数据有问题
		eval危险	不让用;		推荐
		new Function('return {a:1,b:2};');
		new Function 更危险
		
		eval();
	写ajax交互，必须eval('('+str+')')

3.乱码。
	因为：文件编码格式不一致
	文件编码一定要统一：
		推荐用UTF-8
4.不关心后缀名
 	后缀名给人看的。计算机不关心后缀名
====================================
1.缓存
2.eval
3.编码
4.不关心后缀名
====================================
新浪换一换
	能力：造假数据

***必须一定先获取数据，在做你的功能。
只要拿到数据。交互就完成了。
===================================
作业:
交互：
造假数据和难的是DOM
百度百科
百度新闻






















