var Octokat = require('octokat');

describe('Octokat users', () => {
  var octo;
  before(() => {
    octo = new Octokat({
      username: 'freddyucv',
      password: 'password'
    });
  });

  describe('#fetch', () => {
    it('fetches users', () => {
      octo.user.orgs.fetch().then(function(data) {
        console.log('data ' + JSON.stringify(data));
        expect(data).to.not.eql({});
      });
    });
  });
});
