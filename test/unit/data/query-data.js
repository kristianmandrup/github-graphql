let queries = {};

queries.orgsMethod = `query orgs_query {
                         orgs(userName: "freddyucv") {
                           description
                         }
                       }`;

queries.orgMethod = `query orgs_query {
                        org(description: "freddyucvTest") {
                          description
                          teams
                            name
                            description
                        }
                      }`;

export default queries;
