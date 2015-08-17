import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import Github from '../../github/github-util'
let github = new Github();

var orgType = new GraphQLObjectType({
  name: 'organization',
  description: 'Github organization',
  id: {
    type: new GraphQLNonNull(GraphQLString),
    description: 'The github server id of the org.',
  },
  login: {
    type: GraphQLString,
    description: '',
  },
  url: {
    type: GraphQLString,
    description: '',
  },
  reposUrl: {
    type: GraphQLString,
    description: '',
  },
  eventsUrl: {
    type: GraphQLString,
    description: '',
  },
  avatarUrl: {
    type: GraphQLString,
    description: '',
  },
  description: {
    type: GraphQLString,
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
  })
});
