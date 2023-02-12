const express = require('express');
const router = require('./routes/index.js');

class App {
    constructor(){
        this.server = express();
        this.routes();
    }

    routes() {
        router(this.server);
    }
}

module.exports = new App().server;