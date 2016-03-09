// JavaScript Document
var rejson = {
	uname:/^[\w\d]{6,32}$/,
	age:/^((1[89])|([2-9]\d)|(100))$/,
	email:/^\w+@[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,6}){1,2}$/
};
function formCheck(sId){
	var oForm = document.getElementById(sId);
	var aInp = oForm.getElementsByTagName('input');
	oForm.onsubmit=function(){
		var bOk = true;
		for(var i=0; i<aInp.length; i++){
			if(rejson[aInp[i].name]){
				if(rejson[aInp[i].name].test(aInp[i].value)){
					aInp[i].className='ok';
				}else{
					aInp[i].className='err';
					bOk=false;
				}
			}
		}
		if(!bOk){
			return false;
		}
	};
}