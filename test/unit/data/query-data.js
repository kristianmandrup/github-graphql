let queries = {};

queries.orgsMethod = `query orgs_query {
                         orgs(userName: "freddyucv") {
                           login
                         }
                       }`;

queries.orgMethod = `query orgs_query {
                        org(description: "freddyucvTest") {
                          login
                          teams{
                            name
                          }
                        }
                      }`;

queries.getUserByName = `query user_query {
                            user(login: "freddyucv") {
                              id
                              login
                              name
                              company
                              repos{
                                name
                              }
                            }
                          }`;

export default queries;
