笔记
------------------------------------------------------- 
getPos 		绝对位置
function getPos(obj){
	var l=0;
	var t = 0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}

图片延迟加载（懒加载）
你看的东西加载，不看的不加载。
节约资源，带宽，流量。		用户体验.钱

操作属性
obj.getAttribute('属性名'); 	获取属性。
Attribute	属性
obj.setAttribute('属性名','属性值');	设置属性.
成对出现

瀑布流
每块的高度不同
最后每列的高度都差不多。

每次往高度最小的里面加东西。

获取内容高度：obj.scrollHeight;
当内容高度没超过height时，值是height。如果超过height，就是内容的高度

children
getElementsByTagName
getElementsByClassName
系统提供的获取一组元素
获取出来的，不是真正意义上的数组,用不了数组的常用方法。


吸顶条

文字提示:
事件
获取焦点事件
onfocus
失去焦点事件
onblur

函数
获取焦点函数
.focus()		让一个元素获取焦点
.blur() 			让一个元素失去焦点

图片对象
new Image() 		创建一个图片对象
这个东西跟在html中手写的img标签一模一样。

img.onload		当图片加载成功触发这个事件。
img.onerror 		当图片加载失败触发这个事件。

网络进度条
http://www.zhinengshe.com/works/3525/img/0.jpg
------
http://www.zhinengshe.com/works/3525/img/76.jpg


可变的/总共的

所有的语言，都不适合处理小数。
.toFixed(位数)	保留几位小数

表格
oTab.tBodies 		获取一组tbody
oTbody.rows 		获取一组tr
oTr.cells 		获取一组td


appendChild和insertBefore
有剪切功能。	

作业
===================================
1. 图片延迟加载(懒加载)
2. 图片预加载(进度条)
3. 瀑布流  ->  6列
4. 文字提示框  -> textTip(obj);
5. 吸顶条  -> tieba






