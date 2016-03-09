// JavaScript Document

window.onload=function(){
	navsjshow();
	bannerbgshow();	
	bookalistshow();
	booklistshow();

}

// 首页navsjshow
function navsjshow(){
	var oNavUl=document.getElementById('navUl');
	var aNavLi=oNavUl.getElementsByTagName('li');
	for( var i=0;i<(aNavLi.length)-1;i++){
		aNavLi[this.index]=i;
		aNavLi[i].onmouseover=function(){
			for( var j=0;j<(aNavLi.length)-1;j++){
				aNavLi[j].className='nav_li clearFix';
			}
		this.className='nav_li navactive clearFix';	
		}
		
	}
}


// bannerbgshow

function bannerbgshow(){

		var oDotBox=document.getElementById('dotbox');
		var aDotBtn=oDotBox.getElementsByTagName('a');
		var oBannerbg=document.getElementById('bannerbg');
		var aBannerPic=oBannerbg.getElementsByTagName('li');

		for(var i=0;i<aDotBtn.length;i++){
			aDotBtn[i].index=i;
			aDotBtn[i].onmouseover=function(){
				for( var j=0; j<aDotBtn.length;j++){
					aDotBtn[j].className='';
					aBannerPic[j].className='';
				}
				this.className='dot_fff';
				aBannerPic[this.index].className='active';
			}
		}

}
	
// bookalistshow

function bookalistshow(){

		var oBookalist=document.getElementById('bookalist');
		var aBookBtn=oBookalist.getElementsByTagName('a');
		for(var i=0;i<aBookBtn.length;i++){
			aBookBtn[i].onmouseover=function(){
				for( var j=0; j<aBookBtn.length;j++){
					aBookBtn[j].className='';
				}
				this.className='i_active';
			}
		}

}


// booklistshow

function booklistshow(){

		var oBooklist=document.getElementById('booklist');
		var aListBtn=oBooklist.getElementsByTagName('li');
		for(var i=0;i<aListBtn.length;i++){
			aListBtn[i].onmouseover=function(){
				for( var j=0; j<aListBtn.length;j++){
					aListBtn[j].className='';
				}
				this.className='bgfff';
			}
		}

}

















