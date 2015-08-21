import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import server from '../../src/server';

describe('Authentication: ', () => {
  let app;

  beforeEach(() => {
    app = agent(server);
  });

  it('Success', function(done) {
    app.post('/login')
      .send({username: 'freddyucv', password: 'leones2009'})
      .expect(200)
      .end((err, res) =>  {
        if (err) {throw err;}
        expect({success: true}).to.deep.equal(res.body);
        done();
      });
  });

  it('Fail', function(done)  {
    app.post('/login')
      .send({username: 'johndoe', password: 'secret'})
      .expect(401)
      .end((err, res) =>  {
        if (err) {throw err;}
        expect({success: false}).to.deep.equal(res.body);

        done();
      });

  });

});
