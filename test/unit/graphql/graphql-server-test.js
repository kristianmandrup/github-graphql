import request from 'supertest-as-promised';
import server from '../../../src/server';
import { stringify } from 'querystring';
import agent from 'supertest-koa-agent';

describe('Server: ', () => {

  let app;

  beforeEach(() => {
    app = agent(server);
  });

  describe('Organization ', () => {
    describe('Getting organization description by username ', () => {
      let query = `query orgs_query {
                    orgs(userName: "freddyucv") {
                      description
                    }
                  }`;

      var url = '/graphql?' + stringify({query: query})

      console.log(url);

      app.get(url).expect(200)
        .end((err, res) => {
          if (err) throw err;

          console.log(JSON.stringify(res.body));
        });
    });
  });
});
