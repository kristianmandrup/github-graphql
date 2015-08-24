'use strict';

import Octokat from 'octokat';
import util from './util';

// require('./server');

/**
 * Util class to connect and manage Github server.
 *
 * @example
 * let Github = require( './src/github-graphql' );
 * let github = new Github();
 */
export default class Github {
  constructor() {
    this.octo = new Octokat();
  }

  /*
   * Github user's authentication
   *
   * @example
   * github.authenticate({username: "freddyucv", password: "password"});
   *
   * @param {Object} credentials username and password
  */
  authenticate(credentials) {
    this.octo = new Octokat({
      username: credentials.username,
      password: credentials.password
    });

    // we create a new GithubUser but where/how can we use it
    return this.octo.users(credentials.username)
    .fetch()
    .then((data) => new GithubUser(data, this.octo));
  }

  /**
   * Return organization
   *
   * @example
   * github.org('freddyucvTest').then((data) => console.log(data))
   *
   * @param {String} name Organization's name
   */
  /*org(name) {
    return this.octo.orgs(name)
      .fetch().then((org) => new Organization(org, this.octo));
  }*/

  // WTF!? This is fucking useless!
  userOrgs() {
    // should reuse octo from authenticate!!!

    // WTF!? why do we need this util here!?
    return this.octo.user.orgs.fetch()
      .then((orgs) => util('organization', orgs));
  }
};
