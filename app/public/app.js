(function () {
  "use strict";

  var STORAGE_KEY = "agencia360-chat-history";
  var log = document.getElementById("log");
  var form = document.getElementById("form");
  var input = document.getElementById("input");
  var sendBtn = document.getElementById("send");

  function loadHistory() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  function saveHistory(messages) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {}
  }

  var history = loadHistory();

  function textOf(content) {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) {
      return content
        .filter(function (b) { return b.type === "text"; })
        .map(function (b) { return b.text; })
        .join("\n\n");
    }
    return "";
  }

  function toolCallsOf(content) {
    if (!Array.isArray(content)) return [];
    return content
      .filter(function (b) { return b.type === "tool_use"; })
      .map(function (b) {
        var arg = b.input && (b.input.skill_id || b.input.cliente || "");
        return b.name + (arg ? "(" + arg + ")" : "()");
      });
  }

  function render() {
    log.innerHTML = "";
    history.forEach(function (m) {
      if (m.role === "user") {
        var text = textOf(m.content);
        if (!text) return; // tool_result-only user turns are internal, skip
        appendBubble(text, "user");
      } else if (m.role === "assistant") {
        var calls = toolCallsOf(m.content);
        if (calls.length) {
          appendBubble("🔧 " + calls.join(" · "), "tool-note");
        }
        var text = textOf(m.content);
        if (text) appendBubble(text, "assistant");
      }
    });
    log.scrollTop = log.scrollHeight;
  }

  function appendBubble(text, cls) {
    var div = document.createElement("div");
    div.className = "msg " + cls;
    div.textContent = text;
    log.appendChild(div);
  }

  function appendError(text) {
    var div = document.createElement("div");
    div.className = "msg error";
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  render();

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;

    history.push({ role: "user", content: text });
    render();
    saveHistory(history);
    input.value = "";
    sendBtn.disabled = true;

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
      .then(function (res) {
        if (!res.ok) {
          appendError(res.data.error || "Error desconocido.");
          return;
        }
        history = res.data.messages;
        saveHistory(history);
        render();
      })
      .catch(function (err) {
        appendError("No se pudo contactar al servidor: " + err.message);
      })
      .finally(function () {
        sendBtn.disabled = false;
        input.focus();
      });
  });
})();
