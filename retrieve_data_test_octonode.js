var github = require('octonode');

var client = github.client({
  username: 'freddyucv',
  password: 'password'
});

client.get('/user', {}, function (err, status, body, headers) {
  //console.log("Body " + JSON.stringify(body));
});

var ghme           = client.me();

ghme.orgs(function (err, data, headers){
  console.log("orgs " + JSON.stringify(data));
});


var ghorg = client.org('freddyucvTest');


console.log("org " + JSON.stringify(ghorg));
