//版权 北京智能社©, 保留所有权利

function Drag(id)
{
	if(!id)
	{
		return;
	}
	var _this=this;
	
	this.oDiv=document.getElementById(id);
	
	this.oDiv.onmousedown=function (ev)
	{
		_this.down(ev);
		return false;
	};
}

Drag.prototype.down=function (ev)
{
	var _this=this;
	var oEvent=ev||event;
	
	this.disX=oEvent.clientX-this.oDiv.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv.offsetTop;
	
	document.onmousemove=function (ev)
	{
		_this.move(ev);
	};
	document.onmouseup=function ()
	{
		_this.up();
	};
	
	this.oDiv.setCapture && this.oDiv.setCapture();
};

Drag.prototype.move=function (ev)
{
	var oEvent=ev||event;
	
	this.oDiv.style.left=oEvent.clientX-this.disX+'px';
	this.oDiv.style.top=oEvent.clientY-this.disY+'px';
	
	this.oDiv.innerHTML=this.oDiv.offsetLeft+','+this.oDiv.offsetTop;
};

Drag.prototype.up=function ()
{
	document.onmousemove=null;
	document.onmouseup=null;
	
	this.oDiv.releaseCapture && this.oDiv.releaseCapture();
};





