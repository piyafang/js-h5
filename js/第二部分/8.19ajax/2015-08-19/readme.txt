�ʼ�
������ 		����
�����Ĺ��ܣ��涫��
web����������Ӧ���������
cookie		�涫��
1.ֻ��ͨ��������ʽʹ��
2.����С��4KB
3.���ܿ������
4.��������Ĭ����session
5.����ȫ
6.���ֺ�ֵ�ɶԳ���
7.������Ψһ��
8.Ĭ�ϵ�path�ǵ�ǰ���ļ�Ŀ¼��
addCookie
removeCookie
getCookie

seajs 		���ڵ�
requirejs	�����
�÷�һģһ����
5�������֡�
ģ�黯
*һ��js����һ��ģ�顣		һ��ģ�����һ������
����һ��ģ��
define(function(require,exports,module){
	//require 		����һ��ģ��
	//exports 		����һ��ģ��
	//module 		��������ģ��
});
ʹ��
seajs.use('����',function(mod){
});
����ģ�飬��ģ��������
seajs.config({
	alias:{
		'����':'·���ļ���'
	}
});

jquery
��ȡԪ��
����css
��������
����class
��������
DOM
�¼�
ѭ��
jquery����ԭ������

��ȡ�������Ŀ��?

find

jquery 		��չ�Ժ�ǿ
����Լ�д���
$.fn.XXX =function(){}		������
**jquery�����е�this����ԭ�����󣬵��������⡣
�����this��jquery����

����д���
$.fn.extend({
	���1:function(){},
	���2:function(){},
	.......
});

seajs

====================================
����:
ǰ�˹���ʦ������:
��ͼ+js 	�� 		8-15
���� 		�� 		8-20+
================================
ʲô�ǽ�����
�������.
12
[12,5,3]
{a:'����',age:18}
https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=fdsfsd&rsv_pq=940cbd0700009cc2&rsv_t=1d09eGoxkJ1wVsgUI3xfv0qyp4BKEfsDBplRhj9nvCPSg%2FRrhypSDMK1YCs&rsv_enter=0&rsv_sug3=7&rsv_sug1=4&inputT=955&rsv_sug4=1049

��������	����
�������ܣ��涫��
web����������Ӧ��������ͻ��ˣ�����

1.form		��������ύ����
	action 		�ύ��ַ
	name ��value 	
	submit

method
	GET 	:
			�ܿ���������ȫ������С��32KB�����л���
	POST	:
			����������԰�ȫ��������2GB����û�л���
	
���棺cache.ͬһ��ַ�����ֻ�����һ�Ρ�
	GET: 	����

�𲽵��˳�����ʷ����̨����Ϊ��ȱ�㣺
1.ˢ��ҳ��(����ҳ��),�û����鲻��,�˷�Ǯ
2.�ӷ�������ȡһ������
=================================
ajax 	Asynchronous Javascript And XML
	�첽��javascript��XML
	��ˢ�´ӷ�����ȡ����
ajax 	����
	��
	
	//ajax(��ַ, �ɹ��ص�����, ʧ�ܻص�����)
js�ļ�
move.js
addWheel.js

�ص�����
��һ������,��ֻ���������������ĵ���
oBtn.onclick=function(){
}
addWheel(obj,function(bDown){

});

ʹ��ajaxע�⣺
1.cache����
	http://www.a.com?t=0
	http://www.a.com?t=1
	http://www.a.com?t=2
	http://www.a.com?t=3

�Ƽ�	http://www.a.com?t=Math.random();�������
	http://www.a.com?t=new Date().getTime();
2.	ajax�û����Ķ����ַ���

Uncaught SyntaxError: Unexpected token :
			����������
		evalΣ��	������;		�Ƽ�
		new Function('return {a:1,b:2};');
		new Function ��Σ��
		
		eval();
	дajax����������eval('('+str+')')

3.���롣
	��Ϊ���ļ������ʽ��һ��
	�ļ�����һ��Ҫͳһ��
		�Ƽ���UTF-8
4.�����ĺ�׺��
 	��׺�����˿��ġ�����������ĺ�׺��
====================================
1.����
2.eval
3.����
4.�����ĺ�׺��
====================================
���˻�һ��
	�������������

***����һ���Ȼ�ȡ���ݣ�������Ĺ��ܡ�
ֻҪ�õ����ݡ�����������ˡ�
===================================
��ҵ:
������
������ݺ��ѵ���DOM
�ٶȰٿ�
�ٶ�����






















