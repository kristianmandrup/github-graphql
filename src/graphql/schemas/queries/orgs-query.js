import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import orgType from './type/orgs-type';
import teamType from './type/team-type';
import checkOcto from '../../../checkOcto';

export default {
  orgs: {
    type: new GraphQLList(orgType),
    description: 'return all the organizations from a user, this method dont return neither teams or events',
    args: {
      userName: {
        description: '',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (root, {userName}) => {
      //TODO: delete when passport deserializeUser work
      checkOcto(root);

      return root.octo.user.orgs.fetch()
        .then((orgs) => orgs);
    }
  },
  org: {
    type: orgType,
    args: {
      description: {
        description: 'the id (name) of the organization',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: (root, {description}) => {
      //TODO: delete when passport deserializeUser work
      checkOcto(root);

      return root.octo.orgs(description).fetch().then();
    }
  }
};

//TODO: delete when this type will be done
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
