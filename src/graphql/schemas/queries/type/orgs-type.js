import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import teamType from './team-type';

/*
type Organization {
  id: String!
  login: String
  teams: [Team]
  events: [Event]
}
*/

export default new GraphQLObjectType({
  name: 'organization',
  description: 'Organization such as a company',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The github server id of the org.',
    },
    login: {
      type: GraphQLString,
      description: 'Organization description',
    },
    teams: {
      type: new GraphQLList(teamType),
      description: 'The teams of the organization.',
      resolve: (org) => org.teams.fetch()
    }/*,
    events:{
      type: new GraphQLList(teamType),
      description: 'The teams of the organization.',
      resolve: (org) => org.teams.fetch();
    }*/
  })
});
