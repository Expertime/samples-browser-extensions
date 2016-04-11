let browser = chrome;
let mybutton = document.querySelector('#mybutton'); // getting the button
if (mybutton !== null && typeof (mybutton) != typeof undefined) {
  mybutton.onclick = resetCounter; // setting an onclick function on it
}

let myspan = document.querySelector('#myspan');
if (myspan !== null && typeof (myspan)  != typeof undefined) {
  if (typeof (myinteger) ==  typeof undefined) {
    let myinteger = 42; //eslint-disable-line no-unused-vars
  } else {
    myinteger++; //eslint-disable-line no-undef
  }
  myspan.innerText = `${myinteger}`; //eslint-disable-line no-undef
}

/**
 * Send a message to the background page to reset the counter.
 */
function resetCounter() {
  browser.runtime.sendMessage(// send a message to the background page
    { // the message that is send
      'action': 'reset_counter'
    },
    msg => { console.log(msg); } // the callback function that should be called back by the background page
  );
}
