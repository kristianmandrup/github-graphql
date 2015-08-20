import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import orgQuery from './schemas/org';

let queries = [orgQuery];

let fields = {};

queries.forEach((item) => {
  for (var key in item) {
    let value = item[key];
    fields[key] = value;
  }
});

var graphQLGitHubSchema = new GraphQLSchema({
  query:  new GraphQLObjectType({
    name: 'Query',
    description: '',
    fields: () => fields
  })
});

export default graphQLGitHubSchema;
