import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';

import EventType from './event-type';
import UserType from './user-type';

/*
type Repo {
  id: String!
  name: String!
  private: Boolean
  pushedAt: String
  createdAt: String
  updatedAt: String
  owner: [User]

  labels: [String]
  issues: [Issue],
  pulls: [Pull],
  branches: [Branch]
  // ...
}
*/

export default new GraphQLObjectType({
   name: 'Repo',
   description: 'Repository',
   fields: () => ({
     id: {
       type: new GraphQLNonNull(GraphQLString),
       description: 'The id of the repo.'
     },
     name: {
       type: new GraphQLNonNull(GraphQLString),
       description: 'The name of the repo.'
     },
     private: {
       type: GraphQLBoolean,
       description: 'Is teh repo private?'
     },
     pushedAt: {
       type: GraphQLString,
       description: 'Late date when the repo was push'
     },
     createdAt: {
       type: GraphQLString,
       description: 'When the repo was created'
     },
     updatedAt: {
       type: GraphQLString,
       description: 'Late date when the repo was updated'
     },
     owner: {
       type: UserType,
       description: 'The owner of the repo.',
       resolve: (repo) => {
         return repo.owner;
       }
     }/*,

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
*/
    })
});
