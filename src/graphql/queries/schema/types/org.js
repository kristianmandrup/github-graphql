import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

export default new GraphQLObjectType({
  name: 'organization',
  description: 'Github organization',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The github server id of the org.',
    },
    description: {
      type: GraphQLString,
      description: '',
    }
  })
});
