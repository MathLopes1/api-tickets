const express = require('express');
const router = require('./routes/index.js');

class App {
    constructor(){
        this.server = express();
        this.middleware();
        this.routes();
    }

    routes() {
        router(this.server);
    }

    middleware() {
        this.server.use(express.json())
    }
}

module.exports = new App().server;