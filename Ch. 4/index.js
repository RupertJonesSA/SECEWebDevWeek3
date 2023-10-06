const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initalize the object 
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on('log', (msg) => logEvents(msg)); 

setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'Log event emitted!'); //Checks to see if there's changes to the logEvents file
}, 2000);