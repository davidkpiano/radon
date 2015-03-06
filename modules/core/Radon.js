

class Radon {
    constructor() {
        this.handlers = [];
    }
    style(foo) {
        for (var i = 0; i < this.handlers.length; i++) {
            var handler = this.handlers[i];

            handler.call(null, foo);
        }
    }
    subscribe(handler, context) {
        this.handlers.push(handler.bind(context));
    }
}

module.exports = new Radon();