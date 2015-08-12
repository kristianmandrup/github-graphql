'use strict';

let Github = require( './src/github-graphql' );
let github = new Github();

github.authenticate({username: "freddyucv", password: "leones2009"});

//github.userOrgs.then((data) => {console.log(data);});
//github.org('freddyucvTest').then((data) => console.log(data));
github.ownerRepos.then((data) => data.forEach(elem => console.log(elem.name)));
