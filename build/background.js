var checkResult = {};

// Listen to messages from content script.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const tabId = sender.tab.id;
    const googleTaginfo = JSON.parse(message);
    checkResult[tabId] = googleTaginfo;
})

// clean storage when tab is closed
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    delete checkResult[tabId]
})