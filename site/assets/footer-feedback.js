console.log("📌 footer-feedback.js loaded");

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    const path = window.location.pathname;
    const isIndex = path.endsWith("/index.html") || path.match(/\/[^\/]+\/$/);
    if (isIndex) {
      console.log("⛔ index.md detected — skipping feedback box.");
      return;
    }

    const content = document.querySelector(".md-content");
    if (!content || document.querySelector(".footer-feedback")) {
      console.warn("⚠️ .md-content not found or feedback already inserted.");
      return;
    }

    const box = document.createElement("div");
    box.className = "footer-feedback";
    box.style.marginTop = "2rem";

    box.innerHTML = `
      <hr style="margin-bottom: 1rem;" />
      <div style="text-align: center; font-size: 1rem;">
        <p class="feedback-title" style="margin-bottom: 0.5rem; font-weight: 600;">더 나은 가이드 제공을 위해 개선 의견을 주세요.</p>
        <p style="font-size: 0.9rem; color: #777; margin-top: -0.3rem; margin-bottom: 1.2rem;">이 정보가 도움이 되었나요?</p>
        <button class="feedback-btn" id="yesBtn" style="margin-right: 1rem;">Yes</button>
        <button class="feedback-btn" id="noBtn">No</button>
        <div id="feedbackForm" style="margin-top: 1.2rem; display: none;">
          <textarea id="feedbackComment" rows="4" style="width: 90%; max-width: 600px; padding: 0.5rem;"></textarea><br />
          <button class="feedback-btn" id="submitFeedback" style="margin-top: 0.8rem;">Submit</button>
        </div>
      </div>
    `;

    content.appendChild(box);
    console.log("✅ Feedback box inserted at bottom.");

    document.getElementById("yesBtn").addEventListener("click", () => {
      console.log(`👍 YES clicked at ${path}`);
      box.innerHTML = `<p style="text-align:center;">✅ Thanks for your feedback!</p>`;
    });

    document.getElementById("noBtn").addEventListener("click", () => {
      console.log(`👎 NO clicked at ${path}`);
      document.getElementById("feedbackForm").style.display = "block";
    });

    document.getElementById("submitFeedback").addEventListener("click", () => {
      const comment = document.getElementById("feedbackComment").value.trim();
      if (!comment) {
        alert("Please provide feedback before submitting.");
        return;
      }

      console.log(`📩 NO feedback submitted:\n→ Page: ${path}\n→ Comment: "${comment}"`);
      box.innerHTML = `<p style="text-align:center;">🙏 Thank you for your feedback!</p>`;
    });
  });
});
