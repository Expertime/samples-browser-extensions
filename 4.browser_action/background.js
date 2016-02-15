var browser = chrome;
var counter = 0;
console.log('hello world');
updateBadge(counter); // initialize the browser action's badge text to '0'

browser.runtime.onMessage.addListener((msg, sender, callbackFn) => {
    if (msg.action && msg.action == 'hello world') { // ensure the correct message is received
        counter++; // increment the counter
        console.log(`new visit, total count : ${counter}`); // log the counter's value
        updateBadge(counter); // set the browser action's badge text
        callbackFn({'counter': counter}); // send back the counter's value the the web page
    }
    return;
});

function updateBadge(text) {
    browser.browserAction.setBadgeText({text: `${text}`});
}