const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter =  new MyEmitter();

//Event listener 
myEmitter.on('event', () => console.log('Event fired!'));
myEmitter.on('event', (...stuff) => console.log('nothing Fired', stuff));

//init event 
myEmitter.emit('event', 1, 2)
