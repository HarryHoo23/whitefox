window.addEventListener('DOMContentLoaded', function() {
    var page = document.getElementById('page'),
        nav = window.navigator,
        ua = nav.userAgent,
        isFullScreen = nav.standalone;
    if (ua.indexOf('Android') !== -1) {
        // 56对应的是Android Browser导航栏的高度
        page.style.height = window.innerHeight + 56 + 'px';
    } else if (/iPhone|iPod|iPad/.test(ua)) {
        // 60对应的是Safari导航栏的高度
        page.style.height = window.innerHeight + (isFullScreen ? 0 : 60) + 'px'
    }
    setTimeout(scrollTo, 0, 0, 1);
}, false);