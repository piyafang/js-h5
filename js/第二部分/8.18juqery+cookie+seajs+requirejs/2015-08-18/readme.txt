�ʼ�
---------------------------------------------------------
�˶�����
dis = iTarget-start;
var count = Math.floor(time/30);
var cur = start+dis*n/count;

doMove(Tween)

�������Ƿ������������С�

cookie 		
�������û������ն��ϵ�����
/��������ķ������ĸ�Ŀ¼ 	����Ŀ¼

���ԣ�
1.ֻ��ͨ��������ʽʹ�á�
2.���ֺ�ֵ�ɶԳ��֡�
3.cookie����ȫ�����Բ���洢һЩ�����ԵĶ�����
4.����С��4KB���ҡ�
5.cookie�������������ڡ�
expires 	��������
Ĭ����session
session 	�Ự
�Ӵ������ַ��ʼ�������ر����������
6.���ܿ��������


==========================
��ô�ã�
ʲôʱ���ã�
==========================
��δ�cookie?
document.cookie='����'	��

document.cookie='����=ֵ';

//����cookie��ľ�һ�㡣
//���ڶ���
document.cookie='����=ֵ; EXPIRES='+oDate;

PATH 		·��
/
document.cookie='����=ֵ; PATH=/; EXPIRES='+oDate;

������������:
GMT��ʽ
Tue Aug 18 2015 10:32:51 GMT+0800 (�й���׼ʱ��)
UTC��ʽ
Tue Aug 18 10:34:28 UTC+0800 2015 
ͳһGMT��ʽ.
�����ڵĸ�ʽ���GMT��ʽ
.toGMTString()
Tue, 18 Aug 2015 02:36:05 GMT
Tue, 18 Aug 2015 02:36:28 UTC 

var oDate = new Date();
document.cookie='����=ֵ; PATH=/; EXPIRES='+oDate.toGMTString();

��ȡcookie
document.cooke
��Ҫͨ��  	'; ' 	���ָ������
ÿһ����	'='	�ֳ�����
�������[0]==sName
��ô���ֵ�����Ҫ

ɾ��cookie

���ʹ��cookie?
addCookie(sName,sValue,iDay);
getCookie(sName);
removeCookie(sName);

��ק
��ʲô��
oBox.offsetLeft��oBox.offsetTop
ʲôʱ���cookie?
���̧���Ǵ�
ʲôʱ���ȡcookie?
ҳ�����֮���Ҫ��ȡ

����΢�� �������ֱ���
�ػ������
1.��ק
2.����΢��
3.ѡ�
4.��ס�û���

onsubmit 		form�ύ�¼�

cookie��ҵ����������������Ҫ��
	�Լ���5��֮ǰ��������cookie����

ģ�黯
=================================
requirejs���ڵ�	http://requirejs.org/
seajs������ 		http://seajs.org

����:
1.�ֶ�����ܶ��js�ļ�
2.���js�ļ���������ϵ
seajs	ģ�黯�������������
js�ļ�����ģ��
1��js�ļ�����һ��ģ��	ģ�����Թ��ܻ���

��ζ���һ��ģ��?
define(function(require,exports,module){
	//require 	����һ��ģ��
	//exports 	����һ��ģ��
	//module 	��������ģ��
});

���ʹ��һ��ģ��

seajs��ҵ��֮ǰ�����ӣ���10����seajsд��
requirejs


jquery��
http://jquery.com/ 	����
����ʹ��js�����ġ�
�汾
1.x 	�Ƿ���
2.x 	ŷ��
	������IE6,7,8

1.7
�����������°汾��ȥʹ�á����ȶ���

*js������jquery��һ��������jquery������jsһ������
Ϊ����߿���Ч��
jquery
����дjquery��ʱ���������
jquery��$����ֵǮ�ġ�
jquery�ⶫ���Ǹ�����ԭ�������õġ�
ֻ����ͼ 	
��̨ 		


ԭ��				jquery
window.onload		$(function(){});
document.getElementById	$('#id');
oBtn.onclick=function(){};	obj.click(function(){});

.show() 		��ʾ
.style.display='block';


click();				����¼�
mouseover();			��������¼�
mouseout();			����Ƴ��¼�
.toggle(fn,fn........);		�л�
.hover(fn,fn);			�����Ƴ��л�

Ч��:
fadeIn		����
fadeOut	����
slideDown	����
slideUp	����
���ϲ��Ƽ�.
�Ƽ��� animate()
����������
.stop()		****��ʼ֮ǰ����.stop()
����һ��������ͣ�£������ҵĶ�����

jquery��ֱ�Ӳ���һ��Ԫ��

jquery��ȡԪ�� 	jqueryѡ����
д����cssһģһ��û���κ�����
������ѡ����
ͨ��id��ȡԪ��			$('#id')
ͨ��class��ȡԪ��		$('.class');
ͨ����ǩ��ȡԪ�� 		$('��ǩ��');

����ѡ�������������Ի�ȡԪ�أ�
$('[������=����ֵ]')

α��ѡ����
:first 			��ȡ��һ��
:last 			��ȡ���һ��
:even			ż����
:odd 			������
:eq(index)		����������
:lt(index)		С��
:gt(index)		����
:contains(text)		�����ı�ƥ��
:has(��ǩ)		��ǩƥ��



����css��ʽ
.css(��ʽ��);				��ȡһ����ʽ
.css(��ʽ��,��ʽֵ);			����һ����ʽ
.css({��ʽ��:��ʽֵ,��ʽ��:��ʽֵ})	����������ʽ

���ԵĲ���
.attr(������')				��ȡһ������ֵ
.attr(������,����ֵ); 			����һ������
.attr({������:����ֵ,������:����ֵ})	������������


����class
.addClass('class')		���һ��class
.removeClass('class')		ɾ��һ��class

��������
��Ԫ��
.val()			��ȡ����
.val('����')		��������
�Ǳ�Ԫ��
.html() 		��ȡ����
.html('����')		��������

���������
ԭ������
jquery����
���������jquery�л�ȡ����this����ԭ������
ԭ��������ʹ��jquery�ķ���������
jquery������ʹ��ԭ���ķ���������
ԭ������-��jquery����
$(this);


jquery��ȡλ��
����λ��	getPos
obj.offset().left;		��ȡ����left
obj.offset().top;		��ȡ����top
��ͨ��λ�� 	offsetLeft/Top
obj.position().left; 		��ȡ��ͨleft
obj.position().top; 		��ȡ��ͨtop



�ߴ�
obj.height();			���߶�
obj.width();			�����
obj.innerHeight();		�߶ȼ�padding
obj.innerWidth();		��ȼ�padding
obj.outerHeight(); 		�߶ȼ�padding+border
obj.outerWidth();		��ȼ�padding+border

DOM����
obj.append('����')	Ԫ���ڲ�׷������
Ҫ.appendTo('˭')	��һ��Ԫ��׷�ӵ���һ��Ԫ������
obj.prepend('����')	Ԫ���ڲ�ǰ������
Ҫ.prependTo('˭')	��һ��Ԫ��ǰ�õ���һ��Ԫ������

obj.after('����')	��Ԫ���ⲿ�����
obj.before('����')	��Ԫ���ⲿǰ���
obj.insertAfter()
obj.insertBefore()

ɾ��Ԫ��
remove()

jquery	�¼�
**jquery�е��¼����ǰ���ȥ�ġ�

bind			�¼���
unbind 		�����
	��Σ�գ�һ����С�ģ����е��¼���û��


.delegate 		�¼�ί��
.undelegate 		ȡ���¼�ί��

return false 	
��ֹĬ���¼�	ȡ��ð��

��ֹĬ���¼�
event.preventDefault();
ȡ��ð��
event.stopPropagation();

jquery�е�ѭ��
$('li').each(function(index, element) {
	//index		����
	//element 		ԭ������

});

ԭ�������jquery����ͨ��
ԭ������תjquery����
$(obj);
jquery����תԭ������
obj[0]
obj.get(0)
==============================



û��:
jquery   animate
��װ���




С��ϰ��
cookie:
1.��ק
2.����΢��
3.ѡ�
4.��ס�û���
�Լ�����5��֮ǰ��������cookie����

seajs:
�Լ���10����������

jquery
�Լ���30��������

















