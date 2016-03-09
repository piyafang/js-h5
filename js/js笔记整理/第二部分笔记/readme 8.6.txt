笔记
==========================
相对月份。
iNow = 0;
oDate.setMonth(oDate.getMonth()+iNow,1);
iNow--
oDate.setMonth(oDate.getMonth()-1,1);
iNow--
oDate.setMonth(oDate.getMonth()-2,1);
iNow++
oDate.setMonth(oDate.getMonth()+1,1);
iNow++
oDate.setMonth(oDate.getMonth()+2,1);

事件		event
ondblclick 		双击事件。

事件对象 	包含了事件的详细信息。
ev参数 		事件对象	兼容高版本浏览器
event 		事件对象	兼容Chrome和IE系列
var oEvent = ev||event;

**只能获取到鼠标和键盘的操作。


获取鼠标在可视区中的坐标
事件对象.clientX;		获取可视区中X轴坐标
事件对象.clientY;		获取可视区中Y轴坐标

**以后只要是操作clientX和clientY就加上滚动距离。

onmousemove 		鼠标移动事件
注意：触发的特别频繁。所以里面别放复杂代码。



事件冒泡。
子级会去找父级相同的事件执行。
就算当前元素没什么没有这个事件，也会往上冒。
冒泡跟结构有关。

取消事件冒泡:
oEvent.cancelBubble=true;
**如果没有问题不要取消冒泡。

事件对象：	包含了事件的详细信息
var oEvent = ev||event;

oEvent.clientX	鼠标在可视区中的X轴坐标.
oEvent.clientY	鼠标在可视区中的Y轴坐标.
oEvent.cancelBubble=true 	取消事件冒泡.



可变的/总共的
?=l/(oS.offsetWidth-oM.offsetWidth)*(oImg.offsetWidth-oB.offsetWidth)


键盘的事件
onkeydown		当键盘按下时触发
onkeyup		当键盘抬起时触发

如何知道按下的是哪个按键？
每个按键都有编码。
oEvent.keyCode 		获取键盘编码
a 	65
b 	66
c 	67
1	49
2 	50

回删		8
回车 		13
shift 		16
ctrl		17
alt 		18
空格		32
del 		46

←	37
↑	38
→	39
↓	40
键盘控制移动不卡？待解决！

js不能使用组合按键的编码。
oEvent.ctrlKey		当ctrl按下时是true
oEvent.shiftKey		当shift按下时是true
oEvent.altKey 		当alt按下时是true
右键菜单事件
oncontextmenu
上下文菜单



浏览器自带的一些功能是默认事件
阻止默认事件: return false;

window.location.reload();		刷新页面



作业：
1. 键盘控制div移动
	不卡
	ctrl+↑  中间变大
	ctrl+↓  中间变下
	ctrl+1   变成红色
	ctrl+2   变成蓝色
	ctrl+enter  回到原始
2. 只能输入数字，排除删除键
3. 放大镜
4. 键盘控制选项卡
5. 右键各种操作









