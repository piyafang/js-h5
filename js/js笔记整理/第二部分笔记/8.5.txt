笔记
5. 吸顶条  -> tieba


组件 	方便。把一些比较复杂的业务或功能封装起来了。你直接就可以使用。

两种人：
用组件的人：	舒服 	简单，快捷。
写组件的人： 	更舒服	牛X,$$$

form 		表单,提交数据
必不可少
action 		提交地址	
	加协议		网络上找
	不加协议	本地上找
submit 	提交按钮
元素的name

method 		提交方式
GET(默认)	
		明文提交
		不安全
		容量小（32KB左右）
		有缓存

POST	
		密文提交
		相对安全
		容量大（1GB左右）
		没缓存

想要安全使用：
	https协议	超安全超文本传输协议
		一般人用不了，收费，很贵。
	http协议	超文本传输协议

GET有用吗？
便于分享。速度快 。

自定义单选框：
原生的：	不好看，有功能。
自定义：	好看，没有功能。

自定义单选框：	好看，有功能。

document.getElementsByName	
通过name获取一组元素
完全兼容

自定义单选框
自定义多选框
自定义下拉框
业务逻辑都是一样的。
书写的步骤也是一样。


日历
相对月份
iNow = 0
oDate.setMonth(oDate.getMonth()+iNow,1);
上一个月
-1
oDate.setMonth(oDate.getMonth()-1,1);
-2
oDate.setMonth(oDate.getMonth()-2,1);
-3
oDate.setMonth(oDate.getMonth()-3,1);
下一个月
1
oDate.setMonth(oDate.getMonth()+1,1);
2
oDate.setMonth(oDate.getMonth()+2,1);
3
oDate.setMonth(oDate.getMonth()+3,1);

下拉框组件有bug。点击空白的地方要消失。待解决。
日历有bug。点击空白的地方要消失。待解决。


作业：
1.自定义单选框
2.自定义多选框
3.自定义下拉框
4.日历








