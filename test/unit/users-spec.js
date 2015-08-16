var Octokat = require('octokat');
var octo = new Octokat({
  username: 'freddyucv',
  password: 'password'
});

describe('Octokat users', () => {
  describe('#fetch', () => {
    it('fetches users', () => {
      octo.users.fetch().then(function(data) {
        console.log('data ' + JSON.stringify(data));
        expect(data).to.not.eql({});
      });
    });
  });
});
