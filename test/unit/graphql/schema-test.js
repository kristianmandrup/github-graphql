import { graphql } from 'graphql';
import schema from '../../../src/graphql/schemas';
import Octokat from 'octokat';
import chai from 'chai';

describe('Schema: ', () => {
  describe('Organization', () => {
    beforeEach(() => {

    });

    it('all organizations description', (done) => {
      let query = `query orgs_query {
                     orgs(userName: "freddyucv") {
                       description
                     }
                   }`;


      let resultExpect = {
        orgs: [
          {
            description: 'freddyucvTest'
          }
        ]
      };

      let user = {};

      //TODO: change by a fake github server
      user.octo = new Octokat({
        username: 'freddyucv',
        password: 'leones2009'
      });

      graphql(schema, query, user).then((data) => {
        done();
        expect(data.data).to.deep.equal(resultExpect);
      });
    });

    it('Get Organization by id (name)', (done) => {
      let query = `query orgs_query {
                     org(description: "freddyucvTest") {
                       name
                     }
                   }`;


      let resultExpect = {
        "org":[
          {"name":"Owners"},
          {"name":"team_test"}
        ]
      };

      let user = {};

      //TODO: change by a fake github server
      user.octo = new Octokat({
        username: 'freddyucv',
        password: 'leones2009'
      });

      graphql(schema, query, user).then((data) => {
        done();
        chai.expect(data.data).to.deep.equal(resultExpect);
      });
    });


  });
});
