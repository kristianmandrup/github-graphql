import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../src/server';

describe('Authentication: ', () => {
  let app;

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', function*() {
    var res = yield app.post('/login')
      .send({username: 'freddyucv', password: 'leones2009'}).end();

    expect(res).to.eql(200);

  });

  it('Fail', (done) => {
    app.post('/login')
       .send({username: 'johndoe', password: 'secret'})
      .expect(401, done);
  });

});
