import passport from 'koa-passport';
import _ from 'koa-route';
GithubStrategy = require('passport-github').Strategy;

// PLEASE!!!!
// READ THIS!!!
// ===================================================================
// Koajs Tutorial - Authenticate with PassportJs and GitHub OAuth2 API
// ===================================================================
// http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with.html

// And this!!!
// ===================================================================
// Koajs Tutorial - Authenticate with Persistent Session using Redis
// ===================================================================
// http://www.zev23.com/2014/03/koajs-tutorial-authenticate-with_7.html

// Looks like you used this example?
// https://github.com/rkusa/koa-passport-example/blob/master/auth.js

// Combining koa-passport with koa-router (getting user data)
// ===================================================================
// http://stackoverflow.com/questions/29326955/combining-koa-passport-with-koa-router-getting-user-data
import passport from './auth/passport';

export default function(app) {
  var passport = passport(app);

  app.use(passport.initialize());
  app.use(passport.session());

  app.router.get('/auth/github', passport.authenticate('github', {scope: ['user','repo']}));

  app.router.get('/auth/github/callback',
    passport.authenticate('github', {successRedirect: '/', failureRedirect: '/'})
  );
}
