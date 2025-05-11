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
  