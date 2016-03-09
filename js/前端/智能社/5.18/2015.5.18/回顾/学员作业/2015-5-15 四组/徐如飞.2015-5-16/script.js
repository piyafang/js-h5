/**
 * Created by Administrator on 2015/5/16.
 */
window.onload=function() {
    var oUl = document.getElementById('ul');
    var aLi = oUl.getElementsByTagName('li');
    var oImg = document.getElementById('img');

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].indext = i;
        aLi[i].onmouseover = function () {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
            }
            this.className = 'active';
            var indext = this.indext;
            oImg.src = 'img/' + (indext + 1) + '.jpg';
        };

    }

    var oTxt=document.getElementById('txt');
    oTxt.onclick=function(){
        oTxt.style.width='150px';
    };

    var oRt = document.getElementById('return');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;


    window.onscroll=function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(osTop >= clientHeight){
            oRt.style.display='block';
        }else{
            oRt.style.display='none';
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    };

    oRt.onclick = function () {
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var spend = Math.floor(osTop / 2);
            document.documentElement.scrollTop = document.body.scrollTop -= osTop - spend;
            isTop = true;

            if(osTop == 0){
                clearInterval(timer);
            }
        }, 50);
    }
};

