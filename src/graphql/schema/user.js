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
  htmlUrl: {
    type: GraphQLString,
    description: 'User html',
  },
  /*followersUrl: {
    type: GraphQLString,
    description: '',
  },
  subscriptionsUrl: {
    type: GraphQLString,
    description: '',
  },
  organizationsUrl: {
    type: GraphQLString,
    description: '',
  },
  reposUrl: {
    type: GraphQLString,
    description: '',
  },
  receivedEventsUrl: {
    type: GraphQLString,
    description: '',
  },*/
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
  hireable: {
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
  publicGists: {
    type: GraphQLInt,
    description: '',
  },
  createdAt: {
    type: GraphQLString,
    description: '',
  },
  updatedAt: {
    type: GraphQLString,
    description: '',
  },
  privateGists: {
    type: GraphQLInt,
    description: '',
  },
  privateGists: {
    type: GraphQLInt,
    description: '',
  },
  totalPrivateRepos: {
    type: GraphQLInt,
    description: '',
  },
  ownedPrivateRepos: {
    type: GraphQLInt,
    description: '',
  },
  diskUsage: {
    type: GraphQLInt,
    description: '',
  },
  collaborators: {
    type: GraphQLInt,
    description: '',
  },
  plan: new GraphQLObjectType({
    name: 'Plan',
    fields: {
      name: {type: GraphQLString},
      space: {type: GraphQLInt},
      collaborators: {type: GraphQLInt},
      privateRepos: {type: GraphQLInt}
    }
  })
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
