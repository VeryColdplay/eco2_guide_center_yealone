window.addEventListener("DOMContentLoaded", function () {
    // 수식 내용과 링크 대상 정의
    const equationLinks = {
      "Q_{h,b,i} = Q_{sink,i} - \\eta_i Q_{source,i}": "/eco2_logic_guide/ifc_linking.html",
      "Q_{h,b,mth} = d_{op}(Q_{sink,op} - \\eta_{op} Q_{source,op}) + d_{we}(Q_{sink,we} - \\eta_{we} Q_{source,we})": "/eco2_logic_guide/heating_summary.html"
      // 필요한 식들을 계속 추가
    };
  
    // 수식 노드들 순회
    document.querySelectorAll(".mjx-chtml").forEach(node => {
      const latexText = node.textContent.replace(/\s+/g, "");
      for (const [eq, link] of Object.entries(equationLinks)) {
        const cleanEq = eq.replace(/\s+/g, "");
        if (latexText.includes(cleanEq)) {
          const a = document.createElement("a");
          a.href = link;
          a.classList.add("equation-link");
          a.title = "수식 상세로 이동";
          node.parentNode.insertBefore(a, node);
          a.appendChild(node);
        }
      }
    });
  });

  // 👇 페이지 내용이 비동기로 바뀌는 걸 감지해서 수식을 다시 렌더링함
if (window.MathJax && window.MathJax.typesetPromise) {
  const observer = new MutationObserver(() => {
    MathJax.typesetPromise()
      .then(() => {
        // ✅ 수식 렌더링 끝난 후 equationLinks 다시 적용
        document.querySelectorAll(".mjx-chtml").forEach(node => {
          const latexText = node.textContent.replace(/\s+/g, "");
          for (const [eq, link] of Object.entries(equationLinks)) {
            const cleanEq = eq.replace(/\s+/g, "");
            if (latexText.includes(cleanEq)) {
              const a = document.createElement("a");
              a.href = link;
              a.classList.add("equation-link");
              a.title = "수식 상세로 이동";
              if (!node.parentNode.matches("a.equation-link")) {
                node.parentNode.insertBefore(a, node);
                a.appendChild(node);
              }
            }
          }
        });
      })
      .catch((err) => console.error("MathJax render failed:", err));
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
