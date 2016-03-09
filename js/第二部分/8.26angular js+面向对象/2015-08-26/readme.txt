笔记
MVC
M 	model 		模型：数据
V 	view 		视图：用户能看到的地方
C 	controller 	控制层：中介，隔离，牵线

angular js
---------------------------------------------------------
ng-model 		数据源
ng-bind 		数去去哪儿
ng-app 		范围


********angular js中数据是最重要的*********

双向绑定


单向绑定



angularjs
ng环境
js环境
ng环境和js环境不通用
ng环境的东西js环境用不了。
js环境的东西ng环境用不了。

ng-click 		angularjs 	点击

ng-init 	初始化

ng-repeat="item in arr"

=============================
1.ng-init 		太乱
2.js和ng不互通		蛋疼
3.angularjs 	ajax，jsonp
=============================
M 	ng-module
V 	{{}}
C	controller

controller 	
作用：
1.把init放到外面。
2.js和ng打通
3.ajax,jsonp


百度下拉
https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=JSON_CALLBACK

angular.js	
jsonp的回调函数名字必须用JSON_CALLBACK

==========================================
Angular JS 		不兼容低版本IE浏览器。
我相兼容怎么办？不好意思。不行。

MVC 		代码分离

M	模型：数据层
V 	视图：用户能看到的
C	控制层：中介，隔离，牵线

*数据层和表现层分离。
M		交互	ajax,jsonp.....
V		给用户看的东西
C `		中介

MVC只是一种特殊的组织代码的方式
好处：干净，整洁。减少耦合度。
耦合度越低越好。

工作当中，一般不会自己写MVC。
1.对程序员的要求非常高。不是所有人都会写。
2.写法不一定统一。

使用框架
Angular JS

Angular JS
1.2
1.3 		推荐

ng-app='index';

M	ng-model
V	{{}}
C 	

app = angular.module('index',[]);
app.controller('main',function($scope){
});

ng-controller="main"

ng-repeat		循环
	item in arr



监控
$scope.$watch('',function(){});

$http		交互用
$http.get
$http.post
$http.jsonp

$http.get(url,params).success(fn).error(fn);


库	
	帮助程序员开发	比较灵活
	程序员主导
框架	
	限制程序员开发	不
灵活
	框架主导

====================================
面向对象——————你会用，但是你不知道怎么回事

对象	电视机壳子，上面一堆按钮。你会用但是不知道为什么能用。
====================================
面向对象怎么来的？
数组，函数，Date  
为了方便程序员的开发。降低难度


关于对象有两种人。
写对象：￥￥￥￥￥
用对象：舒服

要求大家会写对象。

js中的对象里只有两个东西:
属性和方法

变量和属性	变量和属性就是一个东西，只是有两个叫法	
		属性是属于某个对象的

函数和方法	函数和方法就是一个东西，只是有两个叫法
		方法是属于某个对象的

========================
this		方法是哪个对象的，this就是谁。

用数组当对象并不太好。
1.有可能会冲突
2.性能不好。

//希望找到一个空的对象
var obj = new Object();		基本上是一个空白的对象

关于new
所有的函数都可以new出来。
如果函数使用了new:
系统会自动的帮你
this = new Object();
系统会自动的绑定
return this;


new的作用：
1.自动帮你加上this = new Object();
2.自动帮你return this;

================================
.box{background:red;}
<div class ="box" style="background:red;"></div>
<div class ="box"></div>
<div class ="box"></div>
<div class ="box"></div>





工厂
	原料
	加工
	产品


===================================
在写对象的时候
属性给每一个加
方法给原型加

========================================
类	一类东西	Array 		Date
对象	某一个东西 	var arr = [];	var oDate =new Date();

上课的代码写。













