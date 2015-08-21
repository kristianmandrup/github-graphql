import passport from 'koa-passport';
GithubStrategy = require('passport-github').Strategy;

export default function(app) {
  var credentialsFilePath = path.join(app.rootPath, 'config/credentials');
  var credentials = require(credentialsFilePath);

  passport.use(new GithubStrategy({
      clientID: credentials.clientID,
      clientSecret: credentials.secret,
      callbackURL: `http://${app.domain}/auth/github/callback`
    },
    function(accessToken, refreshToken, profile, done) {
      //Based on profile return from Github, find existing user
      let user = profile;

      //Return user model
      return done(null, user);
    })
  );

  passport.serializeUser(function(user, done) {
    // TODO: store in Redis
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    // TODO: load from Redis
    done(null, user);
  });
  return passport;
}
