// Inject inline script into page script tag
var scriptTag = document.createElement('script')
scriptTag.src = chrome.extension.getURL('inline-script.js');
(document.head||document.documentElement).appendChild(scriptTag)

document.addEventListener('checkResult', function(event) {
    const checkResult = event.detail
    chrome.runtime.sendMessage(checkResult)
})