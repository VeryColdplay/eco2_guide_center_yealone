window.addEventListener("DOMContentLoaded", () => {
  const applyMermaidFontFix = () => {
    document.querySelectorAll('svg[id^="mermaid-"] text, svg[id^="mermaid-"] tspan').forEach(el => {
      el.style.fontFamily = "'Pretendard', sans-serif";
      el.style.fill = '#1E3A8A';
      el.style.fontWeight = '500';
    });
    document.querySelectorAll('svg[id^="mermaid-"] a').forEach(el => {
      el.style.textDecoration = 'none';
      el.style.color = 'inherit';
    });
  };

  applyMermaidFontFix();

  // Mermaid는 JS로 동적으로 다시 그리기도 하므로 observer도 등록
  const observer = new MutationObserver(applyMermaidFontFix);
  observer.observe(document.body, { childList: true, subtree: true });
});
