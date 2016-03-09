笔记
=====================================
js干什么的？
修改css样式操作属性

.style 		行间样式
.className	class

操作属性
. 		操作已有的属性
[] 		点能做的方括号都能做，方括号中放字符串，方括号中还能放变量，点不能。
attribute	操作自定义属性
		成对出现

获取元素
document.getElementById 		通过id获取一个
document.getElementsByName 	通过name获取一组
obj.getElementsByTagName 		通过标签名获取一组
obj.getElementsByClassName 		通过class获取一组

变量	 	存东西的容器,别名。
var 变量名=变量值;

函数的两个阶段
1.定义
	告诉浏览器有这个函数，但是不执行
2.调用
	执行这个函数

什么时候使用传参?
当函数内容可变时，使用传参


函数
function 函数名(参数){
	return
}

return返回值：
1.阻断后面的程序执行
2.没有return，返回undefined
3.有return，没有值，也返回undefined

if判断
if 			条件&&语句
if...else			条件?语句1:语句2;
if..else...if...else		

循环
=====================================
for
for(初始值;条件;自增){
	语句
}
while
while(条件){
	语句
	自增
}

for...in...

for(var i in json){
	i		//i====json中的名字 
	json[i]		//i====json中的值
}

什么是流程控制语句?
if
switch




获取非行间样式
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}

数据类型:
string 		字符串
number 	数字
boolean	布尔值
undefined 	未定义
object 		对象
function 	函数

字符串-》数字
1.parseInt		转整数
2.parseFloat		转小数
3.Number		转数字，更严格

转换失败有：NaN
not a number
是number类型

NaN不等于任何东西，包括自己

isNaN(）	检测NaN


当参数个数不固定时
arguments 	实参数组

json	相当于把一堆变量打了个包。
var json = {a:1,b:2,c:3};
里面什么都能存。

使用for。。。in。。。。循环
没有length
下标是name

数组常用方法
arr.push 		后面添加
arr.pop		后面删除
arr.shift		前面删除
arr.unshift		前面添加
arr.splice 		删除，插入，替换
arr.splice(开始位置,长度)
arr.splice(开始位置,0,要插入的东西);
arr.splice(开始位置,长度,插入的东西);
arr.join		数组转字符串
arr.sort 		排序
arr.reverse 		反转
arr.concat 		连接

Math的常用方法
Math.random()		随机数
Math.pow();			n次方
Math.abs();			绝对值
Math.round(); 			四舍五入
Math.floor(); 			向下取整
Math.sqrt(); 			开方
Math.ceil(); 			向上取整
Math.max(); 			最大值
Math.min();			最小值
Math.sin();			
Math.cos(); 			
Math.atan2();



字符串的常用方法
str.charAt
str.indexOf
str.lastIndexOf
str.substring
str.split
str.toLowerCase
str.toUpperCase
str.charCodeAt
String.fromCharCode
str.replace





照片墙
布局转换
每个加拖拽
拖拽的时候找最近的
抬起的时候交换位置







































