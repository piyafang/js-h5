�ʼ�
=====================================
js��ʲô�ģ�
�޸�css��ʽ��������

.style 		�м���ʽ
.className	class

��������
. 		�������е�����
[] 		�������ķ����Ŷ��������������з��ַ������������л��ܷű������㲻�ܡ�
attribute	�����Զ�������
		�ɶԳ���

��ȡԪ��
document.getElementById 		ͨ��id��ȡһ��
document.getElementsByName 	ͨ��name��ȡһ��
obj.getElementsByTagName 		ͨ����ǩ����ȡһ��
obj.getElementsByClassName 		ͨ��class��ȡһ��

����	 	�涫��������,������
var ������=����ֵ;

�����������׶�
1.����
	�����������������������ǲ�ִ��
2.����
	ִ���������

ʲôʱ��ʹ�ô���?
���������ݿɱ�ʱ��ʹ�ô���


����
function ������(����){
	return
}

return����ֵ��
1.��Ϻ���ĳ���ִ��
2.û��return������undefined
3.��return��û��ֵ��Ҳ����undefined

if�ж�
if 			����&&���
if...else			����?���1:���2;
if..else...if...else		

ѭ��
=====================================
for
for(��ʼֵ;����;����){
	���
}
while
while(����){
	���
	����
}

for...in...

for(var i in json){
	i		//i====json�е����� 
	json[i]		//i====json�е�ֵ
}

ʲô�����̿������?
if
switch




��ȡ���м���ʽ
function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}

��������:
string 		�ַ���
number 	����
boolean	����ֵ
undefined 	δ����
object 		����
function 	����

�ַ���-������
1.parseInt		ת����
2.parseFloat		תС��
3.Number		ת���֣����ϸ�

ת��ʧ���У�NaN
not a number
��number����

NaN�������κζ����������Լ�

isNaN(��	���NaN


�������������̶�ʱ
arguments 	ʵ������

json	�൱�ڰ�һ�ѱ������˸�����
var json = {a:1,b:2,c:3};
����ʲô���ܴ档

ʹ��for������in��������ѭ��
û��length
�±���name

���鳣�÷���
arr.push 		�������
arr.pop		����ɾ��
arr.shift		ǰ��ɾ��
arr.unshift		ǰ�����
arr.splice 		ɾ�������룬�滻
arr.splice(��ʼλ��,����)
arr.splice(��ʼλ��,0,Ҫ����Ķ���);
arr.splice(��ʼλ��,����,����Ķ���);
arr.join		����ת�ַ���
arr.sort 		����
arr.reverse 		��ת
arr.concat 		����

Math�ĳ��÷���
Math.random()		�����
Math.pow();			n�η�
Math.abs();			����ֵ
Math.round(); 			��������
Math.floor(); 			����ȡ��
Math.sqrt(); 			����
Math.ceil(); 			����ȡ��
Math.max(); 			���ֵ
Math.min();			��Сֵ
Math.sin();			
Math.cos(); 			
Math.atan2();



�ַ����ĳ��÷���
str.charAt
str.indexOf
str.lastIndexOf
str.substring
str.split
str.toLowerCase
str.toUpperCase
str.charCodeAt
String.fromCharCode
str.replace





��Ƭǽ
����ת��
ÿ������ק
��ק��ʱ���������
̧���ʱ�򽻻�λ��







































