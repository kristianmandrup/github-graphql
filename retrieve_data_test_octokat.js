import Github from './src/github/github-util.js';
import request from 'supertest-as-promised';
import server from './src/server';
import { stringify } from 'querystring';
import agent from 'supertest-koa-agent';

var github = new Github();

//server.listen(9090);

let app = agent(server);

let query = `query orgs_query {
              orgs(userName: "freddyucv") {
                description
              }
            }`;

var url = '/graphql?' + stringify({query: query})

console.log(url);

app.get(url).expect(200)
  .end((err, res) => {
    if (err) throw err;

    console.log(JSON.stringify(res.body));
  });


//Schema test
/*import { graphql } from 'graphql';
import schema from './src/graphql/schema/schema';

let query = `query orgs_query {
              orgs(userName: "freddyucv") {
                description
              }
            }`;


graphql(schema, query).then((data) => console.log(JSON.stringify(data)));*/
