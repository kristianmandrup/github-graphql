import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

/*
type Event {
  id: String!
  name: String
  type: String
  description: String
}
*/

export default new GraphQLObjectType({
  name: 'event',
  description: '',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },
    name: {
      type: GraphQLString,
      description: '',
    },
    type: {
      type: GraphQLString,
      description: '',
    },
    decription: {
      type: GraphQLString,
      description: '',
    }
  })
});
