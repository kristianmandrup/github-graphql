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

  userOrgs(userName) {

    this.octo = new Octokat({
      username: userName,
      password: "leones2009"
    });


    return this.octo.user.orgs.fetch()
      .then((orgs) => {
          let config = {
            id: "id",
            login: "description"
          }

          let orgsResult = [];

          orgs.forEach(
            (item) => {
              let result = {};

              for (let key in item) {

                if(config[key]){
                  let value = item[key];
                  let newKey = config[key];
                  result[newKey] = value;
                }
              }

              orgsResult.push(result);
            }
          );

          return orgsResult;
      });
  }
};
