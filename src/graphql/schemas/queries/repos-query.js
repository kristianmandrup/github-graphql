// var repos.query = new GraphQLObjectType({
//   name: 'ReposQuery',
//   description: 'Get Repositories by type and/or owner',
//   fields: {
//     repos: {
//       type: new GraphQLList(repos.type),
//       args: {
//         type: {
//           description: `If omitted, returns all types of repos.
//                        If provided, returns only repos of that type.`,
//           type: enums.repo.status
//         },
//         owner: {
//           description: `If omitted, returns all types of repos.
//                        If provided, returns only repos of that type.`,
//           type: GraphQLString
//         }
//       },
//       // find repos by owner, type or both
//       resolve: (root, {type, owner}) => {
//         var typeArgs = type ? {type: type} : {};
//         var ownerArgs = type ? {owner: owner} : {};
//         var args = Object.assign(typeArgs, ownerArgs);
//         arg = args === {} ? args : undefined;
//         return root.repos(args).fetch();
//       }
//     }
//   }
// }

/*
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

*/
