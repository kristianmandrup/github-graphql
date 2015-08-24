// var orgs = {};
// var orgs.query = new GraphQLObjectType({
//   name: 'OrganizationsQuery',
//   description: 'Get Organization by id (name)',
//   fields: {
//     orgs: {
//       type: orgs.type,
//       args: {
//         id: {
//           description: 'the id (name) of the organization',
//           type: new GraphQLNonNull(GraphQLString)
//         }
//       },
//       // organization for the entity
//       // ie. either an Organization or User
//       // this will return the Organization found as the
//       // first argument to each field of the orgs.type
//       resolve: (entity, {id}) => {
//         return entity.orgs(id).fetch();
//       }
//     }
//   }
// }
