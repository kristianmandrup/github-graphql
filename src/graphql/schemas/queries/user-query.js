import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import checkOcto from '../../../checkOcto';

/**
* @example
* Use Query like this
*   user(id: 'freddyucv')
*/
import UserType from './type/user-type';

export default {
  user: {
    type: UserType,
    args: {
      login: {
        description: 'the login of the user',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    // this will return the User found as the first argument to each field of the user.type!!!
    resolve: (userLogged, {login}) => {

      //TODO: delete when passport deserializeUser work
      checkOcto(userLogged);

      return userLogged.octo.users(login).fetch();
    }
  }
};
