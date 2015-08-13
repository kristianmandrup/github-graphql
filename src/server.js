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

var app = koa();
app.use(logger());

var credentials = require('../config/credentials');

// add routes to github-graphql here!!!

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
