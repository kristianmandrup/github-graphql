import {
  GraphQLList,
  GraphQLString
} from 'graphql';

// WTF!? Here we instantiate github directly!?
import Github from './github';
let github = new Github();

var orgType = require('./schema/types/org');

var orgQuery = {
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
};

export default orgQuery;
