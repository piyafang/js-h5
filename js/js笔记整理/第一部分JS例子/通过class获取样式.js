// JavaScript Document
function findInArr(arr,sClass){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==sClass){
			return true;
		}
	}
	return false;
}
function getByClass(obj,sClass){
	var aResult = [];
	if(obj.getElementsByClassName){
		aResult=obj.getElementsByClassName(sClass);
	}else{
		var aEle = obj.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			var aClass = aEle[i].className.split(' ');
			if(findInArr(aClass,sClass)){
				aResult.push(aEle[i]);
			}
		}
	}
	return aResult;
}

调用：
<script src="getByClass.js"></script>
<script>
window.onload=function(){
	var aRed = getByClass(document,'red');
	for(var i=0;i<aRed.length;i++){
		aRed[i].style.background='red';
	}
};
</script>











