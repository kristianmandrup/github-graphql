// var repos.type = new GraphQLObjectType({
//   name: 'Repo',
//   description: 'Repository',
//   fields: () => ({
//     owner: {
//       type: GraphQLString,
//       description: 'The owner of the repo.',
//       resolve: (repo) => {
//         return repo.owner;
//       }
//     },
//     pulls: {
//       type: new GraphQLList(repos.pull),
//       description: 'Pull requests of the repo.',
//       resolve: (repo) => {
//         return repo.pulls.fetch();
//       }
//     },
//     branches: {
//       type: new GraphQLList(repos.branch),
//       description: 'Branches of the repo.',
//       resolve: (repo) => {
//         return repo.branches.fetch();
//       }
//     },
//     // tags
//     // teams
//     // languages
//     // labels
//     // pulls
//     // issues {
//     //   :number[]
//     // }
//   });
// });
