//TODO: delete when passports deserializeUser work (i think)

let github = {};

github.authenticate = require('./util/authenticate');
github.org = require('./util/organization');

export default github;
