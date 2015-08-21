import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../src';

function user(name, password) {
  return {username: name, password: password};
}

describe('Authentication: ', () => {
  let app;
  var users = {
    valid: user('freddyucv', 'leones2009'),
    invalid: user('johndoe', 'secret')
  };

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', function*() {
    var res = yield app.post('/login').send(users.valid).end();
    expect(res).to.eql(200);

  });

  it('Fail', function*() {
    var res = yield app.post('/login').send(users.invalid).end();
    expect(res).to.eql(401);
  });

});
