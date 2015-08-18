import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
} from 'graphql.type';

import Github from '../github/github-util';
let github = new Github();

var userType = new GraphQLObjectType({
  name: 'User',
  description: 'Github user',
  id: {
    type: new GraphQLNonNull(GraphQLString),
    description: 'The github server id of the user.',
  },
  login: {
    type: GraphQLString,
    description: 'The login of the user.',
  },
  avatarUrl: {
    type: GraphQLString,
    description: 'User avatar URL',
  },
  type: {
    type: GraphQLString,
    description: '',
  },
  name: {
    type: GraphQLString,
    description: '',
  },
  company: {
    type: GraphQLString,
    description: '',
  },
  blog: {
    type: GraphQLString,
    description: '',
  },
  location: {
    type: GraphQLString,
    description: '',
  },
  email: {
    type: GraphQLString,
    description: '',
  },
  bio: {
    type: GraphQLString,
    description: '',
  },
  publicRepos: {
    type: GraphQLInt,
    description: '',
  },
  // ie. member since
  createdAt: {
    type: GraphQLString,
    description: '',
  }
  totalPrivateRepos: {
    type: GraphQLInt,
    description: '',
  },
  ownedPrivateRepos: {
    type: GraphQLInt,
    description: '',
  }
});

/*
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      args: {
        userName: {
          description: '',
          type: GraphQLString
        }
      },
      resolve: (root, {userName}) => github.authenticate(userName),
    }

});

*/
