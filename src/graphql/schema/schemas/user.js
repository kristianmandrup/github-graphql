import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
} from 'graphql.type';

/*
  type User {
    id: String!
    login: String
    repos: [Repo]
    events: [Event]
    teams: [Team]
  }
*/

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
  }/*,
  friends: {
    type: new GraphQLList(characterInterface),
    description: 'The friends of the character, or an empty list if they ' +
                 'have none.',
  },*/
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
