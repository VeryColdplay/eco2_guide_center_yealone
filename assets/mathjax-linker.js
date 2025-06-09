window.addEventListener("DOMContentLoaded", function () {
  const equationLinks = {
    "Q_{h,b,i} = Q_{sink,i} - \\eta_i Q_{source,i}": "/eco2_logic_guide/ifc_linking.html",
    "Q_{h,b,mth} = d_{op}(Q_{sink,op} - \\eta_{op} Q_{source,op}) + d_{we}(Q_{sink,we} - \\eta_{we} Q_{source,we})": "/eco2_logic_guide/heating_summary.html"
  };

  function linkEquations() {
    document.querySelectorAll(".mjx-chtml").forEach(node => {
      const latexText = node.textContent.replace(/\s+/g, "");
      for (const [eq, link] of Object.entries(equationLinks)) {
        const cleanEq = eq.replace(/\s+/g, "");
        if (latexText.includes(cleanEq)) {
          // 중복 방지
          if (node.parentNode && node.parentNode.matches("a.equation-link")) return;

          const a = document.createElement("a");
          a.href = link;
          a.classList.add("equation-link");
          a.title = "수식 상세로 이동";
          node.parentNode.insertBefore(a, node);
          a.appendChild(node);
        }
      }
    });
  }

  linkEquations();  // 초기 링크 삽입

  // MutationObserver는 debounce 또는 timeout 방식으로 제한
  if (window.MathJax && window.MathJax.typesetPromise) {
    let timeoutId = null;
    const observer = new MutationObserver(() => {
      if (timeoutId) clearTimeout(timeoutId);  // 이전 타이머 제거
      timeoutId = setTimeout(() => {
        MathJax.typesetPromise()
          .then(() => linkEquations())
          .catch((err) => console.error("MathJax render failed:", err));
      }, 200);  // 변경 감지 후 200ms 안에 다시 발생하면 지연
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
});
