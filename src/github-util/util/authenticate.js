import Octokat from 'octokat';
import request from 'request';
import path from 'path';

export default function (credentials) {
  let credentialsFilePath = path.join(global.appRoot, 'config/credentials.js');
  let applicationCredentials = require(credentialsFilePath);

  let authData = `${credentials.username}:${credentials.password}`;
  let auth = `Basic ${new Buffer(authData).toString('base64')}`;
  let url = 'https://api.github.com/authorizations';

  return new Promise((resolve, reject) => {
    var options = {
      method: 'POST',
      url: 'https://api.github.com/authorizations',
      headers:
       {
         'content-type': 'application/json',
         authorization: auth,
         'User-Agent': 'server'
       },
      body:
       {
         'client_id': applicationCredentials.clientID,
         'client_secret': applicationCredentials.secret,
         scopes: ['public_repo', 'read:org'],
         note: 'admin script'
       },
      json: true};

    request(options, function(err, res, body) {
      if (err) {reject(err);}

      if (body.token) {
        let octo = new Octokat({
          token: body.token
        });

        resolve(octo.user.fetch().then(() => body.token, () => null));
      }else {
        return resolve(null);
      }
    });
  });
}
