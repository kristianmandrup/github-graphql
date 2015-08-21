'use strict';

import graphqlHTTP from 'graphql-koa';
import mount from 'koa-mount';
import schema from './graphql/schema/schema';

var graphqlServer = mount('/graphql', graphqlHTTP((request) => ({
  schema: schema,
  rootValue: request.user
})));

export default graphqlServer;
