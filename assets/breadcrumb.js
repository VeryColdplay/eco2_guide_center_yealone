function createBreadcrumbs() {
  const container = document.querySelector('.md-content');
  if (!container) return;
  if (container.querySelector('.breadcrumb-nav')) return;

  const pathParts = window.location.pathname
    .split('/')
    .filter(p => p && !p.endsWith('.html'));

  if (pathParts.length === 0) return;

  const breadcrumb = document.createElement('nav');
  breadcrumb.className = 'breadcrumb-nav';

  let href = '/';
  breadcrumb.innerHTML = pathParts.map((part, index) => {
    const label = index === 0 ? 'Home' : decodeURIComponent(part.replace(/-/g, ' '));
    href += part + '/';
    const isLast = index === pathParts.length - 1;

    // 링크 또는 현재 페이지 텍스트
    const content = isLast
      ? `<span class="current-page">${label}</span>`
      : `<a href="${href}">${label}</a>`;

    const separator = isLast ? '' : `<span class="breadcrumb-separator">›</span>`;
    return content + separator;
  }).join('');

  const h1 = container.querySelector('h1');
  if (h1) {
    h1.insertAdjacentElement('beforebegin', breadcrumb);
  } else {
    container.prepend(breadcrumb);
  }
}

function onRenderEvent() {
  requestAnimationFrame(createBreadcrumbs);
}

window.addEventListener('DOMContentLoaded', onRenderEvent);
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.MutationObserver !== 'undefined') {
    const observer = new MutationObserver(onRenderEvent);
    observer.observe(document.body, { childList: true, subtree: true });
  }
});
