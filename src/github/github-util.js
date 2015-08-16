'use strict';

import Octokat from 'octokat';
import GithubUser from './user';
import Organization from './organization';

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

    return this.octo.users(credentials.username).fetch().then((data) => new GithubUser(data, this.octo));
  }

  /**
   * Return organization
   *
   * @example
   * github.org('freddyucvTest').then((data) => console.log(data))
   *
   * @param {String} name Organization's name
   */
  org(name) {
    return this.octo.orgs(name)
      .fetch().then((org) => new Organization(org, this.octo));
  }
};
