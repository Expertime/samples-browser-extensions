var browser = chrome;
var counter = 0;
console.log('hello world');

browser.runtime.onMessage.addListener((msg, sender, callbackFn) => {
    if (msg.action && msg.action == 'hello world') { // ensure the correct message is received
        counter++; // increment the counter
        console.log(`new visit, total count : ${counter}`); // log the counter's value
        browser.pageAction.show(sender.tab.id); // show the extension's page action on the web page that did send this message
        browser.pageAction.setTitle({
            title: `counter: ${counter}`,   // set the title
            tabId: sender.tab.id            // on the tab that did send this message
        });
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
    browser.pageAction.setTitle({
        tabId: tab.id,
        title: `counter: ${counter}`
    });
});
