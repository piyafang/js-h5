�ʼ�
==========================
����·ݡ�
iNow = 0;
oDate.setMonth(oDate.getMonth()+iNow,1);
iNow--
oDate.setMonth(oDate.getMonth()-1,1);
iNow--
oDate.setMonth(oDate.getMonth()-2,1);
iNow++
oDate.setMonth(oDate.getMonth()+1,1);
iNow++
oDate.setMonth(oDate.getMonth()+2,1);

�¼�		event
ondblclick 		˫���¼���

�¼����� 	�������¼�����ϸ��Ϣ��
ev���� 		�¼�����	���ݸ߰汾�����
event 		�¼�����	����Chrome��IEϵ��
var oEvent = ev||event;

**ֻ�ܻ�ȡ�����ͼ��̵Ĳ�����


��ȡ����ڿ������е�����
�¼�����.clientX;		��ȡ��������X������
�¼�����.clientY;		��ȡ��������Y������

**�Ժ�ֻҪ�ǲ���clientX��clientY�ͼ��Ϲ������롣

onmousemove 		����ƶ��¼�
ע�⣺�������ر�Ƶ�������������Ÿ��Ӵ��롣



�¼�ð�ݡ�
�Ӽ���ȥ�Ҹ�����ͬ���¼�ִ�С�
���㵱ǰԪ��ûʲôû������¼���Ҳ������ð��
ð�ݸ��ṹ�йء�

ȡ���¼�ð��:
oEvent.cancelBubble=true;
**���û�����ⲻҪȡ��ð�ݡ�

�¼�����	�������¼�����ϸ��Ϣ
var oEvent = ev||event;

oEvent.clientX	����ڿ������е�X������.
oEvent.clientY	����ڿ������е�Y������.
oEvent.cancelBubble=true 	ȡ���¼�ð��.



�ɱ��/�ܹ���
?=l/(oS.offsetWidth-oM.offsetWidth)*(oImg.offsetWidth-oB.offsetWidth)


���̵��¼�
onkeydown		�����̰���ʱ����
onkeyup		������̧��ʱ����

���֪�����µ����ĸ�������
ÿ���������б��롣
oEvent.keyCode 		��ȡ���̱���
a 	65
b 	66
c 	67
1	49
2 	50

��ɾ		8
�س� 		13
shift 		16
ctrl		17
alt 		18
�ո�		32
del 		46

��	37
��	38
��	39
��	40
���̿����ƶ��������������

js����ʹ����ϰ����ı��롣
oEvent.ctrlKey		��ctrl����ʱ��true
oEvent.shiftKey		��shift����ʱ��true
oEvent.altKey 		��alt����ʱ��true
�Ҽ��˵��¼�
oncontextmenu
�����Ĳ˵�



������Դ���һЩ������Ĭ���¼�
��ֹĬ���¼�: return false;

window.location.reload();		ˢ��ҳ��



��ҵ��
1. ���̿���div�ƶ�
	����
	ctrl+��  �м���
	ctrl+��  �м����
	ctrl+1   ��ɺ�ɫ
	ctrl+2   �����ɫ
	ctrl+enter  �ص�ԭʼ
2. ֻ���������֣��ų�ɾ����
3. �Ŵ�
4. ���̿���ѡ�
5. �Ҽ����ֲ���









