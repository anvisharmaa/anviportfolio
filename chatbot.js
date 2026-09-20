/* ============================================
   Portfolio Chatbot — chatbot.js
   --------------------------------------------
   Front-end for the "Ask AI" section. Talks to the
   Netlify function at /.netlify/functions/chat, which
   holds the Groq API key server-side.
   ============================================ */

(function chatbot() {
  const windowEl = document.querySelector("[data-chat-window]");
  const form = document.querySelector("[data-chat-form]");
  const input = document.querySelector("[data-chat-input]");
  const sendBtn = document.querySelector("[data-chat-send]");
  const suggestions = document.querySelector("[data-chat-suggestions]");

  if (!windowEl || !form || !input) return;

  const ENDPOINT = "/.netlify/functions/chat";

  // Conversation history sent to the model (system prompt lives server-side).
  const history = [];
  let isSending = false;

  /* ---------- Helpers ---------- */

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Very small, safe markdown-ish renderer: escapes first, then applies
  // bold, inline links, line breaks, and simple bullet lists.
  function renderMarkdown(text) {
    const escaped = escapeHtml(text.trim());

    // Split into blocks separated by blank lines.
    const blocks = escaped.split(/\n{2,}/);

    return blocks
      .map((block) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^\s*[-*•]\s+/.test(l));

        if (isList) {
          const items = lines
            .map((l) => l.replace(/^\s*[-*•]\s+/, ""))
            .map((l) => `<li>${inline(l)}</li>`)
            .join("");
          return `<ul>${items}</ul>`;
        }
        return `<p>${inline(block.replace(/\n/g, "<br>"))}</p>`;
      })
      .join("");

    function inline(s) {
      // **bold**
      s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      // Bare URLs -> links
      s = s.replace(
        /(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g,
        '<a href="$1" target="_blank" rel="noopener">$1</a>'
      );
      // email -> mailto
      s = s.replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1">$1</a>'
      );
      return s;
    }
  }

  function scrollToBottom() {
    windowEl.scrollTop = windowEl.scrollHeight;
  }

  function addMessage(role, htmlContent) {
    const row = document.createElement("div");
    row.className = `chat__msg chat__msg--${role === "user" ? "user" : "bot"}`;

    const avatar = document.createElement("span");
    avatar.className = "chat__avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = role === "user" ? "You" : "AI";

    const bubble = document.createElement("div");
    bubble.className = "chat__bubble";
    bubble.innerHTML = htmlContent;

    row.appendChild(avatar);
    row.appendChild(bubble);
    windowEl.appendChild(row);
    scrollToBottom();
    return row;
  }

  function addTyping() {
    const row = document.createElement("div");
    row.className = "chat__msg chat__msg--bot";
    row.dataset.typing = "true";
    row.innerHTML = `
      <span class="chat__avatar" aria-hidden="true">AI</span>
      <div class="chat__bubble">
        <span class="chat__typing" aria-label="Assistant is typing">
          <span></span><span></span><span></span>
        </span>
      </div>`;
    windowEl.appendChild(row);
    scrollToBottom();
    return row;
  }

  function setSending(state) {
    isSending = state;
    input.disabled = state;
    if (sendBtn) sendBtn.disabled = state;
  }

  /* ---------- Core send flow ---------- */

  async function sendMessage(text) {
    const message = text.trim();
    if (!message || isSending) return;

    // Hide suggestion chips after the first user message.
    if (suggestions) suggestions.classList.add("is-hidden");

    addMessage("user", escapeHtml(message));
    history.push({ role: "user", content: message });
    input.value = "";
    setSending(true);

    const typingRow = addTyping();

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json().catch(() => ({}));
      typingRow.remove();

      if (!res.ok || data.error) {
        const msg =
          data.error ||
          "Something went wrong reaching the assistant. Please try again.";
        addMessage("bot", escapeHtml(msg));
        // Don't keep a failed turn in history.
        history.pop();
        return;
      }

      const reply = data.reply || "Sorry, I didn't catch that. Could you rephrase?";
      addMessage("bot", renderMarkdown(reply));
      history.push({ role: "assistant", content: reply });
    } catch (err) {
      typingRow.remove();
      addMessage(
        "bot",
        escapeHtml(
          "I couldn't reach the assistant. Check your connection and try again."
        )
      );
      history.pop();
    } finally {
      setSending(false);
      input.focus();
    }
  }

  /* ---------- Events ---------- */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage(input.value);
  });

  if (suggestions) {
    suggestions.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-suggestion]");
      if (!chip) return;
      sendMessage(chip.getAttribute("data-suggestion"));
    });
  }
})();
