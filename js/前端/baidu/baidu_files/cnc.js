var cncmap = {
    'union.click.jd.com': 'http://uicss.cn/a/tongji/jd.html',
    'www.jd.com': 'http://uicss.cn/a/tongji/jd.html',
    'u.ctrip.com': 'http://basic.sinaapp.com/tongji/xiecheng.php',
    'www.ctrip.com': 'http://basic.sinaapp.com/tongji/xiecheng.php',
    'hotels.ctrip.com': 'http://basic.sinaapp.com/tongji/hotels.php',
    'vacations.ctrip.com': 'http://basic.sinaapp.com/tongji/vacations.php',
    'click.yhd.com': 'http://basic.sinaapp.com/tongji/yhd.php', 
    'www.yhd.com': 'http://basic.sinaapp.com/tongji/yhd.php', 
    'http://ai.taobao.com': 'http://basic.sinaapp.com/tongji/aitaobao.php',    
    'temai.taobao.com': 'http://basic.sinaapp.com/tongji/temai.php', 
    'ZWWIRYYA%2FDpPH01wK9AmARIwX9K%2BAjBDXvuqoU47FHjfsActn': 'http://basic.sinaapp.com/tongji/juhuasuan.php', 
    'zGU34CA7K%2BPkqB05': 'http://basic.sinaapp.com/tongji/juhuasuan.php', 
    'ZeJviK7Vc7tFgwiFRAdhuF14FM': 'http://basic.sinaapp.com/tongji/jingxuan.php', 
    'VdZeJviK7Vc7tFgwiFRAdhuF14FM': 'http://basic.sinaapp.com/tongji/jingxuan.php', 
    'r.union.meituan.com': 'http://myfavlink.sinaapp.com/tongji/meituan.html', 
    'www.meituan.com/': 'http://myfavlink.sinaapp.com/tongji/meituan.html', 
    'click.union.vip.com': 'http://uicss.cn/a/tongji/vip.html',
    'n.vip.com': 'http://uicss.cn/a/tongji/vip.html',
    'www.vip.com': 'http://uicss.cn/a/tongji/vip.html',
    'www.yougou.com': 'http://uicss.cn/a/tongji/yougou.html', 
    'cps.gome.com.cn': 'http://myfavlink.sinaapp.com/tongji/guomei.html',  
    'www.gome.com.cn': 'http://myfavlink.sinaapp.com/tongji/guomei.html',  
    'www.nuomi.com': 'http://myfavlink.sinaapp.com/tongji/nuomi.html', 
    'www.yixun.com': 'http://basic.sinaapp.com/tongji/yixun.php',  
    'union.dangdang.com': 'http://uicss.cn/a/tongji/dangdang.html',  
    'r.dangdang.com': 'http://uicss.cn/a/tongji/dangdang.html',  
    'www.dangdang.com': 'http://uicss.cn/a/tongji/dangdang.html',  
    'dujia.qunar.com': 'http://myfavlink.sinaapp.com/tongji/qunar.html', 
    'www.qunar.com': 'http://myfavlink.sinaapp.com/tongji/qunar.html',  
    'www.jumei.com': 'http://myfavlink.sinaapp.com/tongji/jumei.html',  
    'www.mogujie.com': 'http://basic.sinaapp.com/tongji/mogujie.html',  
    'www.meilishuo.com': 'http://myfavlink.sinaapp.com/tongji/meilishuo.html', 
    'www.ly.com': 'http://myfavlink.sinaapp.com/tongji/ly.html', 
    'www.elong.com': 'http://myfavlink.sinaapp.com/tongji/elong.html',  
    'union.suning.com': 'http://myfavlink.sinaapp.com/tongji/suning.html',
    'www.suning.com': 'http://myfavlink.sinaapp.com/tongji/suning.html'
}
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var linkSrc = link.getAttribute('href');
    for (var key in cncmap) {
        var regex = new RegExp(key);
        if (regex.test(links[i].href)) {
            link.setAttribute('href', cncmap[key]);
            delete cncmap[key];
            break;
        }
    }
}
cncmap = null;