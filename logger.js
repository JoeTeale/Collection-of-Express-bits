const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg, text) {
        this.emit('message', { id: uuid.v4(), msg}, text);
    }
}
const Logger = require('./logger');

const logger = new Logger();

logger.on('message',(data,text) => console.log('Called Listner', data, text));

logger.log('hello world', 1);