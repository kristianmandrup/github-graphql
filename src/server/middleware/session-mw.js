// See: http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with_7.html
const session = require('koa-sess');
const redis = require('koa-redis');

export default function(app) {
  // TODO: use key name loaded from config file
  app.keys = ['payments'];

  // TODO: load from config file!
  const maxAge = 1000 * 30;

  app.use(session({
    cookie: {maxAge: maxAge},
    store : redis()
  }));
  return app;
}
