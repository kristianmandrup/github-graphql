import request from 'supertest-as-promised';
import server from '../../../src/server';
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

      let resultExpect = {
        'orgs': [
            {'description': 'freddyucvTest'}
        ]
      };

      app.post('/login')
        .send({username: 'freddyucv', password: 'leones2009'})
        .expect(200)
        .end((err, res) =>  {
          if (err) {throw err;}

          sendGraphqlQuery({
            app: app,
            query: query,
            resultExpect: resultExpect,
            donde: done
          });

        });
    });
  });
});
