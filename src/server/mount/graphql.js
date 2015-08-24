'use strict';

import graphqlHTTP from 'graphql-koa';
import mount from 'koa-mount';
import path from 'path';

export default function(app) {
  let schemaPath = path.join(app.rootPath, 'src/graphql/schema');
  let schema = require(schemaPath);

  let graphqlServer = mount('/graphql', graphqlHTTP({schema: schema}));
  return graphqlServer;
}
