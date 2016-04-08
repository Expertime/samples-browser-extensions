let browser = chrome;
console.log('my awesome content_script');

browser.runtime.sendMessage(// send a message to the background page
  { // the message that is send
    'action': 'hello world'
  },
  msg => { console.log(msg); } // the callback function that should be called back by the background page
);
