�ʼ�
�������ԣ�
	Ԥ�������ѱ����ͺ����������ᵽ���������ǲ���ͻ��������Ҳ����ͻ��script��ǩ
	���ã�����object
	�Ƚϣ�����object
	�ַ�����
		��ȡ�ַ�����
			charCodeAt()
		ͨ������ת�ַ�
			String.fromCharCode()
		���ֵķ�Χ��
			4e00-9fa5
			19968-40869
			0x��ʮ������ת��ʮ����
 			
			1GB=1024MB
			1MB=1024KB
			1KB=1024�ֽ�
			����ռ���λ��
			����		1�ֽ�
			Ӣ����ĸ	1�ֽ�
			���� 		
				UTF-8		3�ֽ�
				GB2312 	2�ֽ�

	���ű��ʽ��
		�����ź���ġ�
		��ֵ���������ȼ��Ƚϵ�Ҫ������������ȼ�
		alert����Ϊ�Ǻ������ô������������ŰѶ��ű��ʽ��������
	������
		�������ʱû��var������ȫ�ֱ�����
		���е�ȫ�ֵĶ���window�ġ�
�ϸ�ģʽ
Ϊ��������д��js�����ӹ淶��
'use strict';

==================================
javascript 		
����ʲô������ɣ�
ECMAScript		���Ľ�����
�ṩ������Ĺ��ܡ�����:12+5  var a = 12; function show(){}
�����ԣ���ȫ���ݡ�


DOM 	�ĵ�����ģ�� 	Document Object Model
����document		����ҳ��ġ�
��ȡԪ��,�޸���ʽ,����Ԫ��
�����ԣ��ܺã��в����ݵģ����ǿ��Խ����

BOM	���������ģ�� 	Browser Object Model
����window	���������
window.onload
window.alert();
�����ԣ����������ݣ�������ˡ�

DOM	
DOM��:�ĵ��Ľṹ
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
��ǩ=Ԫ��=�ڵ�
obj.tagName 		��ȡ�ڵ������
(���е���ĸ���Ǵ�д�ġ�)
DOM�ṹ
��ȡ���ڵ�(��ȡ����)
	obj.parentNode
	����������document�������Ͼ���null
��ȡ�ӽڵ�
	childNodes	��ȡ�ӽڵ㣬�����ı��ڵ�
		�ڵ����ͣ�
			�ı��ڵ�
			��ǩ�ڵ�
		���ڵ�����ͣ�
		nodeType:
			3 	�ı��ڵ�
			1 	��ǩ�ڵ�

	children	��ȡ�ӽڵ�(ֻ������һ��)
		ֻ�������Ķ�Ů���������������ӣ���Ů

��ȡ��һ���ֵܽڵ�
obj.previousElementSibling 	���ݣ��߰汾�����
obj.previousSibling		���ݣ�ie6,7,8 
����д��
obj.previousElementSibling||obj.previousSibling;

������ر�Ļ�͵����
true&&alert(1);
&&�������������ģ�������ġ������һ���Ǽٵģ�����Ĳ�ִ�С�
var a = 12||5
||��һ������ģ�������ġ������һ���ǼٵĲŻ�ִ�к���ģ������һ������ģ�����ľͲ�ִ�С�

��ȡ��һ���ֵܽڵ�
obj.nextElementSibling 	���ݣ��߰汾�����
obj.nextSibling		���ݣ�ie6,7,8 
����д��
obj.nextElementSibling||obj.nextSibling;







��ȡ��β�ӽڵ�
���ӽڵ�
����.firstElementChild	���ݸ߰汾�����
����.firstChild 		����ie6,7,8
����д��
����.firstElementChild||����.firstChild
β�ӽڵ�
����.lastElementChild	���ݸ߰汾�����
����.lastChild 		����ie6,7,8
����д��
����.lastElementChild||����.lastChild
��ȡ��β�ӽڵ�û�á�̫�鷳
���ӽڵ�
obj.children[0];
β�ӽڵ�
obj.children[obj.children.length-1];
����ģ�ͣ�
width/height+padding*2+border*2

������Ϣ
obj.offsetWidth	��ȡ����ģ�͵Ŀ��
obj.offsetHeight 	��ȡ����ģ�͵ĸ߶�
obj.offsetLeft 		��ȡԪ�ؾ��붨λ������߾ࡣ
obj.offsetTop 		��ȡԪ�ؾ��붨λ�����ϱ߾�
û��offsetRight/offsetBottom
obj.offsetParent 	��ȡ��λ����



	getStyle 		������Ϣ
ֵ 	string			number
width 	��width 		����ģ�͵Ŀ��





��ȡԪ��
�ṹ��parentNode 	document
��λ��offsetParent 	body

����Ԫ��
document.createElement('��ǩ��')
ʲô��ǩ���ܴ���
**�㴴�������ı�ǩ����html����д�ı�ǩһģһ����û���κ�����
���Ԫ��
	����.appendChild(�´����Ķ���);
	�ڸ���������������һ��Ԫ��
	����.insertBefore(Ҫ�����Ԫ��,���뵽˭֮ǰ);
	��һ��Ԫ�ز��뵽��һ��Ԫ��֮ǰ
ɾ��Ԫ��
����.removeChild(Ҫɾ���Ķ���);



ÿ��li���涼��һ��a��ǩ��ÿ��a��ǩ�����ϵ���¼���ɾ��li��
��ҳ�����֮���Ȼ�ȡ���е�д����a���ӵ���¼���ɾ��li.

��¡Ԫ��
obj.cloneNode()
obj.cloneNode(true) 		��ȿ�¡Ԫ��,��������һ���¡
*ע�⣺idҲ�ᱻһ���¡��
*С��ʿ���Ժ�ÿ��ʹ�ÿ�¡��ʱ��Ҫ��idȥ��

=============================
��ҵ��
ģ�����԰�
�ٶ�����-�����б�
bing-�ҵĵ���
hao123-��ӡ�ɾ�����޸ĵ���
























