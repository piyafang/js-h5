�ʼ�
onmousewheel 		����IE��chrome
DOMMouseScroll		����firefox
DOM�¼�
1.��DOM��ͷ��
2.ֻ��ʹ���¼��󶨡�

 �¼�
onclick
ondblclick
onmouseover
onmouseout
onmousedown
onmousemove
onmouseup
onkeydown
onkeyup
onchang
onresize
onscorll
onfocus
onblur
oncontextmenu
onpropertychange
oninput
onload
onerror
onscrollwheel
DOMMouseScroll

�¼�����
�������¼�����ϸ��Ϣ
var oEvent = ev||event;

oEvent
oEvent.clientX
oEvent.clientY
oEvent.keyCode
oEvent.ctrlKey
oEvent.shiftKey
oEvent.altKey
oEvent.cancelBubble
oEvent.preventDefault
oEvent.wheelDelta
oEvent.detail






�¼�ί��:
1.�������
2.��δ��Ԫ�ؼ��¼�
�¼�Դ
oEvent.srcElement 	����ie��chrome
oEvent.target 		���ݸ߰汾�����
����д��:oEvent.srcElement||oEvent.target;



onmouseover��onmouseout��bug
�Ƴ����ĵ�Ԫ��
oEvent.toElement 		����IE��chrome
oEvent.relatedTarget 		����ff

ϣ����ʹ
div->		body
h2->		html

ϣ������ʹ
h2->div 	div
div->h2 	h2
onmouseout
var oTo = oEvent.toElement||Event.relatedTarget;
onmouseover
var oFrom = oEvent.fromElement||Event.relatedTarget;


����(�����¼��ģ���DOM��)
obj.contains(obj2);		obj�Ƿ����obj2

û��over��out��bug		���Ƽ�
onmouseenter		����
onmouseleave		�Ƴ�

ҳ�����֮��ִ��
window.onload		
html,css,js,ͼƬ,flash..........���е���Դ������ɲ�ִ��

DOMReady
html,css,js
�����
DOMContentLoaded		�߰汾�����ʹ��
addEventListener
onreadystatechange		�Ͱ汾�����ʹ��
attachEvent
��ȡ״̬
obj.readyState
interactive
complete
if(obj.readyState=='complete'){
	
}


================================
�¼� 
�¼����� 		var oEvent = ev||event;

Ĭ���¼�
return false;  ������(addEventListener)����ʹҪ��
oEvent.preventDefault&&oEvent.preventDefault();
�¼�����
obj.setCapture&&obj.setCapture()
obj.releaseCapture&&obj.releaseCapture();
�¼���
obj.addEventListener(sEv,fn,false);
obj.removeEventListener(sEv,fn,false);
obj.attachEvent('on'+sEv,fn);
obj.detachEvent('on'+sEv,fn);

ð�ݽ׶�
���������ң���ͬ���¼�ִ�С�����û���¼�Ҳ�������ҡ�
	��ֹ:oEvent.cancelBubble=true;
����׶�
���������ң���ͬ���¼�ִ�С�����û���¼�Ҳ�������ҡ�
	addEventListener(sEv,fn,true)������
�¼�ί��
oEvent.srcElement||oEvent.target;
over/out��bug
oEvent.fromElement||oEvent.relatedTarget;
oEvent.toElement||oEvent.relatedTarget;


ʹ�õ�ʱ��һ��Ҫ��scrollTop||scrollLeft
oEvent.clientX 		����ڿ������е�x����
oEvent.clientY 		����ڿ������е�y����


���ݸ߰汾�������
oEvent.pageX		�����ҳ���е�x����
oEvent.pageY		�����ҳ���е�y����


document.documentElement 		html
document.body 			body
document 				document



�˶���		
var start = ��ʼλ��;
var iTarget = Ŀ���;
var dis = iTarget-start;
var time = ��ʱ��
var count = time/30;	�ܴ���

dis/count;	һ���߶�Զ
n*dis/count;	��ǰ���˶�Զ
n*10;
1 	10
2	20
3	30
4	40
5	50
6	60
7	70
�˶����
1.startMove(obj,iTarget,time);


jiathis


���˶�ʱ��
�ȰѾ�̬�����á�
�ټ��˶���

offsetWidth 		����ģ�͵Ŀ��
202

width = 201;
201
offsetWidth   203
width=202;
202
offsetWidth 204
width = 203;
203
offsetWidth 205

2.startMove(obj,sName,iTarget,time);

3.startMove(obj,sName,iTarget,time);
***(�������˶�)ÿ��Ԫ�ض����Լ���timer

С��ϰ��
����:
3D����Ч��  -> �Ӳ����ԭ��
��̳ ������ͼƬ�Ŵ���С
�Զ��������
���ҳ���κ�a��ǩ��true���¼�ί�У�
�Ŵ󾵣����֮��
��������bug��
===========
ѡ����
��ק
�Ź�����ק
��ק�ط�
���̿����ƶ���������
�������԰�
�ٲ���
������
�������������������










