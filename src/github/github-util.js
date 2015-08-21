'use strict';

import Octokat from 'octokat';
import util from './github_elements_util';

// require('./server');

/**
 * Util class to connect and manage Github server.
 *
 * @example
 * let Github = require( './src/github-graphql' );
 * let github = new Github();
 */
export default class Github {

  /*
   * Github user's authentication
   *
   * @example
   * github.authenticate({username: "freddyucv", password: "password"});
   *
   * @param {Object} credentials username and password
  */
  authenticate(credentials) {

    var octo = new Octokat({
      username: credentials.username,
      password: credentials.password
    });

    return octo.user.fetch().then((octo) => octo, () => null);
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

  userOrgs(userName, userLogged) {
    console.log('ROOT ' + JSON.stringify(userLogged));

    return octo.user.orgs.fetch()
      .then((orgs) => util('organization', orgs));
  }
};
