import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import EventType from './event-type';
import RepoType from './repo-type';

/*
type User {
  id: String!
  login: String!
  name: String
  company: String
  repos: [Repo]
  events: [Event]
  teams: [Team]
}
*/

export default new GraphQLObjectType({
  name: 'User',
  description: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the user.'
    },
    login: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The login of the user.'
    },
    name: {
      type: GraphQLString,
      description: 'The full name of the user.'
    },
    company: {
      type: GraphQLString,
      description: 'The company of the user.'
    },
    /*
    events: {
      type: new GraphQLList(EventType),
      description: 'The events of the user, or an empty list if they have none.',
      resolve: (user) => {
        return user.events.fetch();
      }
    },*/
    repos: {
      type: new GraphQLList(RepoType),
      description: 'The repos of the user, or an empty list if they have none.',
      resolve: (user) => user.repos.fetch()
    }
  })
});
