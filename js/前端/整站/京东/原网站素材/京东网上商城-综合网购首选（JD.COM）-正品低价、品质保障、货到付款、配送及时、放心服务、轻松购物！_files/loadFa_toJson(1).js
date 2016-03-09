 (function() {
 	var doc = document;
    var el = doc.getElementById('img-list-ly');
    var itemData = [
                   
		        {
		        width: 139,
                height: 80,
		        src:'http://img30.360buyimg.com/da/jfs/t616/232/1426182843/7674/560d6347/54d619b3N87c7f1aa.jpg',
		        href:'http://c.nfa.jd.com/adclick?sid=2&cid=176&aid=5934&bid=0&unit=101361&advid=169775&guv=&url=http://ijipiao.jd.com/',
		        alt:'',
		        ext1: '490元抢国际机票'
		        } 
              ,
		        {
		        width: 139,
                height: 80,
		        src:'http://img30.360buyimg.com/ads/jfs/t460/93/1318183634/30316/25f75e06/54cb7041N1091773e.jpg',
		        href:'http://c.nfa.jd.com/adclick?sid=2&cid=176&aid=5934&bid=0&unit=96471&advid=154137&guv=&url=http://sale.jd.com/act/Xtu23xDNWhiRLy.html',
		        alt:'',
		        ext1: '新加坡航空特惠'
		        } 
        ];
    var item_img = [];
    var temp;
    if (itemData) {
        for (var i = 0; i < itemData.length; i++) {
            temp = itemData[i];
            item_img.push('<li class="abtest_aid_lvyou'+ (i+1) +'"><a href="' + temp.href + '" target="_blank"><img width="'+ temp.width +'" height="'+ temp.height +'" src="'+ temp.src +'" data-img="1" /><span>'+ temp.ext1 +'</span></a></li>');
        };
    };
    if ( el ) {
        el.innerHTML = item_img.join('');
    }
})()