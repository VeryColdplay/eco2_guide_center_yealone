document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "equation-results";
    resultsContainer.style.position = "fixed";
    resultsContainer.style.right = "20px";
    resultsContainer.style.top = "100px";
    resultsContainer.style.background = "#f0f0f0";
    resultsContainer.style.border = "1px solid #ccc";
    resultsContainer.style.padding = "10px";
    resultsContainer.style.display = "none";
    document.body.appendChild(resultsContainer);
  
    fetch("equation_index.json")
      .then(response => response.json())
      .then(equationMap => {
        document.querySelectorAll("[data-equation-id]").forEach(el => {
          el.style.cursor = "pointer";
          el.addEventListener("click", () => {
            const eqId = el.dataset.equationId;
            const pages = equationMap[eqId] || [];
            if (pages.length === 0) {
              resultsContainer.innerHTML = `<strong>No pages found for ${eqId}</strong>`;
            } else {
              let html = `<strong>Pages for Equation ${eqId}:</strong><ul>`;
              pages.forEach(p => {
                const link = p.file.replace(".md", "/").replace("index.md", "");
                html += `<li><a href="${link}">${p.title}</a></li>`;
              });
              html += "</ul>";
              resultsContainer.innerHTML = html;
            }
            resultsContainer.style.display = "block";
          });
        });
      });
  });
  