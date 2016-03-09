笔记
九宫格拖拽
var oldH = oBox.offsetHeight;
var oldW = oBox.offsetWidth;
var oldT = oBox.offsetTop;
var oldL = oBox.offsetLeft;
var oldY = oEvent.clientY;
var oldX = oEvent.clientX;

自定义滚动条
---------------------------------------------------


鼠标滚轮事件
obj.onmousewheel 	滚动鼠标滚轮时触发。
兼容：chrome    ie

DOMMouseScroll 	滚动鼠标滚轮时触发。
兼容：Firefox

DOM事件.
1.以DOM开头
2.只能使用事件绑定。

鼠标滚轮的方向		
oEvent.wheelDelta		兼容：chrome，ie
		下		-120
		上		120
oEvent.detail 			兼容：FF
		下		3
		上		-3


return false;		遇到了事件绑定就失效了。
oEvent.preventDefault() 	阻止默认事件	兼容高版本浏览器
oEvent.preventDefault&&oEvent.preventDefault();
当return false遇到了事件绑定失效时使用。







作业:
1.自定义滚动条------所有例子。



























