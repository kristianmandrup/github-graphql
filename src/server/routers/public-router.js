const Router = require('koa-router');

export default function(app) {
  // make router available on app for convenience
  let router = new Router();

  // define public routes here...
  router.get("/testing", function*(){
    console.log(this.session);
  });

  return router;
}
