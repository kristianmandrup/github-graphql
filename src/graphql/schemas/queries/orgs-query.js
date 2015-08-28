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
    resolve: (userLogged, {userName}) => {
      //TODO: delete when passport deserializeUser work
      checkOcto(userLogged);

      return userLogged.octo.user.orgs.fetch();
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
    resolve: (userLogged, {description}) => {
      //TODO: delete when passport deserializeUser work
      checkOcto(userLogged);

      return userLogged.octo.orgs(description).fetch();
    }
  }
};
