var Octokat = require('octokat');


var octo = new Octokat({
  username: "freddyucv",
  password: "password"
});

/*
octo.users.fetch().then(function(data){
  console.log("data " + JSON.stringify(data));

});
*/

/*

octo.orgs("freddyucvTest").fetch().then(function(data){
  console.log("data " + JSON.stringify(data));

});
*/

/*
octo.user.orgs.fetch().then(function(data){
  console.log("data " + JSON.stringify(data));

});
*/

octo.user.repos.fetch().then(function(data){
  console.log("data " + JSON.stringify(data));

});
