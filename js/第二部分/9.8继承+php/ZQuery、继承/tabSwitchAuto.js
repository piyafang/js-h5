//版权 北京智能社©, 保留所有权利

function TabSwitchAuto(id)
{
	var _this=this;
	
	TabSwitch.call(this, id);
	
	this.now=0;
	setInterval(function (){
		_this.next();
	}, 1000);
}

//只继承方法
TabSwitchAuto.prototype=new TabSwitch();		//不能有
TabSwitchAuto.prototype.constructor=TabSwitchAuto;

TabSwitchAuto.prototype.next=function ()
{
	this.now++;
	
	if(this.now==this.aBtn.length)
	{
		this.now=0;
	}
	
	this.click(this.aBtn[this.now]);
};










