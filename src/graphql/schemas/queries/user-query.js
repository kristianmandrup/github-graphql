// var user.query = new GraphQLObjectType({
//   name: 'UserQuery',
//   description: 'Get User by id (name)',
//   fields: {
//     user: {
//       type: user.type,
//       args: {
//         id: {
//           description: 'the id (username) of the user',
//           type: new GraphQLNonNull(GraphQLString)
//         }
//       },
//       // this will return the User found as the first argument to each field of the user.type!!!
//       resolve: (entity, {id}) => {
//         entity = entity || octo;
//         return entity.users.user(id);
//       }
//     }
//   }
// }
