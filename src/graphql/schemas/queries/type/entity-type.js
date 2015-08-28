import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import UserType from './user-type';
import OrgType from './orgs-type';
import EntityType from './entity-type';

/*
 interface EntityInterface {
   id: String!
   login: String!
 }
*/

export default new GraphQLInterfaceType({
  name: 'entity',
  description: 'Either an Organization or User',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The github server id of the Organization or User.',
    },
    login: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Organization or User description',
    }
  }),
  resolveType: (userLogged, {entity}) => {
    console.log('Entity');
    console.log(entity);
    console.log(userLogged);
    return UserType;
  }
});
