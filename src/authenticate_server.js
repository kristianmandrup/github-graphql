import passport from 'koa-passport';
import _ from 'koa-route';
var LocalStrategy = require('passport-local').Strategy;

export default function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    console.log("here 2");
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use('local', new LocalStrategy(
    (username, password, done) => {
      console.log('here 1 ' + username + ' '+  password);

       if (username == 'freddyucv' && password == 'leones2009') {
         return done(null, {username: username, password: password});
       }

       return done(null, false);
    }
  ));

  app.use(_.post('/login', passport.authenticate('local'),
    (req, res) => {
      console.log('AQUI 3');
    }
  ));

}
