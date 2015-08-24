import {
  GraphQLList,
} from 'graphql';

// WTF!? Here we instantiate github directly!?
import Github from '../github';
let github = new Github();

var orgType = require('./types/org');

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
