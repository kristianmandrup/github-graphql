github-graphql
==============

GraphQL server for Github API

[![Travis build status](http://img.shields.io/travis/kristianmandrup/github-graphql.svg?style=flat)](https://travis-ci.org/kristianmandrup/github-graphql)[![Code Climate](https://codeclimate.com/github/kristianmandrup/github-graphql/badges/gpa.svg)](https://codeclimate.com/github/kristianmandrup/github-graphql)[![Test Coverage](https://codeclimate.com/github/kristianmandrup/github-graphql/badges/coverage.svg)](https://codeclimate.com/github/kristianmandrup/github-graphql)[![Dependency Status](https://david-dm.org/kristianmandrup/github-graphql.svg)](https://david-dm.org/kristianmandrup/github-graphql)[![devDependency Status](https://david-dm.org/kristianmandrup/github-graphql/dev-status.svg)](https://david-dm.org/kristianmandrup/github-graphql#info=devDependencies)

-	https://github.com/graphql/graphql-js
-	https://github.com/rmosolgo/graphql-ruby
-	https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/
-	https://github.com/RisingStack/graphql-server
-	https://github.com/RisingStack/graffiti
-	https://github.com/RisingStack/graffiti-example

Note: The `/server` folder should be integrated with the project root folder.

Use Mongoose to store github data with project data. Why not ;)

```js
var koa = require('koa');
var graffiti = require('@risingstack/graffiti');
var graffitiMongoose = require('@risingstack/graffiti-mongoose');

var app = koa();
app.use(graffiti.koa({
  prefix: '/graphql',
  adapter: graffitiMongoose,
  models: []
}));

app.listen(3000);
```
