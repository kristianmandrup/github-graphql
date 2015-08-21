'use strict';
var Koa = require('koa');
var app = new Koa();

// TODO: read from config/server.json file
var path = require('path');
app.domain = ['localhost', '3000'].join(':');
app.rootPath = path.resolve(path.join(__dirname, '../'));

var server = require('./server');
server.mount(app);
server.routers(app);
server.middleware(app);

// Export composable app
module.exports = app;
