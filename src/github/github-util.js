'use strict';

var Octokat = require('octokat');
var GithubUser = require('./user');

// require('./server');

/**
 * Util class to connect and manage Github server.
 *
 * @example
 * let Github = require( './src/github-graphql' );
 * let github = new Github();
 */
module.exports = class Github  {

  greet() {
    return 'hello';
  }

  /*
   * Github user's authentication
   *
   * @example
   * github.authenticate({username: "freddyucv", password: "password"});
   *
   * @param credentials.username
   * @param credentials.password
   */
  authenticate(credentials){
    this.octo = new Octokat({
      username: credentials.username,
      password: credentials.password
    });

    return this.octo.users(credentials.username).fetch().then(
            (data) => new GithubUser(data, this.octo)
          );
  }

  get user() {
    return this.authenticateUser;
  }

  /**
   * Return organization
   *
   * @example
   * github.org('freddyucvTest').then((data) => console.log(data))
   *
   * @param name Organization's name
   */
  org(name){
    return this.octo.orgs(name).fetch();
  }

};
