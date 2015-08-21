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
