import Router from 'koa-router';

// This is the Router used by Github GraphQL
export default function(app) {
  const securedRouter = new Router();

  //Middleware: authed
  function *authed(next) {
    if (this.req.isAuthenticated()) {
      yield next;
    } else {
      //Set redirect path in session
      this.session.returnTo = this.session.returnTo || this.req.url;
      this.redirect('/auth/github');
    }
  }

  securedRouter.get('/app', authed, function*() {
    var userReq = JSON.stringify(this.req.user, null, '\t');
    this.body = `Secured Zone: \n${userReq}`;
  });

  return securedRouter;
}
