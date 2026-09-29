"use strict";

//skapar en variabel som blir värdet på det man fyller i rutorna
const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getSubject = document.getElementById('subject');
const getMessage = document.getElementById('message');
const button = document.getElementById('button');

//skapar en event-listener
button.addEventListener('click', function(event){
    //ser till att inte sidan laddas om när man submittar
    event.preventDefault();

    //tar fram värdena på det som fyllts i
    //(vi gör inget med dem än)
    //och är inte detta samma som jag gör här ovanför?
    const nameValue = getName.value;
    const emailValue = getEmail.value;
    const subjectValue = getSubject.value;
    const messageValue = getMessage.value;    
} );

