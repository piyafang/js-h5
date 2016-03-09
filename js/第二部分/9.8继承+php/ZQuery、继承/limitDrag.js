//版权 北京智能社©, 保留所有权利

function LimitDrag(id)
{
	Drag.call(this, id);
}

LimitDrag.prototype=new Drag();
LimitDrag.prototype.constructor=LimitDrag;

//alert(LimitDrag.prototype.move);
var oldMove=LimitDrag.prototype.move;

LimitDrag.prototype.move=function (ev)
{
	oldMove.call(this, ev);
	
	if(this.oDiv.offsetLeft<0)
	{
		this.oDiv.style.left='0px';
	}
};













