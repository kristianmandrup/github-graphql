import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
} from 'graphql.type';

import Github from '../github/github-util'
let github = new Github();

var orgType = new GraphQLObjectType({
  name: 'organization',
  description: 'Github organization',
  id: {
    type: new GraphQLNonNull(GraphQLString),
    description: 'The github server id of the org.',
  },
  login: {
    type: new GraphQLString(GraphQLString),
    description: '',
  },
  url: {
    type: new GraphQLString(GraphQLString),
    description: '',
  },
  reposUrl: {
    type: new GraphQLString(GraphQLString),
    description: '',
  },
  eventsUrl: {
    type: new GraphQLString(GraphQLString),
    description: '',
  },
  avatarUrl: {
    type: new GraphQLString(GraphQLString),
    description: '',
  },
  description: {
    type: new GraphQLString(GraphQLString),
    description: '',
  }
});


export var orgType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    org: {
      type: userType,
      args: {
        orgName: {
          description: '',
          type: GraphQLString
        }
      },
      resolve: (root, { orgName }) => github.org(orgName),
    }
});
