import graphqlRequest from '../graphql-request';
import queries from '../../data/query-data';

describe('Schema: ', () => {
  describe('User', () => {
    beforeEach(() => {

    });

    it('gettin user by name', (done) => {
      let query = queries.getUserByName;
      let resultExpect = {
        user: [
          {
            id: '10408015',
            login: 'freddyucv',
            name: 'Freddy Rodriguez',
            company: 'NA',
            repos:[
              {name:'ajedresweb'},
              {name:'cashout'},
              {name:'hello-world'},
              {name:'lila'},
              {name:'sipml5'},
              {name:'softphone'},
              {name:'spanishpro'}
            ]
          }
        ]
      };

      graphqlRequest(query, resultExpect, done);
    });

  });
});
