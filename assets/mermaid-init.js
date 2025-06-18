document.addEventListener('DOMContentLoaded', function () {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
      },
      securityLevel: 'loose',
      flowchart: { useMaxWidth: true, htmlLabels: true }
    });

    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
    });

    mermaid.run();

    setTimeout(() => {
      document.querySelectorAll(".mermaid").forEach((el) => {
        const svg = el.querySelector("svg");
        if (svg) {
          // 1. 모든 <text> 요소에 Pretendard 폰트 강제 적용
          svg.querySelectorAll('text').forEach((textElement) => {
            textElement.setAttribute("font-family", "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif");
            textElement.setAttribute("font-weight", "500");
            textElement.setAttribute("fill", "#1E3A8A");
          });

          // 2. 모든 <tspan>에도 동일하게 적용
          svg.querySelectorAll('tspan').forEach((tspan) => {
            tspan.setAttribute("font-family", "'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif");
            tspan.setAttribute("font-weight", "500");
            tspan.setAttribute("fill", "#1E3A8A");
          });
        }
      });
    }, 500);
  } else {
    console.error('Mermaid.js is not loaded properly.');
  }
});
