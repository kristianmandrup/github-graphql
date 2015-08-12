'use strict';

import Github from './src/github/github-util' ;

let github = new Github();

github.authenticate({username: "freddyucv", password: "leones2009"})
  .then(
    (user) => user.orgs.then((data) => data.forEach( (item) => console.log(item.info)) )
  );

//github.org('freddyucvTest').then((data) => console.log(data));
//github.user.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
//ithub.user.collaboratorRepos.then((data) => data.forEach(elem => console.log(elem.name)));
//github.user.organizationMemberRepos.then((data) => data.forEach(elem => console.log(elem.name)));
//github.user.repos.then((data) => data.forEach(elem => console.log(elem.name)));
