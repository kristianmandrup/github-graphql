import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../src/server';

describe('Authentication: ', () => {
  let app;

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', (done) => {
    app.post('/login')
      .send({username: 'freddyucv', password: 'leones2009'})
      .expect(200, done);

  });

  it('Fail', (done) => {
    app.post('/login')
       .send({username: 'johndoe', password: 'secret'})
      .expect(401, done);
  });

});
