�ʼ�
�Ź�����ק
var oldH = oBox.offsetHeight;
var oldW = oBox.offsetWidth;
var oldT = oBox.offsetTop;
var oldL = oBox.offsetLeft;
var oldY = oEvent.clientY;
var oldX = oEvent.clientX;

�Զ��������
---------------------------------------------------


�������¼�
obj.onmousewheel 	����������ʱ������
���ݣ�chrome    ie

DOMMouseScroll 	����������ʱ������
���ݣ�Firefox

DOM�¼�.
1.��DOM��ͷ
2.ֻ��ʹ���¼��󶨡�

�����ֵķ���		
oEvent.wheelDelta		���ݣ�chrome��ie
		��		-120
		��		120
oEvent.detail 			���ݣ�FF
		��		3
		��		-3


return false;		�������¼��󶨾�ʧЧ�ˡ�
oEvent.preventDefault() 	��ֹĬ���¼�	���ݸ߰汾�����
oEvent.preventDefault&&oEvent.preventDefault();
��return false�������¼���ʧЧʱʹ�á�







��ҵ:
1.�Զ��������------�������ӡ�



























