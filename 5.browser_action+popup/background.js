var browser = chrome;
var counter = 0;
console.log('hello world');
updateBadge(counter); // initialize the browser action's badge text to '0'

browser.runtime.onMessage.addListener((msg, sender, callbackFn) => {
    console.log(msg);
    if (msg.action) {
        switch(msg.action) {
            case 'hello world':
                counter++; // increment the counter
                console.log(`new visit, total count : ${counter}`); // log the counter's value
                break;
            case 'reset_counter':
                counter = 0; // reset counter
                console.log('counter reset to zero'); // log it
                break;
            default:
                break;
        }
        updateBadge(counter); // set the browser action's badge text
        callbackFn({'counter': counter}); // send back the counter's value the the web page
    }
    return;
});

/**
 * update the browserAction's badge with the given text
 * @param {string} text text to set as the browserAction's badge
 */
function updateBadge(text) {
    browser.browserAction.setBadgeText({text: `${text}`});
}