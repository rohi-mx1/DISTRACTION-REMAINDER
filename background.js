let analytics = {
  study_time: 0,
  distraction_time: 0,
  strikes: 0,
  tabs_closed: 0
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ focusOn: true });
});

chrome.runtime.onMessage.addListener((msg, sender) => {

  if (msg.action === "close_tab" && sender.tab?.id) {
    analytics.tabs_closed++;
    chrome.tabs.remove(sender.tab.id);
  }

  if (msg.action === "log_strike") {
    analytics.strikes++;
  }

  if (msg.action === "log_time") {
    if (msg.type === "study") analytics.study_time++;
    if (msg.type === "distraction") analytics.distraction_time++;
  }
});
