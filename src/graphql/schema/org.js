import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

import Github from '../../github/github-util';
let github = new Github();


/*
type Organization {
  id: String!
  description: String
  teams: [Team]
}

type OrgsQuery {
  // organizations of a user
  orgs(user: String): [Organization]
}
*/

var orgType = new GraphQLObjectType({
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

var orgQuery = new GraphQLObjectType({
    name: 'Query',
    description: '',
    fields: () => ({
      orgs: {
        type: new GraphQLList(orgType),
        args: {
          userName: {
            description: '',
            type: GraphQLString
          }
        },
        resolve: (root, {userName}) => github.userOrgs(userName)
      }
    })
});


export default orgType;
