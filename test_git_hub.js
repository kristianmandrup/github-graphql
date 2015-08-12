'use strict';

import Github from './src/github/github-util' ;

let github = new Github();

/*
 * user authenticate
*/
/*github.authenticate({username: "freddyucv", password: "leones2009"})
  .then(
    (user) => user.orgs.then((data) => data.forEach( (item) => console.log(item.info)) )
  );*/

/*
 * Get organization info
 */
 /*
github.org('freddyucvTest').then((org) => console.log(org.info));
*/

/**
 * Get repos
 */
github.authenticate({username: "freddyucv", password: "leones2009"})
 .then(
   (user) => {
     user.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
     //user.collaboratorRepos.then((data) => data.forEach(elem => console.log(elem.name)));
     //user.organizationMemberRepos.then((data) => data.forEach(elem => console.log(elem.name)));
     //user.repos.then((data) => data.forEach(elem => console.log(elem.name)));
   }
 );
