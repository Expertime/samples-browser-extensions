var browser = chrome;
var mybutton = document.querySelector('#mybutton'); // getting the button
if (mybutton != null && typeof(mybutton) != 'undefined') mybutton.onclick = resetCounter; // setting an onclick function on it

var myspan = document.querySelector('#myspan');
if (myspan != null && typeof(myspan) != 'undefined') {
    if (typeof(myinteger) == 'undefined') myinteger = 42;
    else myinteger++;
    myspan.innerText = `${myinteger}`;
}

/**
 * send a message to the background page to reset the counter
 */
function resetCounter() {
    browser.runtime.sendMessage( // send a message to the background page
        {'action': 'reset_counter'}, // the message that is send
        msg => { console.log(msg); } // the callback function that should be called back by the background page
    );    
}