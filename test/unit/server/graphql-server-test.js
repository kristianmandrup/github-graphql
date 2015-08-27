import request from 'supertest-as-promised';
import server from '../../../src';
import { stringify } from 'querystring';
import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import queries from '../data/query-data';

describe('Graphql server: ', () => {

  let app;

  beforeEach(() => {
    app = agent(server);
  });

  describe('Organization ', () => {
    it('Getting organization description by username ', (done) => {
      let query = queries.orgsMethod;
      let resultExpect = {orgs: [{login: 'freddyucvTest'}]};

      app.get('/login')
        .send({username: 'freddyucv', password: 'leones2009'})
        .expect(200)
        .end((err, res) =>  {
          if (err) {throw err;}

          //let url = '/graphql?' + stringify({query: query});
          let url = '/testing';
          app.get(url)
            .expect(200)
            .end((err, res) => {
              if (err) {
                throw err;
              }

              expect(res.body.data).to.deep.equal(resultExpect);
              done();
            });
        });

    });
  });
});
