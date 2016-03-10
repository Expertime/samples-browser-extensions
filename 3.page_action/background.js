var browser = chrome;
var counter = 0;
console.log('hello world');

browser.runtime.onMessage.addListener((msg, sender, callbackFn) => {
    if (msg.action && msg.action == 'hello world') { // ensure the correct message is received
        counter++; // increment the counter
        console.log(`new visit, total count : ${counter}`); // log the counter's value
        browser.pageAction.show(sender.tab.id); // show the extension's page action on the web page that did send this message
        updatePageActionTitle(counter, sender.tab.id);
        callbackFn({'counter': counter}); // send back the counter's value the the web page
    }
    return;
});

// on any of this extension's page action beeing clicked
// the following script will be executed on the background page
browser.pageAction.onClicked.addListener((tab) => {
    // set the counter to zero , log it
    counter = 0; 
    console.log('counter reset to zero');
    // we also update the page action's title that has just beeing clicked
    // this means that other web page's page actions title won't be changed
    updatePageActionTitle(counter, tab.id);
});

/**
 * update the pageAction's title for a specified tab, with the given counter
 * @param {string} counter counter to show on the pageAction title
 * @param {number} tabId id of the tab on which to upate the pageAction's title
 */
function updatePageActionTitle(counter, tabId) {
    browser.pageAction.setTitle({
        tabId: tabId,                   // on the tab that did send this message
        title: `counter: ${counter}`    // set the title
    });
}