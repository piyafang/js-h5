笔记
onmousewheel 		兼容IE，chrome
DOMMouseScroll		兼容firefox
DOM事件
1.以DOM开头。
2.只能使用事件绑定。

 事件
onclick
ondblclick
onmouseover
onmouseout
onmousedown
onmousemove
onmouseup
onkeydown
onkeyup
onchang
onresize
onscorll
onfocus
onblur
oncontextmenu
onpropertychange
oninput
onload
onerror
onscrollwheel
DOMMouseScroll

事件对象
包含了事件的详细信息
var oEvent = ev||event;

oEvent
oEvent.clientX
oEvent.clientY
oEvent.keyCode
oEvent.ctrlKey
oEvent.shiftKey
oEvent.altKey
oEvent.cancelBubble
oEvent.preventDefault
oEvent.wheelDelta
oEvent.detail






事件委托:
1.提高性能
2.给未来元素加事件
事件源
oEvent.srcElement 	兼容ie，chrome
oEvent.target 		兼容高版本浏览器
兼容写法:oEvent.srcElement||oEvent.target;



onmouseover和onmouseout的bug
移出到哪的元素
oEvent.toElement 		兼容IE，chrome
oEvent.relatedTarget 		兼容ff

希望好使
div->		body
h2->		html

希望不好使
h2->div 	div
div->h2 	h2
onmouseout
var oTo = oEvent.toElement||Event.relatedTarget;
onmouseover
var oFrom = oEvent.fromElement||Event.relatedTarget;


包含(不是事件的，是DOM的)
obj.contains(obj2);		obj是否包含obj2

没有over和out的bug		不推荐
onmouseenter		移入
onmouseleave		移出

页面加载之后执行
window.onload		
html,css,js,图片,flash..........所有的资源加载完成才执行

DOMReady
html,css,js
更灵活
DOMContentLoaded		高版本浏览器使用
addEventListener
onreadystatechange		低版本浏览器使用
attachEvent
获取状态
obj.readyState
interactive
complete
if(obj.readyState=='complete'){
	
}


================================
事件 
事件对象 		var oEvent = ev||event;

默认事件
return false;  遇到绑定(addEventListener)不好使要用
oEvent.preventDefault&&oEvent.preventDefault();
事件捕获
obj.setCapture&&obj.setCapture()
obj.releaseCapture&&obj.releaseCapture();
事件绑定
obj.addEventListener(sEv,fn,false);
obj.removeEventListener(sEv,fn,false);
obj.attachEvent('on'+sEv,fn);
obj.detachEvent('on'+sEv,fn);

冒泡阶段
从下往上找，相同的事件执行。本身没有事件也会往上找。
	阻止:oEvent.cancelBubble=true;
捕获阶段
从上往下找，相同的事件执行。本身没有事件也会往上找。
	addEventListener(sEv,fn,true)触发。
事件委托
oEvent.srcElement||oEvent.target;
over/out的bug
oEvent.fromElement||oEvent.relatedTarget;
oEvent.toElement||oEvent.relatedTarget;


使用的时候一定要加scrollTop||scrollLeft
oEvent.clientX 		鼠标在可视区中的x坐标
oEvent.clientY 		鼠标在可视区中的y坐标


兼容高版本浏览器。
oEvent.pageX		鼠标在页面中的x坐标
oEvent.pageY		鼠标在页面中的y坐标


document.documentElement 		html
document.body 			body
document 				document



运动。		
var start = 起始位置;
var iTarget = 目标点;
var dis = iTarget-start;
var time = 总时间
var count = time/30;	总次数

dis/count;	一次走多远
n*dis/count;	当前走了多远
n*10;
1 	10
2	20
3	30
4	40
5	50
6	60
7	70
运动框架
1.startMove(obj,iTarget,time);


jiathis


做运动时：
先把静态的做好。
再加运动。

offsetWidth 		盒子模型的宽度
202

width = 201;
201
offsetWidth   203
width=202;
202
offsetWidth 204
width = 203;
203
offsetWidth 205

2.startMove(obj,sName,iTarget,time);

3.startMove(obj,sName,iTarget,time);
***(多物体运动)每个元素都给自己加timer

小练习：
必做:
3D立体效果  -> 视差滚动原理
论坛 鼠标控制图片放大缩小
自定义滚动条
点击页面任何a标签弹true（事件委托）
放大镜（解决之后）
日历（无bug）
===========
选做：
拖拽
九宫格拖拽
拖拽回放
键盘控制移动（不卡）
简易留言板
瀑布流
懒加载
进度条（网络进度条）










