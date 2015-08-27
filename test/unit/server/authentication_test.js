import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../../src';

describe('Authentication: ', () => {
  let app;
  let users = require('../data/users-data.js');

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', function(done) {
    app.get('/login').send(users.valid).expect(200, done);
  });

  it('Fail', function(done) {
    app.get('/login').send(users.invalid).expect(401, done);
  });

});
