import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import EntityType from './type/entity-type';
import RepoType from './type/repo-type';

export default {
  repo: {
    type: RepoType,
    args: {
      loginEntity: {
        description: 'either an Organization or User login',
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {
        description: 'the id (name) of the repo',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    // repos for the entity,
    // ie. either an Organization or User
    // this will return the Repo found as the
    // entityDescription argument
    resolve: (userLogged, {loginEntity, name}) => {
      //TODO: delete when passport deserializeUser work
      checkOcto(userLogged);

      return {};//entity.repos(id).fetch();
    }
  }
}

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
