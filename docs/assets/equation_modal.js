document.addEventListener("DOMContentLoaded", () => {
    // ✅ 1. 모달 HTML 삽입
    const modalHTML = `
    <div id="equation-modal" style="display:none;">
      <div id="modal-overlay" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:999;"></div>
      <div id="modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:8px;z-index:1000;width:400px;max-height:70%;overflow-y:auto;">
        <button id="modal-close" style="float:right;">×</button>
        <h3 id="modal-title"></h3>
        <div id="modal-body"></div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  
    // ✅ 2. 닫기 기능
    document.body.addEventListener("click", (e) => {
      if (e.target.id === "modal-overlay" || e.target.id === "modal-close") {
        document.getElementById("equation-modal").style.display = "none";
      }
    });
  
    // ✅ 3. Mermaid 노드 ID → 수식 ID 매핑
    const nodeToEquationMap = {
      "EQ_2_11": "2-11",
      "EQ_2_1": "2-1",
      "EQ_2_7": "2-7"
      // 필요한 수식 ID 추가 가능
    };
  
    // ✅ 4. equation_index.json 로드 및 클릭 이벤트 등록
    fetch("/equation_index.json")
      .then(res => res.json())
      .then(equationMap => {
        for (const [nodeId, eqId] of Object.entries(nodeToEquationMap)) {
          const el = document.getElementById(nodeId);
          if (el) {
            el.style.cursor = "pointer";
            el.addEventListener("click", () => {
              const pages = equationMap[eqId] || [];
              showEquationModal(eqId, pages);
            });
          }
        }
      });
  
    // ✅ 5. 모달 표시 함수
    function showEquationModal(eqId, pages) {
      const modal = document.getElementById("equation-modal");
      const title = document.getElementById("modal-title");
      const body = document.getElementById("modal-body");
  
      title.textContent = `Equation ${eqId}`;
      if (pages.length === 0) {
        body.innerHTML = `<p>No pages found for this equation.</p>`;
      } else {
        let html = `<ul>`;
        pages.forEach(p => {
          const link = p.file.replace(/\.md$/, "/").replace(/index\/$/, "");
          html += `<li><a href="${link}">${p.title}</a></li>`;
        });
        html += `</ul>`;
        body.innerHTML = html;
      }
      modal.style.display = "block";
    }
  });
  