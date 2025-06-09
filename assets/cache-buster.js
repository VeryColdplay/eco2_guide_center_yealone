document.addEventListener('DOMContentLoaded', function () {
    const version = new Date().getTime();  // 매번 새로운 타임스탬프 생성
    document.querySelectorAll('link[rel="stylesheet"], script').forEach(el => {
        if (el.href || el.src) {
            const url = el.href || el.src;
            const newUrl = url.includes('?') ? `${url}&v=${version}` : `${url}?v=${version}`;
            if (el.href) el.href = newUrl;
            if (el.src) el.src = newUrl;
        }
    });
});
