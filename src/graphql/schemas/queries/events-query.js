// var events.query = new GraphQLObjectType({
//   name: 'EventsQuery',
//   description: 'Get Events by type',
//   fields: {
//     events: {
//       type: new GraphQLList(events.type),
//       args: {
//         id: {
//           description: 'The type of event',
//           type: GraphQLString
//         }
//       },
//       description: 'The events',
//       // the events for the entity, such as User, Organization or Team
//       resolve: (entity, {type}) => {
//         entity = entity || octo;
//         return entity.events(type).fetch();
//       }
//     }
//   }
// }
