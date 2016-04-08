let browser = chrome;
let counter = 0;
console.log('hello world');

browser.runtime.onMessage.addListener((msg, sender, callbackFn) => {
  if (msg.action && msg.action == 'hello world') { // ensure the correct message is received
    counter++; // increment the counter
    console.log(`new visit, total count : ${counter}`); // log the counter's value
    callbackFn({ // send back the counter's value the the web page
      'counter': counter
    });
  }
  return;
});
