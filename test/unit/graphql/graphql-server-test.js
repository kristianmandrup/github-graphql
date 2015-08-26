import request from 'supertest-as-promised';
import server from '../../../src';
import { stringify } from 'querystring';
import agent from 'supertest-koa-agent';
import {expect} from 'chai';
import sendGraphqlQuery from './sendGraphqlQuery';

describe('Graphql server: ', () => {

  let app;

  beforeEach(() => {
    app = agent(server);
  });

  describe('Organization ', () => {
    it('Getting organization description by username ', (done) => {
      let query = `query orgs_query {
                    orgs(userName: "freddyucv") {
                      description
                    }
                  }`;

      let resultExpect = {orgs: [{description: 'freddyucvTest'}]};

      app.get('/login')
        .send({username: 'freddyucv', password: 'leones2009'})
        .expect(200)
        .end((err, res) =>  {
          if (err) {throw err;}

          let url = '/graphql?' + stringify({query: query});

          app.get(url)
            .expect(200)
            .end((err, res) => {
              if (err) {
                throw err;
              }

              expect(res.body.data).to.deep.equal(resultExpect);
              done();
            });

          //TODO: use reusing function
          /*sendGraphqlQuery({
            app: app,
            query: query,
            resultExpect: resultExpect,
            cookies: cookies,
            donde: done
          });*/
        });

    });
  });
});
