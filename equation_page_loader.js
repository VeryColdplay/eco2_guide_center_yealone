document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eqId = urlParams.get("eq");  // ex: "2-11-11"
  
    const resultsDiv = document.getElementById("eq-results");
  
    if (!eqId) {
      resultsDiv.innerHTML = "<p><strong>❌ 수식 ID가 지정되지 않았습니다.</strong></p>";
      return;
    }
  
    fetch("/equation_index.json")
      .then(res => res.json())
      .then(eqMap => {
        const pages = eqMap[eqId];
        if (!pages || pages.length === 0) {
          resultsDiv.innerHTML = `<p><strong>❌ '${eqId}' 수식을 포함한 페이지를 찾을 수 없습니다.</strong></p>`;
          return;
        }
  
        let html = `<h2>📌 수식 ID: ${eqId}</h2>`;
        html += `<p>아래는 해당 수식을 포함한 문서입니다:</p><ul>`;
  
        pages.forEach(p => {
          const link = p.file.replace(/\.md$/, "/").replace(/index\/$/, "");
          html += `<li><a href="/${link}">${p.title}</a></li>`;
        });
  
        html += `</ul>`;
        resultsDiv.innerHTML = html;
      })
      .catch(() => {
        resultsDiv.innerHTML = "<p>❌ JSON 파일을 불러오지 못했습니다.</p>";
      });
  });
  