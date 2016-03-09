笔记
语言特性：
	预解析：把变量和函数的声明提到顶部，但是不会突破作用域，也不会突破script标签
	引用：对象object
	比较：对象object
	字符串：
		获取字符编码
			charCodeAt()
		通过编码转字符
			String.fromCharCode()
		汉字的范围：
			4e00-9fa5
			19968-40869
			0x把十六进制转成十进制
 			
			1GB=1024MB
			1MB=1024KB
			1KB=1024字节
			数字占多大位置
			数字		1字节
			英文字母	1字节
			汉字 		
				UTF-8		3字节
				GB2312 	2字节

	逗号表达式：
		听逗号后面的。
		赋值：逗号优先级比较低要用括号提高优先级
		alert：因为是函数调用传参所以用括号把逗号表达式扩起来。
	变量：
		如果声明时没有var，会变成全局变量。
		所有的全局的都是window的。
严格模式
为了让我们写的js语句更加规范。
'use strict';

==================================
javascript 		
是由什么东西组成？
ECMAScript		核心解释器
提供最基本的功能。比如:12+5  var a = 12; function show(){}
兼容性：完全兼容。


DOM 	文档对象模型 	Document Object Model
就是document		操作页面的。
获取元素,修改样式,创建元素
兼容性：很好，有不兼容的，但是可以解决。

BOM	浏览器对象模型 	Browser Object Model
就是window	操作浏览器
window.onload
window.alert();
兼容性：基本不兼容，解决不了。

DOM	
DOM树:文档的结构
document
	html
		head
			meta
			title
			style
			script
			.....
		body
			div
				..
					..
						..
			p
			span
			ul
				li
			ol	
				li
标签=元素=节点
obj.tagName 		获取节点的名字
(所有的字母都是大写的。)
DOM结构
获取父节点(获取他爹)
	obj.parentNode
	最大的祖宗是document，在往上就是null
获取子节点
	childNodes	获取子节点，包括文本节点
		节点类型：
			文本节点
			标签节点
		检测节点的类型：
		nodeType:
			3 	文本节点
			1 	标签节点

	children	获取子节点(只包括第一层)
		只包括它的儿女，不包括它的孙子，孙女

获取上一个兄弟节点
obj.previousElementSibling 	兼容：高版本浏览器
obj.previousSibling		兼容：ie6,7,8 
兼容写法
obj.previousElementSibling||obj.previousSibling;

计算机特别的会偷懒。
true&&alert(1);
&&如果两个都是真的，才是真的。如果第一个是假的，后面的不执行。
var a = 12||5
||有一个是真的，就是真的。如果第一个是假的才会执行后面的，如果第一个是真的，后面的就不执行。

获取下一个兄弟节点
obj.nextElementSibling 	兼容：高版本浏览器
obj.nextSibling		兼容：ie6,7,8 
兼容写法
obj.nextElementSibling||obj.nextSibling;







获取首尾子节点
首子节点
父级.firstElementChild	兼容高版本浏览器
父级.firstChild 		兼容ie6,7,8
兼容写法
父级.firstElementChild||父级.firstChild
尾子节点
父级.lastElementChild	兼容高版本浏览器
父级.lastChild 		兼容ie6,7,8
兼容写法
父级.lastElementChild||父级.lastChild
获取首尾子节点没用。太麻烦
首子节点
obj.children[0];
尾子节点
obj.children[obj.children.length-1];
盒子模型：
width/height+padding*2+border*2

物体信息
obj.offsetWidth	获取盒子模型的宽度
obj.offsetHeight 	获取盒子模型的高度
obj.offsetLeft 		获取元素距离定位父级左边距。
obj.offsetTop 		获取元素距离定位父级上边距
没有offsetRight/offsetBottom
obj.offsetParent 	获取定位父级



	getStyle 		物体信息
值 	string			number
width 	纯width 		盒子模型的宽度





获取元素
结构：parentNode 	document
定位：offsetParent 	body

创建元素
document.createElement('标签名')
什么标签都能创建
**你创建出来的标签，跟html中手写的标签一模一样，没有任何区别。
添加元素
	父级.appendChild(新创建的对象);
	在父级的最后面添加了一个元素
	父级.insertBefore(要插入的元素,插入到谁之前);
	把一个元素插入到另一个元素之前
删除元素
父级.removeChild(要删除的对象);



每个li里面都加一个a标签，每个a标签都加上点击事件，删除li。
在页面加载之后先获取所有的写死的a，加点击事件，删除li.

克隆元素
obj.cloneNode()
obj.cloneNode(true) 		深度克隆元素,包括内容一起克隆
*注意：id也会被一起克隆。
*小贴士：以后每次使用克隆的时候都要把id去掉

=============================
作业：
模拟留言板
百度新闻-生成列表
bing-我的导航
hao123-添加、删除、修改导航
























