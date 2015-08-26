'use strict';

//import graphqlHTTP from 'graphql-koa';
import mount from 'koa-mount';
import path from 'path';
import { graphql } from 'graphql';

export default function(app) {
  let schemaPath = path.join(app.rootPath, 'src/graphql/schemas');
  let schema = require(schemaPath);

  let graphqlServer = mount('/graphql',
    function*() {
      let query = this.query.query;

      let ctx = this;
      let root = this.session.passport.user;

      yield graphql(schema, query, root).
        then(data => {ctx.body = data;});
    }
  );

  return graphqlServer;
}
