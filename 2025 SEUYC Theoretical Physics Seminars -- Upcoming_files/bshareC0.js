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