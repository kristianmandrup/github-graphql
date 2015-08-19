import github from '../../../src/server';

import { graphql } from 'graphql';
import schema from '../../../src/graphql/schema/schema';

describe('Schema: ', () => {
  describe('Organization', () => {
    beforeEach(() => {
      // spy(github, 'greet');
      // github.greet();
    });

    it('all organizations description', () => {
        let query = `query orgs_query {
                      orgs(userName: "freddyucv") {
                        description
                      }
                    }`;


        graphql(schema, query).then((data) => console.log(JSON.stringify(data)));
    });

  });
});
