
// 面向对象的写法


//获取元素	$(div #box .box1)
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var result=[];
		var re=new RegExp('\\b'+sClass+'\\b');
		var aEle=oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			if(re.test(aEle[i].className)){
				result.push(aEle[i]);
			}
		}
		return result;
	}
}
	//获取字符串
function _getByStr(aParent,str){
	var aChild=[]; 		 //结果

	for(var i=0;i<aParent.length;i++){

		//aParent[i]->str
		switch(str.charAt(0)){
			case '#':      //ID
				var obj=document.getElementById(str.substring(1));
				aChild.push(obj);
				break;
			case '.':      //class
				var arr=getByClass(aParent[i],str.substring(1));
				for(var j=0;j<arr.length;j++){
					aChild.push(arr[j]);
				}
				break;
			default:      //tag
			//div	li.box	li#li1	input[xxx=xx]	li:eq(10)
			
			//li.box
			if(/^[a-z0-9]+\.[\w\-]+$/i.test(str)){
				//li.box
				var aStr=str.split('.');
				//aStr[0]='li'  	标签
				//aStr[1]='box' 	class

				//第一步、先用标签选
				var arr=aParent[i].getElementsByTagName(aStr[0]);
				//第二步、class筛选
				var re=new RegExp('\\b'+aStr[1]+'\\b');	
 				for(var j=0;j<arr.length;i++){
 					if(re.test(arr[j].className)){
 						aChild.push(arr[j]);
 					}
 				}
 			}

 			//li#li-1
			else if(/^[a-z0-9]+#[\w\-]+$/i.test(str)){
				//li#li-1
				var aStr=str.split('#');
				//aStr[0]='li'  	标签
				//aStr[1]='li-1' 	id

				//第一步、用标签选
				var arr=aParent[i].getElementsByTagName(aStr[0]);

				//第二步、用id筛选
				for(var i=0;i<arr.length;i++){
					if(arr[j].id=str[1]){
						aChild.push(arr[j]);
					}
				}
			}

			//input[xxx=xx]
			else if(/^[a-z0-9]+\[.+=.+\]$/i.test(str)){
				
				//input[value=abc]
				var aStr=str.split(/\[|=|\]/g);
					//aStr[0]='input'		标签
					//aStr[1]='value'		名字
					//aStr[2]='abc'			值
					//aStr[3]=''			空的
					
				//第一步、用标签选一次	
				var arr=aParent[i].getElementsByTagName(aStr[0]);

				//第二步、用属性筛选
				for(var j=0;j<arr.length;i++){
					if(arr[i].getAtrribute(aStr[1]==aStr[2])){
						aChild.push(arr[j]);
					}
				}
			}
			//li:eq(10)	li:first	li:contains(张三)
			else if(/^[a-z0-9]+:[a-z]+(\(.+\))?$/i.test(str)){
				
				//li:eq(10)
				var aStr=str.split(/:|\(|\)/g);
					//aStr[0]='li'	标签
					//aStr[1]='eq'	伪类名
					//aStr[2]='10'	伪类参数(可以没有)
					//aStr[3]=''	空的
					
				//第一步、用标签选	
				var arr=aParent[i].getElementsByTagName(aStr[0]);

				//第二步、用伪类筛
				switch(aStr[1]){
					
					case 'eq':
						aChild.push(arr[parseInt(aStr[2])])
						break;
					case 'first':
						aChild.push(arr[0]);
						break;
					case 'last':
						achild.push(arr[arr.length-1]);
						break;
					case 'odd':
						for(var j=1;j<arr.length;j+=2){
							aChild.push(arr[j]);
						}
						break;
					case 'even':
						for(var j=0;j<arr.length;j+=2){
							aChild.push(arr[j]);
						}
						break;
				}
			}	

			//div
			else{
				var arr=aParent[i].getElementsByTagName(str);
				for(var j=0;j<arr.length;j++){
					aChild.push(arr[j]);
				}
				break;

			}
		}
	}
	return aChild;
} 

function getEle(str){
	var arr=str.match(/\S/g);

	//前一次的结果，就是下一次的父级
	var aParent=[document];
	var aChild=[];
	for(var i=0;i<arr.length;i++){
		aChild=_getByStr(aParent,arr[i]);
		//前一次的结果，就是下一次的父级
		aParent=aChild;
	}
	return aChild;
}



//事件绑定
function addEvent(obj,name,fn){
	if(obj.addEventListener){
		obj.addEventListener(name,fn,false);
	}else{
		//把this弄好了
		obj.attachEvent('on'+name,function(){
			fn.call(obj,event);
		})
	}
}



//获取非行间样式
function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}



//function addReady(fn)事件绑定加载

function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);		
	}else{
		document.attachEvent('onreadystatechange', function(){
		if(document.readyState=='complete')
			fn&&fn();
		})
	}
}


//function ZQuery(arg) $()里面的内容

function ZQuery(arg){

	this.elements=[];

	//arg——function、string、object
	switch(typeof arg){
		case 'function':
			//ready——DOMContentLoaded、onreadystatechange
			//arg此时代表fn
			addReady(arg);
			break;
		case 'string': //取元素、存起来
			this.elements=getEle(arg);
			break;
		case 'object':
			this.elements.push(arg);
			break;
	}

}


//加事件
function _addEv(name){
	ZQuery.prototype[name]=function(fn){
		//给所有选中的元素加fn
		for(var i=0;i<this.elements.length;i++){
			addEvent(this.elements[i],name,fn)
		}
	};
}

var arr='click|mouseover|mouseout|dblclick|mousedown|mouseup|mousemove|keydown|keyup|focus|blur|change|input|load|error|scroll|resize|contextmenu|mouseenter|mouseleave'.split('|');
for(var i=0;i<arr.length;i++){
	_addEv(arr[i]);
}


//hover toggle
ZQuery.prototype.hover=function(fnOver,fnOut){
	//this==$(xxx)
	this.mouseenter(fnOver);
	this.mouseleave(fnOut);
};


//计数 %
ZQuery.prototype.toggle=function(){
	var _args=arguments;
	var _this=this;

	for(var i=0;i<this.elements.length;i++){
		(function (count,index){
			//this.elements[i].count=0;初始化
			addEvent(_this.elements[i],'click',function(ev){
				_args[count%_args.length].call(_this.elements[index],ev);
				
				count++;
			});
		}) (0,i);
	}
};


//设置样式
ZQuery.prototype.css=function(name,value){
	if(arguments.length==2){	//设置
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].style[name]=value;
		}
	}else{			//获取||批量设置

		//获取
		if( typeof name=='string'){
			return getStyle(this.elements[0],name);
		}
		//批量设置
		else{
			for(var i=0;i<this.elements.length;i++){
				for(var j in name){
					this.elements[i].style[j]=name[j];
				}
			}
		}
	}
};


//设置属性

ZQuery.prototype.attr=function(name,value){
	if(arguments.length==2){	//设置
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].setAttribute(name, value);
		}
	}else{
		if(typeof name=='string'){  //获取
			return this.elements[0].getAttribute(name);
		} else{				//批量
			for(var i=0;i<this.elements.length;i++){
				for(var j in name){
					this.elements[i].setAttribute(j, name[j]);
				}
			}
		}
	}
}


//$  new
function $(arg){
	return new ZQuery(arg);
}




































