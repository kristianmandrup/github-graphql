// var enums = {
//   repo: {}
// }
//
// enums.repo.type = new GraphQLEnumType({
//   name: 'Type',
//   description: 'The type of Repository (public or private)',
//   values: {
//     PUBLIC: {
//       value: 1,
//       description: 'Public repos',
//     },
//     PRIVATE: {
//       value: 2,
//       description: 'Private repos',
//     }
//   }
// });

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
