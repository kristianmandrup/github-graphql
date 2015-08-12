'use strict';

import Organization from './organization' ;

module.exports = class GithubUser  {
/**
  * Create a GithubUser
  *
  * @example
  * new GithubUser({username: "freddyucv", password: "password"});
  *
  * @param credentials.username
  * @param credentials.password
  */
 constructor(credentials, octo){
   this.username = credentials.username;
   this.password = credentials.password;

   this.octo = octo;
 }

 /**
  * Return all authenticate user's organizations
  *
  * @example
  * github.user.orgs.then((data) => data.forEach( (item) => console.log(item.info)) )
  */
 get orgs(){
   return this.octo.user.orgs.fetch().then(
     (data) => {
                  data.forEach( (item, index, array) => array[index] = new Organization(item));
                  return data;
               }
   );
 }

 /**
  * Return all repositories that are owned by the authenticated user.
  *
  * @example
  * github.user.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
 get ownerRepos(){
   return this.octo.user.repos.fetch({affiliation: "owner"});
 }

 /**
  * Return all repositories that the user has been added to as a collaborator.
  *
  * @example
  * github.user.collaboratorRepos.then((data) => data.forEach(elem => console.log(elem.name)));
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
  * github.user.organizationMemberRepos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
 get organizationMemberRepos(){
   return this.octo.user.repos.fetch({affiliation: "organization_member"});
 }


 /**
  * Return a list repositories that are accessible to the authenticated user
  *
  * @example
  * github.user.repos.then((data) => data.forEach(elem => console.log(elem.name)));
  */
 get repos(){
   return this.octo.user.repos.fetch();
 }
}
