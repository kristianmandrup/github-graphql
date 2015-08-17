'use strict';

import Organization from './organization' ;
import GithubElement from './github_element.js' ;

export default class GithubUser extends GithubElement {
  /**
  * Create a GithubUser
  *
  * @example
  * new GithubUser({username: 'freddyucv', password: 'password'});
  *
  * @param {Object} credentials username and password
  * @param {Octokat} octokat instance
  */
  constructor(data, octokat) {
    super(data, octokat);
  }

 /**
  * Return all authenticate user's organizations
  *
  * @example
  * github.user.orgs.then((data) => data.forEach( (item) => console.log(item.info)) )
  */
  get orgs() {
    return this.octo.user.orgs
    .fetch().then((data) => {
      data.forEach((item, index, array) => array[index] = new Organization(item, this.octo));
      return data;
    });
  }

  /**
  * Return all repositories or by affiliation
  *
  * @example
  * github.user.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
  repos(affiliation) {
    var args = affiliation ? {affiliation: affiliation} : undefined;
    return this.octo.user.repos.fetch(args);
  }
}
