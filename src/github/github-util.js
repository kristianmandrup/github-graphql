'use strict';

var Octokat = require('octokat');
import GithubUser from './user';
import Organization from './organization' ;

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

  constructor(){
    this.octo = new Octokat();
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
      let octo = new Octokat({
        username: credentials.username,
        password: credentials.password
      });

      return octo.users(credentials.username).fetch().then(
              (data) => new GithubUser(data, octo)
            );
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
    return this.octo.orgs(name).fetch().then(
      (org) => new Organization(org, this.octo)
    );
  }

};
