import graphql from './graphql';

export default function(app) {
  app.use(graphql(app));
  return app;
}
