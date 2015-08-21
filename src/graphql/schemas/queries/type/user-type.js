import EventType from './event-type';
import RepoType from './repo-type';

export default new GraphQLObjectType({
  name: 'User',
  description: 'User',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The full name of the user.',
      resolve: (user) => {
        return user.name;
      }
    },
    events: {
      type: new GraphQLList(EventType),
      description: 'The events of the user, or an empty list if they have none.',
      resolve: (user) => {
        return user.events.fetch();
      }
    },
    repos: {
      type: new GraphQLList(RepoType),
      description: 'The repos of the user, or an empty list if they have none.',
      resolve: (user) => {
        return user.repos.fetch();
      }
    },
    repo: {
      type: repos.type,
      description: 'A repo of the user by name',
      args: {
        id: {
          name: 'name',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      // will be called with the user resolved by the UserQuery
      // ie. from user(id: 'username')
      resolve: (user) => {
        return user.repos.fetch();
      }
    }
  })
});
