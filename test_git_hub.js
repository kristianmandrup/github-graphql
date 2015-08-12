'use strict';

let Github = require( './src/github/github-util' );
let github = new Github();

github.authenticate({username: "freddyucv", password: "leones2009"});

//github.user.orgs.then((data) => {console.log(data);});
//github.org('freddyucvTest').then((data) => console.log(data));
//github.user.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
//ithub.user.collaboratorRepos.then((data) => data.forEach(elem => console.log(elem.name)));
//github.user.organizationMemberRepos.then((data) => data.forEach(elem => console.log(elem.name)));
github.user.repos.then((data) => data.forEach(elem => console.log(elem.name)));
