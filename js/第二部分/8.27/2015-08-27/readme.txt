�ʼ�
==========================================
������󡪡�֪����ô�ã����ǲ�֪������ô���¡�

��		ĳһ�ණ��
����		ĳһ������

����new���ã�
1.�Զ�����	this = new Object();
2.�Զ�����	return this;

����this
1.���ȼ�
2.ֻ�����һ�ε���
3.ֻ��һ��


���ȼ�:
��	new 		object
	��ʱ��		window
	�¼�		�����¼���Ԫ��
	����		���������ĸ�����
	����		window/undefined



MVC 		�������
M 	model 		ģ�ͣ�����
V 	view 		��ͼ���û��ܿ�����
C	controller 	���ƣ��н飬���룬ǣ��

��ϣ�	����������ģ��Ĺ�����������ϵ
���Խ��Խ��

MVC�Ƿ������ġ�������������ȫ���롣


angular js
ng-app 		���÷�Χ
ng-model 		����Դ�����ݴ�����
ng-bind 		���ݵ���ȥ
{{}}			���ݵ���ȥ
ng-repeat 		ѭ��	item in arr
ng-init 		���ݳ�ʼ��
ng-controller 		����


M		ng-model
V 		{{}}	ng-bind 	
C 		ng-controller

��ȡapp
ng-app="index";
app = angular.module('index',[]);
app.controller('main',function($scope,$http){
	$scope.$watch('����Դ',function(){});
	$http 	����
	$http.get
	$http.post
	$http.jsonp
	����
	$http.get(url,{params:{}}).success(fn).error(fn);
});

angulejs����ҵ��	��֮ǰ���еĽ�����������anguleдһ��

�������ԣ�
�������գ���������
�ڴ������޵ġ����û���������յĻ�������ɣ��ڴ�й¶��
�ֲ� 	�ܶ�		����������ʱ�򣬺����еľֲ�������û�ˡ�
ȫ��	�ܳ�		ҳ��رյ�ʱ����ʧ��
�հ� 	�ɳ��ɶ�	��������������ʹ�ã��������������ϵı�����������ʧ
��������	�Ӽ��ң��Ҹ����������ĸ����������ĸ����ĸ�����������ȫ��

�ݹ飺		�κεĴ��¶����Էֻ���С��
쳲��������С�����������
fn(n)=fn(n-1)+fn(n-2);

����Ķ���Ҫ���档

�����Ż���
1.�ȶ�
2.��չ
3.�Ż�
0.1s 		0.00000001s

�Ż���
1.�������ܣ�
	F12 network 		��Ҫ����
	YSLow 		ѧϰ

����http����
�����ϲ�ѩ��ͼ
�ϲ��ļ�
����ѹ��
ͼƬ������
script��������棬css������ǰ�档
CDN


2.ִ�����ܣ�
���õ�
1.������ȫ�ֱ���
2.������Ҫ�����ԣ�Ҫ�ñ���
3.ѭ����length����
4.����for...in
5.����������
6.��ϵͳ�ṩ�Ķ���
û�õ�
var str = '';
str+='abc';
str+='bcd';
str+='cdf';

var arr = [];
arr.push('abc');
arr.push('bcd');
arr.push('cdf');
arr.join('');

=======================================

����
������ʽ
������ʽ
Ϊ�˷���
------------------------------------------------------------------
new RegExp('����','ѡ��');
/����/ѡ��;
-----------------------------------------------------------------
���ԣ�
1.��		
2.�� 		
3.̰�� 		


ѡ��	img
	i 		Ignore 	���Դ�Сд
	m 		muti-line 	����ģʽ
	g 		global 		ȫ��ƥ��
����
{n}		n��
{n,m}		����n�������m��
{n,} 		����n������಻��
{1,} 		����һ������಻��
{0,1}		����û�У����һ��������һ�λ򲻳���
{0,} 		����û�У���಻��
? 		{0,1} 	����û�У����һ��
+		{1,} 	����һ������಻��	
* 		{0,}	����û�У���಻��	�����Ƽ���

���η�
^ 		����
$		��β

������
1.��
[1234]		1��2��3��4
[1,2,3,4]	1��2��3��4��,
a[abc]c 
aac 	abc	acc
2.��Χ
[0-9]		0-9
[a-z]		a-z
[A-Z]		A-Z
[a-zA-Z0-9]	������ĸ����������
[16-89]		1��6-8��9
3.�ų�
[^a-z]		�ų�a-z
ת��
\d		��������
\w		������ĸ������_
\s 		���пհ�
\D 		��������
\W		������ĸ����_
\S 		���˿հ�
.		ƥ������

�������ҳ�����һ��\
\\

str.search(re);		����
str.match(re);		ƥ��
re.test(str); 		У��
test��ʹ��ʱ�������^$

str.replace(�ַ���|����,�ַ���|����)

cookie	�涫��
���ԣ�
1.����С		4kb
2.��������Ĭ����session
3.���ܿ������
4.����ȫ
5.��Ϸ���������ʹ��
6.���ֺ�ֵ�ɶԳ���
7.pathĬ���ǵ�ǰ�ļ���Ŀ¼

form������:
1.ˢ��ҳ�棨����ҳ�棩���û������˷�Ǯ
2.û�취�ӷ�����ȡ����
ajax 	Asynchronous Javascript And XML
	(�첽javascript��XML)
	��ˢ�´ӷ�����ȡ����

дajax�Ĳ���
����
get				post
�� 	����			��	��������ͷ	����
����

��Ҫ��ȫ���Žӿ�,Ҫ�Լ���

jsonp
ajax���ܿ���

seajs 		���		ģ�黯
���ã�
1.�����ֶ�����һ��js
2.���������ϵ


����һ��ģ��
define(function(require,exports,module){
	//require 		����
	//exports 		����һ��ģ��
	//module 		��������ģ��
});

ʹ��
seajs.use('ģ�������',function(mod){});

jquery 		��
$(function(){})		window.onload
$('#id')
$('.class');
$('tagName');
:lt
:gt
:first
:last
:odd
:even
:has
:contains

����class
addClass
removeClass
��������
attr(sName);		��ȡ
attr(sName,sValue);	����һ��
attr({sName:sValue});	��������
������ʽ
css(sName); 		��ȡһ��
css(sName,sValue); 	����һ��
css({sName:sValue}); 	��������
��������
html() 		��ȡ
html('');	����
val() 		��ȡ
val('');		����


�˶�
startMove(obj,iTarget);
startMove(obj,iTarget,time);
startMove(obj,sName,iTarget,time);
startMove(obj,json,time);
startMove(obj,json,time,fnEnd);
startMove(obj,json,time,type,fnEnd);
startMove(obj,json,option);

doMove

�˶����ģ�
dis = iTarget-start;
count = Math.floor(time/30);
var n =0;

����
start+dis*n/count;
����
var a = n/count;
start+dis*Math.pow(a,3);
����
var a = 1-n/count;
start+dis*(1-Math.pow(a,3));

=======================================
�¼�
�¼����� 		�������¼�����ϸ��Ϣ
var oEvent = ev||event;
oEvent.clientX
oEvent.clientY
oEvent.keyCode
oEvent.ctrlKey,shiftKey,altKey
oEvent.cancelBubble
oEvent.srcElement 		�¼�ί��
oEvent.target			�¼�ί��
oEvent.toElement 		
oEvent.fromElement
oEvent.relatedTarget
oEvent.preventDefault();	�¼����е�ȡ��Ĭ���¼�
oEvent.wheelDelta 		
oEvent.detail			
oEvent.readState		domready
oEvent.pageX			
oEvent.pageY			

�¼�
�¼�ð��
	oEvent.cancelBubble=true;
�¼���
obj.addEventListener(sEv,fn,false);
obj.removeEventListener(sEv,fn,false);
obj.attachEvent('on'+sEv,fn);
obj.detachEvent('on'+sEv,fn);
	false 	ð��
	true 	����
�¼�����
obj.setCapture	������
obj.setCapture&&obj.setCapture();
obj.releaseCapture&&obj.releaseCapture();

�¼�ί��
oEvent.srcElement||oEvent.target;


DOMReady
onreadystatechange
DOMContentLoaded


this�������⣿
��ʱ����ʹ��this
����һ��ʹ��this
�м��¼�����һ��
attachEvent��


onload
onerror
onclick
ondblclick
onmouseover
onmouseout
onmousedown
onmousemove
onmouseup
onfocus
onblur
onkeydown
onkeyup
onchange
onresize
onscroll
onreadystatechange
DOMContentLoaded
onpropertychange
oninput
onmouseenter
onmouseleave
onsubmit
oncontextmenu
DOMMouseScroll
onmousewheel


js��ɲ���
ECMAScript 		 ���Ľ�����
DOM 			�ĵ�����ģ��
BOM 			���������ģ��

DOM
-------------------------------------------------------
��ȡ��Ԫ��
childNodes	��ȡ�ӽڵ㣬�����ı��ڵ�
	nodeType 	���
	3 		�ı��ڵ�
	1 		��ǩ�ڵ�
	
children	��ȡ�ӽڵ�ֻ������һ��

��ȡ���ڵ� 	parentNode 	offsetParent
�ṹ 	parentNode 	document
��λ	offsetParent	body


��һ���ֵܽڵ�
previousElementSibling||previousSibling
��һ���ֵܽڵ�
nextElementSibling||nextSibling

��β�ӽڵ�
firstElementChild||firstChild
lastElementChild||lastChild

������Ϣ
offsetLeft
offsetTop
offsetWidth 		
offsetHeight

����Ԫ��
document.createElement
����Ԫ��
insertBefore(Ҫ��˭);
appendChild(Ҫ);
ɾ��Ԫ��
obj.removeChild();

��¡
obj.cloneNode(true)		��ȿ�¡
obj.removeAttribute('id');

body		document.body
html 		document.documentElement
document 	document

obj.scrollHeight 		Ԫ�����ݸ߶�

document.documentElement.scrollTop||document.body.scrollTop

document.documentElement.clientWidth

tagName 		�ڵ�����ȫ�Ǵ�д

��������
.
[]
attribute
setAttribute
getAttribute
removeAttribute

BOM
window.open
window.close
window.location
window.location.pathName
window.location.host
window.location.hash
window.location.search
window.location.href
window.location.reload();

window.navigator.userAgent

��������
Ԥ����
�����е������ᵽ����
���ǲ���Ӱ��������
����
ֻ�ж�����
���ű��ʽ
�������
var a = (12,5)		���ȼ�
alert((1,5))		����

��ֵ���ʽ
var a = b = c = d = 5;
�ϸ�ģʽ
'use strict';	�Ƽ���ÿ��js�ļ��ϼ���
�ļ���		�����ڵ�һ��
script��	�����ǵ�һ��
������		�����ǵ�һ��

����ˣ�
	this
	����var��������
	with
	if��forswitch��for����in����while�ж��庯��

�����ݣ�������IE8-

------------------------------------------------------
angularjs 		������������
�������		�Ӽ򵥿�ʼд����












