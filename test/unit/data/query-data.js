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

export default queries;
