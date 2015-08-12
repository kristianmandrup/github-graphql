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
   * @example
   * github.org('freddyucvTest').then((data) => console.log(data))
   *
   * @param name Organization's name
  */
  org(name){
    return this.octo.orgs(name).fetch();
  }

  /**
   * Return all repositories that are owned by the authenticated user.
   *
   * @example
   * github.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
  get ownerRepos(){
    return this.octo.user.repos.fetch({affiliation: "owner"});
  }

  /**
   * Return all repositories that the user has been added to as a collaborator.
   *
   * @example
   * github.collaboratorRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
  get collaboratorRepos(){
    return this.octo.user.repos.fetch({affiliation: "collaborator"});
  }

  /**
   * Return all Repositories that the user has access to through being a member
   * of an organization. This includes every repository on every team that the
   * user is on.
   *
   * @example
   * github.organizationMemberRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
  get organizationMemberRepos(){
    return this.octo.user.repos.fetch({affiliation: "organization_member"});
  }


  /**
   * Return a list repositories that are accessible to the authenticated user
   *
   * @example
   * github.userRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
  get userRepos(){
    return this.octo.user.repos.fetch();
  }

};
