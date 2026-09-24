let banner = null;
let strikes = 0;
let lastStrikeTime = 0;
let video = null;

const STRIKE_COOLDOWN = 5000; // 5 seconds between strikes

/* ---------------- VOICE COACH ---------------- */

function speak(message) {
  speechSynthesis.cancel(); // stop previous speech
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;
  speechSynthesis.speak(utterance);
}

/* ---------------- UI BANNER ---------------- */

function createBanner(text) {
  if (banner) banner.remove();

  banner = document.createElement("div");
  banner.innerText = text;

  Object.assign(banner.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    padding: "16px",
    zIndex: "999999",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    borderBottom: "4px solid black",
    letterSpacing: "1px"
  });

  document.body.appendChild(banner);
}

/* ---------------- RESET ---------------- */

function resetEffects() {
  strikes = 0;
  lastStrikeTime = 0;

  if (banner) {
    banner.remove();
    banner = null;
  }

  if (video) {
    video.muted = false;
    video.style.filter = "none";
  }
}

/* ---------------- PUNISHMENT + VOICE ---------------- */

function applyPunishment() {
  video = document.querySelector("video");

  // STRIKE 1
  if (strikes === 1) {
    createBanner("🔴 DISTRACTION DETECTED — STRIKE 1");
    speak("You are losing focus. Get back to studying.");
  }

  // STRIKE 2 → MUTE
  if (strikes === 2 && video) {
    video.muted = true;
    createBanner("🔴 WARNING — VIDEO MUTED (STRIKE 2)");
    speak("This content is distracting. Stay focused.");
  }

  // STRIKE 3 → BLUR
  if (strikes === 3 && video) {
    video.style.filter = "blur(8px)";
    createBanner("🔴 FINAL WARNING — VIDEO BLURRED");
    speak("Final warning. Focus now or the tab will close.");
  }

  // STRIKE 4 → CLOSE TAB
  if (strikes >= 4) {
    createBanner("⛔ SESSION TERMINATED — TAB CLOSING");
    speak("Session terminated.");

    setTimeout(() => {
      chrome.runtime.sendMessage({ action: "close_tab" });
    }, 1500);
  }
}

/* ---------------- ANALYSIS ---------------- */

function analyzeTitle(title) {
  chrome.storage.local.get("focusOn", (res) => {
    if (!res.focusOn) return;

    fetch("http://127.0.0.1:5050/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    })
    .then(res => res.json())
    .then(data => {

      // STUDY → RESET EVERYTHING
      if (data.type === "study") {
        resetEffects();
        return;
      }

      // DISTRACTION → STRIKE WITH COOLDOWN
      if (data.type === "distraction") {
        const now = Date.now();
        if (now - lastStrikeTime < STRIKE_COOLDOWN) return;

        lastStrikeTime = now;
        strikes++;

        chrome.runtime.sendMessage({ action: "log_strike" });
        applyPunishment();
      }
    })
    .catch(() => {});
  });
}

/* ---------------- LOOP ---------------- */

setInterval(() => {
  analyzeTitle(document.title);
}, 1000);
