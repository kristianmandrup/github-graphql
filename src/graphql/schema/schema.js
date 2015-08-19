import {
  GraphQLSchema
} from 'graphql';

import queryType from './org';

var graphQLGitHubSchema = new GraphQLSchema({
  query: queryType
});

export default graphQLGitHubSchema;
