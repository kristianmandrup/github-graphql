// var repo = {};
// var repo.query = new GraphQLObjectType({
//   name: 'RepoQuery',
//   description: 'A Query to get a single repo by id (name)',
//   fields: {
//     repos: {
//       type: repos.type,
//       args: {
//         id: {
//           description: 'the id (name) of the repo',
//           type: new GraphQLNonNull(GraphQLString)
//         }
//       },
//       // repos for the entity,
//       // ie. either an Organization or User
//       // this will return the Repo found as the
//       // first argument to each field of the repos.type
//       resolve: (entity, {id}) => {
//         return entity.repos(id).fetch();
//       }
//     }
//   }
// }
