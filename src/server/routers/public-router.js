const Router = require('koa-router');

export default function(app) {
  // make router available on app for convenience
  let router = new Router();

  // define public routes here...
  //TODO: delete it
  router.get('/testing', function * (){
      console.log('HERE!!!!!!!!!!');
      /*if (!this.session.n){
        this.session.n = 0;
      }else{
        this.session.n++;
      }*/

      console.log(JSON.stringify(this.session));
      console.log(JSON.stringify(this.req.user));
  });

  return router;
}
