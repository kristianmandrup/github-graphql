import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import userType from './user-type';

/*
type Team {
  id: String!
  name: String
  description: String
  members: [User] // or TeamMember?
  // ...
}
*/

export default new GraphQLObjectType({
  name: 'Team',
  description: 'Organization or user teams',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The github server id of the team.',
    },
    name: {
      type: GraphQLString,
      description: 'Organization description',
    },
    description: {
      type: GraphQLString,
      description: 'Organization description',
    },
    members: {
      type: new GraphQLList(userType),
      description: 'Teams members.',
      resolve: (team) => team.members.fetch()
    }
  })
});
