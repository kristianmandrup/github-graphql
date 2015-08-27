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
  description: String
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
    description: {
      type: GraphQLString,
      description: 'Organization description',
    },
    teams: {
      type: new GraphQLList(teamType),
      description: 'Organization teams',
    }
  })
});

//TODO: delete when this type will be done
// var orgs = {}
// var orgs.type = new GraphQLObjectType({
//   name: 'Organization',
//   description: 'Organization such as a company',
//   fields: () => ({
//     events: {
//       type: new GraphQLList(events.type),
//       description: 'The events of the organization.',
//       resolve: (org) => {
//         return org.events.fetch();
//       }
//     },
//     teams: {
//       type: new GraphQLList(teams.type),
//       description: 'The teams of the organization.',
//       resolve: (org) => {
//         return org.teams.fetch();
//       }
//     }
//     // ...
//   });
// });
