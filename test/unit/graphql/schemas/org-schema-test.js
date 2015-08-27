import graphqlRequest from '../graphql-request';
import queries from '../../data/query-data';

describe('Schema: ', () => {
  describe('Organization', () => {
    beforeEach(() => {

    });

    it('all organizations description', (done) => {
      let query = queries.orgsMethod;
      let resultExpect = {
        orgs: [
          {
            login: 'freddyucvTest'
          }
        ]
      };

      graphqlRequest(query, resultExpect, done);
    });

    it('Get Organization by id (name)', (done) => {
      let query = queries.orgMethod;

      let resultExpect = {
        org: [
          {
            login: 'freddyucvTest',
            teams: [
              {'name': 'Owners'},
              {'name': 'team_test'}
            ]
          }
        ]
      };

      graphqlRequest(query, resultExpect, done);
    });

  });
});
