//版权 北京智能社©, 保留所有权利

function TabSwitch(id)
{
	if(!id)		//没给ID，说明是在继承东西
	{
		return;
	}
	var _this=this;
	
	var oDiv=document.getElementById(id);
	this.aBtn=oDiv.getElementsByTagName('input');
	this.aDiv=oDiv.getElementsByTagName('div');
	
	for(var i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].index=i;
		this.aBtn[i].onclick=function ()
		{
			_this.click(this);
		};
	}
}

TabSwitch.prototype.click=function (oBtn)
{
	for(var i=0;i<this.aBtn.length;i++)
	{
		this.aBtn[i].className='';
		this.aDiv[i].style.display='none';
	}
	
	oBtn.className='active';
	this.aDiv[oBtn.index].style.display='block';
};













