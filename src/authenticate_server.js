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
          return done(null, {username: username, password: password});
        }
        return done(null, false);
      });
    }
  ));

  app.use(_.post('/login', passport.authenticate('local'),
    (req, res) => {
      console.log('/login');
    }
  ));
}
