�ʼ�
==================================
js
ECMAScript		���Ľ�����
DOM			�ĵ�����ģ��
BOM			���������ģ��

DOM��
document
	head
		title
		script
		style
		....
	body
		..
			..
				...
�鿴��ǩ��
obj.tagName 	�����Ǵ�д��ĸ��

�ڵ��ϵ
��ȡ�ӽڵ�
childNodes 		��ȡ�ӽڵ㣬�����ı��ڵ�
	nodeType 	���ڵ�����
	�ı��ڵ�	3
	��ǩ�ڵ�	1
children 	��ȡ�ӽڵ㣨ֻ������һ�㣩

��ȡ���ڵ�
�ṹ��parentNode 		document
��λ��offsetParent 		body

��ȡ�ֵܽڵ�:
��һ���ֵܽڵ�
obj.previousElementSibling	���ݸ߰汾�����
obj.previousSibling		����ie6,7,8
obj.previousElementSibling||obj.previousSibling;

��һ���ֵܽڵ�
obj.nextElementSibling		���ݸ߰汾�����
obj.nextSibling 		����ie6,7,8
obj.nextElementSibling||obj.nextSibling

��β�ӽڵ�
��
����.firstElementChild		���ݸ߰汾�����
����.firstChild			����ie6,7,8
����.firstElementChild||����.firstChild
β
����.lastElementChild		���ݸ߰汾�����
����.lastChild			����ie6,7,8
����.lastElementChild||����.lastChild

������Ϣ��
obj.offsetWidth 	����ģ�͵Ŀ��
obj.offsetHeight 	����ģ�͵ĸ߶�
obj.offsetLeft 		���붨λ�����ľ���
obj.offsetTop 		���붨λ�����ľ���

����Ԫ��:
document.createElement('��ǩ��');
����Ԫ��
����.appendChild(Ҫ�����Ԫ��)
����.insertBefore(Ҫ����ģ�����˭֮ǰ)
ɾ��Ԫ��
����.removeChild(Ҫɾ����Ԫ��)

��¡
obj.cloneNode(true) 		��ȿ�¡
**ע�⣺��idȥ��


BOM	��������йء�
window
��һ����ҳ�档
window.open(��ַ)
window.open(��ַ,�򿪷�ʽ);

�����ݣ�
chrome		����
firefox 			��ֹ
ie 			ֱ�Ӵ�

�û������Ǽ��ݵġ�

�ر�ҳ��
window.close();

�������⣺
chrome 		ֱ�ӹر�
IE 			ѯ���Ƿ�رա�
firefox 			û��Ӧ
�ű����ùرշǽű��򿪵Ĵ��ڡ�

ֻ�ܹر�js�򿪵Ĵ��ڡ�

//��ȡ���������ϸ��Ϣ��
if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
}else{
}

window.location 		��վ��ַjson
http://www.a.com/s/a?ie=utf-8&abc=123#1d
window.location.host 		��ȡ����
www.a.com
window.location.href 		������ַ
http://www.a.com/s/a?ie=utf-8&abc=123#abc
window.location.search		����
?ie=utf-8&abc=123
window.location.protocol	Э��
http://
window.location.pathname 	·��
/s/a
window.location.hash 		ê��
#abc

�û�����:
oHtml = document.body.parentNode;
oHtml = document.documentElement;
��ȡhtml��ǩ


���½Ǹ�ý�壺
1.position:absolute; right:0; bottom:0;
2.position:fixed; right:0; bottom:0;	������ie6
3.�Լ�д��ϵͳ��������õġ���


onscroll 		��ҳ�����ʱ������

��������(ҳ����˶��������Ƕ���)
document.documentElement.scrollTop;
������chrome

document.body.scrollTop;
����chrome�ġ�

����д����
document.documentElement.scrollTop||document.body.scrollTop;

��ȡ�������߶�
document.documentElement.clientHeight;


�ı䴰�ڴ�С�¼�
onresize


ҳ������¼�
onscroll
�ı䴰�ڴ�С�¼�
onresize


��������
document.documentElement.scrollTop||document.body.scrollTop;		��ȡ���¹�������
document.documentElement.scrollLeft||document.body.scrollLeft;		��ȡ���ҹ�������

�������Ŀ��
document.documentElement.clientHeight
	��ȡ�������߶�
document.documentElement.clientWidth
	��ȡ���������

����λ�ã�
 Ԫ����*ҳ��*�е�λ�á�

function getPos(obj){
	var l = 0;
	var t = 0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {left:l,top:t};
}

obj.getBoundingClientRect();	��ȡ����λ��;
	.left		��߾���ҳ����ߵľ���
	.top 		�ϱ߾���ҳ���ϱߵľ���
	.right 		�ұ߾���ҳ����ߵľ���
	.bottom 	�±߾���ҳ���ϱߵľ���



-------------------------------------------------------
�������д��� 
��/���½�������
�������
��������-������ɫ
��������-��������




