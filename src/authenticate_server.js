import passport from 'koa-passport';
import _ from 'koa-route';
var LocalStrategy = require('passport-local').Strategy;

import Github from './github/github-util';
let github = new Github();

export default function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, {username: user.username, password: user.password});
  });

  passport.deserializeUser((user, done) => {
    github.authenticate(user).then((octo) => {
      user.octo = octo;
      done(null, user);
    });
  });

  passport.use('local', new LocalStrategy(
    (username, password, done) => {
      let credentials = {username: username, password: password};

      github.authenticate(credentials).then((octo) => {
        if (octo) {
          credentials.octo = octo;
          return done(null, credentials);
        }
        return done(null, false);
      });
    }
  ));

  app.use(_.post('/login', function*(next) {
    var ctx = this;
    yield passport.authenticate('local', function*(err, user, info) {
      if (err) {throw err;}
      if (user === false) {
        ctx.status = 401;
        ctx.body = {success: false};
      } else {
        yield ctx.login(user);
        ctx.body = {success: true};
      }
    }).call(this, next);
  }));
}
