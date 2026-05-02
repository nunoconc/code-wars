// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export has the same interface.

export default class EventEmitter {

    eventHandlers = {};

    constructor() {}

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {

        this.eventHandlers[eventName] = this.eventHandlers[eventName] || {};
        const eventFunc = (...args) => {
            listener(...args);
        }

        const signature = listener.toString();

        const storedEvent = this.eventHandlers[eventName][signature] || {
            func: eventFunc,
            times: 0
        };

        this.eventHandlers[eventName][signature] = {
            ...storedEvent,
            times: storedEvent.times + 1
        }

        return this;
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        const storedEvent = this.eventHandlers[eventName]?.[listener.toString()];
        const signature = listener.toString();

        if (storedEvent) {
            if (storedEvent.times > 1) {
                this.eventHandlers[eventName][signature] = {
                    ...storedEvent,
                    times: storedEvent.times - 1
                }
            } else {
                delete this.eventHandlers[eventName][signature];
            }
        }

        return this;
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        let counter = 0;

        if (!this.eventHandlers[eventName] || !Object.getOwnPropertyNames(this.eventHandlers).includes(eventName)) {
            return false;
        }

        const events = Object.values(this.eventHandlers[eventName]);

        events.forEach((func) => {

            const storedFunc = func.func;

            for (let i = 0; i < func.times; i++) {
                storedFunc(...args);
            }

            counter += 1;
        });

        return counter > 0;
    }
}


const emitter = new EventEmitter();

let num = 1;
function double() {
    num *= 2;
}

emitter.on('double', double);
emitter.emit('double');
console.log(num, 2);

emitter.on('double', double);
emitter.emit('double');
console.log(num, 8);

emitter.off('double', double);
emitter.emit('double');
console.log(num, 16);

emitter.off('double', double);
emitter.emit('double');
console.log(num, 16);
