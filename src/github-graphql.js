'use strict';

var Octokat = require('octokat');

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
  }

  /**
   * Return all authenticate user's organizations
   *
   * @example
   * github.userOrgs.then( (data) => console.log(data));
  */
  get userOrgs(){
    return this.octo.user.orgs.fetch();
  }


  /**
   * Return organization
   *
   * @param name Organization's name
  */
  org(name){
    return this.octo.orgs(name).fetch();
  }
};
