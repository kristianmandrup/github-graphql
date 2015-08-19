import request from 'supertest-as-promised';
import server from '../../../src/server';
import { stringify } from 'querystring';
import agent from 'supertest-koa-agent';
import {expect} from 'chai';

describe('Server: ', () => {

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
        "orgs":[
            {"description":"freddyucvTest"}
        ]
      };

      var url = '/graphql?' + stringify({query: query})

      app.get(url).expect(200)
        .end((err, res) => {
          if (err) throw err;

          expect(res.body.data).to.deep.equal(resultExpect);
          done();
        });

    });
  });
});
