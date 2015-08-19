import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql';

import orgType from './org';

var orgQuery = new GraphQLObjectType({
    name: 'Query',
    description: '',
    fields: () => ({
      orgs: {
        type: new GraphQLList(orgType),
        args: {
          userName: {
            description: '',
            type: GraphQLString
          }
        },
        resolve: (root, {userName}) => github.userOrgs(userName)
      }
    })
});

var graphQLGitHubSchema = new GraphQLSchema({
  query: orgQuery
});

export default graphQLGitHubSchema;
