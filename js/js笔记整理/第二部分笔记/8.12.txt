笔记
3D立体效果  -> 视差滚动原理
论坛 鼠标控制图片放大缩小

=================================
运动
1.startMove(obj,iTarget,time);
2.startMove(obj,sName,iTarget,time);
3.startMove(obj,sName,iTarget,time);//每个元素加timer
4.startMove(obj,sName,iTarget,time);//加上opacity
5.startMove(obj,json,time);	改多个样式，把sName和iTarget合并成一个json

匀速运动（线性运动）
	最简单，最丑
0.1
0.2	0.1
0.3	0.1
0.4	0.1
0.5	0.1
0.6	0.1
0.7	0.1
0.8	0.1
0.9	0.1
1	0.1

加速
var a = n/count;
dis*Math.pow(a,3)
0.001
0.008		0.007
0.027		0.019
0.064		0.037
0.125		0.061
0.216		0.091
0.342 		0.126
0.512 		0.170
0.729		0.217
1 		0.271




减速运动
var a = 1-n/count;
dis*(1-Math.pow(a,3));
0.270
0.487
0.657
0.784
0.875
0.935
0.973
0.992
0.999
1


6.startMove(obj,json,type,time);//加上运动类型，加速，减速，匀速

匀速	linear
var cur = start[name]+dis[name]*n/count;
加速 	ease-in
var a = n/count;
var cur = start[name]+dis[name]*Math.pow(a,3);
减速	ease-out
var a = 1-n/count;
var cur = start[name]+dis[name]*(1-Math.pow(a,3));

链式运动
7.startMove(obj,json,type,time,fnEnd);//链式运动
8.startMove(obj,json,options)//合并参数

9.startMove(obj.json.options);//给了默认值

运动框架不是万能的。
===================================
运动的核心:
var dis = iTarget-start;
var count = Math.floor(time/30);
var cur = start+dis*n/count;
数字运动

回到顶部
//区分是用户滚动的，还是js滚动的。
想要优先听用户的。


===============================
小练习：
1. 运动框架	全版本
2. 轮播图 四个方向
3. 手风琴
4. 百度贴吧时钟 带动的
5. 多图片展示 从中心放大
6. 回到顶部
7. 输入框里面的数字跑到100
8. 拉钩网幻灯 | 京东选项卡























