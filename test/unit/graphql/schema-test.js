import { graphql } from 'graphql';
import schema from '../../../src/graphql/schemas';
import Octokat from 'octokat';

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

      let resultExpect = { orgs: [ { description: 'freddyucvTest' } ] };

      let user = {};

      //TODO: change by a fake github server
      user.octo =new Octokat({
        username: 'freddyucv',
        password: 'leones2009'
      });

      graphql(schema, query, user).then((data) =>
        {
          done();
          expect(data).to.deep.equal(resultExpect);
        }
      );
    });

  });
});
