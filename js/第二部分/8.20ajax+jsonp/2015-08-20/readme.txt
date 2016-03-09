笔记
===================================
交互
form有缺点
1.刷新，用户体验差，浪费钱
2.无法从服务器获取数据

ajax 		异步javascript和XML
	无刷新从服务器取数据
	ajax(地址,成功回调函数，失败回调函数)
特性：
1.缓存 		cache
	同一地址只访问一次。
	http://www.baidu.com?t=Math.random();
	http://www.baidu.com?t=new Date().getTime();
2.所有的东西都是字符串
	必须eval('('+str+')');
3.编码问题
	必须保持编码一致，推荐UTF-8
4.不关心后缀名。

自己写ajax
=================================
打电话
1.盗个手机
2.拨号()
3.说话
4.听一下

自己写
new Date()
new Image()
new Option()

========================
1.创建一个ajax对象
	var oAjax = new XMLHttpRequest();兼容非IE6
	var oAjax = new ActiveXObject('Microsoft.XMLHTTP'); 	兼容IE6

***报错的东西不能当做条件去判断，但是假的可以判断

***当访问一个不存在的变量时，会报错。但是当访问一个不存在的属性时，会undefined

2.打开连接
oAjax.open(提交的方式,地址,是否异步);
	GET
	POST
	第三个参数要给true，因为是异步的。

	
	同步 	一起做多件事 			ajax异步
	异步	做完一件事才能做另一件事 	ajax同步
3.发送
oAjax.send();
4.接收
oAjax.onreadystatechange=function(){
	if(oAjax.readyState==4){
	if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
		成功
		oAjax.responseText
	}else{
		失败
		oAjax.status
	}
	}
}


状态码
0 	准备成功（未发送）
1	发送成功
2	接收原始数据完成
3	解析，编译完成
4	完成

oAjax.status 		
HTTP状态码
>=200		<300
==304
都是成功的



1.创建
2.打开
3.发送
4.接收



***接口后台提供的。

接口
a.txt
user.php?act=add


转码
encodeURIComponent(字符串);
解码
decodeURIComponent(字符串);

**前端用不着解码

get.php?t=0.1122323232&a=12&b=5

url			get.php
data			t=0.1122323232&a=12&b=5




数据
	{a:1,b:2,c:3}
	a=1&b=2&c=3


载体：
	GET
	oAjax.open('GET',url+'?'+data,true);
	oAjax.send();
	POST
	oAjax.open('POST',url,true);
	//设置请求头
	oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	oAjax.send(data);

封装：
方便性
通用性

做交互时，一切的时间都要用服务器给的。

命名
顶	acc
踩 	ref

*不是后台给的就一定对。

ajax	有一个致命的缺陷。
不能跨域.
http://www.a.com	在a这个域名去取b这个域名的东西
http://www.b.com

为什么要跨域:
1.
	http://www.jd.com
	http://360buy.com
2.第三方登录

jsonp 		json with padding
通过jsonp跨域

接口：
https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=show
	wd 		搜索的内容
	cb 		callback 	回调函数

script标签是一次性的。

jsonp注意：
先拿到接口
放到浏览器里测试一下。
百度
https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=show
好搜
http://sug.so.360.cn/suggest?callback=show2&word=x
中搜
http://tip.zhongsou.com/ctip?callback=show3&w=a
盘古搜索
http://www.chinaso.com/search/suggest?callback=show4&k=a





jsonp 	函数一定要是全局的。


https://www.baidu.com/s?wd=aa

作业
ajax:
ajax.js
上课的例子。
许愿墙		myWish
qqList 		腾讯书城

jsonp:
大搜索
百度搜索下拉
















