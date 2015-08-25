// See: http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with_7.html
import session from 'koa-session';

export default function(app) {
  // TODO: use key name loaded from config file
  app.keys = ['payments'];

  // TODO: load from config file!
  const maxAge = 1000 * 30;
  app.use(session(app));

  return app;
}
