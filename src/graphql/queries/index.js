import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import orgQuery from './schema/org';

let queries = [orgQuery];
let fields = {};

for(let item of queries) {
  for (var key in item) {
    fields[key] = item[key];
  }
}

var graphQLGitHubSchema = new GraphQLSchema({
  query:  new GraphQLObjectType({
    name: 'Query',
    description: 'Github Query',
    fields: () => fields
  })
});

export default graphQLGitHubSchema;
