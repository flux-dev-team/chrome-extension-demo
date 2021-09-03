function collectGoogletagInfo() {
    if (typeof googletag === 'undefined' || typeof googletag.pubads !== 'function') {
        return null;
    }
    const adSlots = googletag.pubads().getSlots();
    const adInfo = {};
    adSlots.forEach(slot => {
        adInfo[slot.getAdUnitPath()] = slot.getResponseInformation();
    });
    return adInfo;
}
// Give it some time for google ads to load
setTimeout(() => {
    var googleTaginfo = collectGoogletagInfo();
    document.dispatchEvent(new CustomEvent('checkResult', {
        detail: JSON.stringify(googleTaginfo)
    }))
}, 3000)