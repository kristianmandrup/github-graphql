const Router = require('koa-router');

export default function(app) {
  // make router available on app for convenience
  let router = new Router();

  // define public routes here...
  // TODO: perhaps use ES7 async/await!!! :)
  router.get('/github', function*() {
    
  })

  return router;
}
