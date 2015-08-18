import {
  GraphQLSchema
} from 'graphql';

import orgType from './org';

export var graphQLGitHubSchema = new GraphQLSchema({
  query: orgType
});
