/**
 * payments
 */

var path        = require('path');
var koa         = require('koa');
var logger      = require('koa-logger');
var serve       = require('koa-static');
var route       = require('koa-route');
var router      = require('koa-router');
var mount       = require('koa-mount');
var graphqlServer = require('./graphql-server');
var authenticateServer = require('./authenticate_server');
var bodyParser = require('koa-bodyparser');
// sessions
var session = require('koa-session')

var app = koa();

app.use(bodyParser());
app.use(logger());

var credentials = require('../config/credentials');

//session
app.keys = [credentials.privateKey]
app.use(session(app))

// add routes to github-graphql here!!!
app.use(graphqlServer);

authenticateServer(app);

// Custom 404
app.use(function*(next) {
  yield next;
  if (this.body || !this.idempotent) {
    return;
  }
  this.status = 404;
});

// Serve the frontend
app.use(serve(path.join(__dirname, '../public')));

// Export composable app
module.exports = app;
