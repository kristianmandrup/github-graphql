GraphQL
-------

*Preliminary Draft*

### TODO

-	Repo Milestones

### Github Schema

See [First GraphQL server](https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2)

### Github Types

```js
type Event {
  id: String!
  name: String
  type: String  
  description: String
}
```

```js
type Organization {
  id: String!
  description: String
  teams: [Team]
}
```

```js
type Issue {
  id: String!
  type: String  
  labels: [String]
  description: String
}
```

```js
type Repo {
  id: String!
  labels: [String]
  issues: [Issue],
  pulls: [Pull],
  branches: [Branch]
  // ...
}
```

```js
type Team {
  id: String!
  name: String
  members: [User] // or TeamMember?
  // ...
}
```

```js
type User {
  id: String!
  repos: [Repo]
  events: [Event]
  teams: [Team]  
}
```

### Queries

```js
type UserQuery {
  // user by id (name)
  user(id: String!): User
}
```

```js
type RepoQuery {
  // repo by id (name)
  repo(id: String!): Repo
}
```

```js
type ReposQuery {
  // repos by owner and/or type
  repos(owner: String, type: String): [Repos]
}
```

```js
type OrgsQuery {
  // organizations of a user
  orgs(user: String): [Repos]
}
```

### Github Queries

*Sample user query*

```sh
user(name: 'freedyucv') {
  events(type: 'public') {
    orgs {
      org
    }
  }

  repos(owner: 'freedyucv') {
    repo(name: 'hello-world') {
      labels
      issues {
        issue(number: 1)
      }
    }
  }

  events {
    // see below
  }
}
```

*User schema*

See: https://github.com/RisingStack/graphql-server/blob/master/src/server/schema.js

```js
var users.type = new GraphQLObjectType({
  name: 'User',
  description: 'User creator',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The full name of the user.',
      resolve: (user) => {
        return user.name;
      }
    },
    events: {
      type: new GraphQLList(events.type),
      description: 'The events of the user, or an empty list if they have none.',
      resolve: (user) => {
        return user.events.fetch();
      }
    },
    repos: {
      type: new GraphQLList(repos.type),
      description: 'The repos of the user, or an empty list if they have none.',
      resolve: (user) => {
        return user.repos.fetch();
      }
    },
    repo: {
      type: repos.type,
      description: 'A repo of the user by name',
      args: {
        id: {
          name: 'name',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (user) => {
        return user.repos.fetch();
      }
    }
  })
});
```

### Repo Type

```js
enums.repo.type = new GraphQLEnumType({
  name: 'Type',
  description: 'The type of Repository (public or private)',
  values: {
    PUBLIC: {
      value: 1,
      description: 'Public repos',
    },
    PRIVATE: {
      value: 2,
      description: 'Private repos',
    }
  }
});
```

```js
var repos.type = new GraphQLObjectType({
  name: 'Repo',
  description: 'Repository',
  fields: () => ({
    owner: {
      type: GraphQLString,
      description: 'The owner of the repo.',
      resolve: (repo) => {
        return repo.owner;
      }
    },
    pulls: {
      type: new GraphQLList(repos.pull),
      description: 'Pull requests of the repo.',
      resolve: (repo) => {
        return repo.pulls.fetch();
      }
    },
    branches: {
      type: new GraphQLList(repos.branch),
      description: 'Branches of the repo.',
      resolve: (repo) => {
        return repo.branches.fetch();
      }
    },
    // tags
    // teams
    // languages
    // labels
    // pulls
    // issues {
    //   :number[]
    // }
  });
});

```

```js
var repo.query = new GraphQLObjectType({
  name: 'RepoQuery',
  description: 'A Query to get a single repo by id (name)',  
  fields: {
    repos: {  
      type: repos.type,
      args: {
        id: {
          description: 'the id (name) of the repo',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      // repos for the entity,
      // ie. either an Organization or User
      // this will return the Repo found as the
      // first argument to each field of the repos.type
      resolve: (entity, {id}) => {
        return entity.repos(id).fetch();
      }
    }
  }
}
```

```js
var repos.query = new GraphQLObjectType({
  name: 'ReposQuery',
  description: 'Get Repositories by type and/or owner',  
  fields: {
    repos: {  
      type: new GraphQLList(repos.type),
      args: {
        type: {
          description: `If omitted, returns all types of repos.
                       If provided, returns only repos of that type.`,
          type: enums.repo.status
        },
        owner: {
          description: `If omitted, returns all types of repos.
                       If provided, returns only repos of that type.`,
          type: GraphQLString
        }
      },
      // find repos by owner, type or both
      resolve: (root, {type, owner}) => {
        var typeArgs = type ? {type: type} : {};
        var ownerArgs = type ? {owner: owner} : {};
        var args = Object.assign(typeArgs, ownerArgs);
        arg = args === {} ? args : undefined;
        return root.repos(args).fetch();
      }
    }
  }
}
```

### Organization Query

```js
// orgs {
//   :org {
//     events
//   }
// }

var repos.query = new GraphQLObjectType({
  name: 'OrganizationsQuery',
  description: 'Get Organization by id (name)',  
  fields: {
    orgs: {  
      type: orgs.type,
      args: {
        id: {
          description: 'the id (name) of the organization',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      // organization for the entity
      // ie. either an Organization or User
      // this will return the Organization found as the
      // first argument to each field of the orgs.type
      resolve: (entity, {id}) => {
        return entity.orgs(id).fetch();
      }
    }
  }
}
```

```js
var orgs.type = new GraphQLObjectType({
  name: 'Organization',
  description: 'Organization such as a company',
  fields: () => ({
    events: {
      type: new GraphQLList(events.type),
      description: 'The events of the organization.',
      resolve: (org) => {
        return org.events.fetch();
      }
    },
    teams: {
      type: new GraphQLList(teams.type),
      description: 'The teams of the organization.',
      resolve: (org) => {
        return org.teams.fetch();
      }
    }
    // ...
  });
});
```

### Events Type

```js
var events.type = new GraphQLObjectType({
  name: 'events',
  fields: {
    ///...
  }
}
```

### Events Query

```js
var events.query = new GraphQLObjectType({
  name: 'EventsQuery',
  description: 'Get Events by type',
  fields: {
    events: {
      type: new GraphQLList(events.type),
      args: {
        id: {
          description: 'The type of event',
          type: GraphQLString
        }
      },
      description: 'The events',
      // the events for the entity, such as User, Organization or Team
      resolve: (entity, {type}) => {
        entity = entity || octo;
        return entity.events(type).fetch();
      }
    }
  }
}
```

### Users Query Type

```js
var user.query = new GraphQLObjectType({
  name: 'UserQuery',
  description: 'Get User by id (name)',
  fields: {
    user: {  
      type: user.type,
      args: {
        id: {
          description: 'the id (username) of the user',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      // this will return the User found as the first argument to each field of the user.type!!!
      resolve: (entity, {id}) => {
        entity = entity || octo;
        return entity.users.user(id);
      }
    }
  }
}
```

### Users Mutation Type

```js
users.mutation = new GraphQLObjectType({
  name: 'userMutation',
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: 'Updates the count',
      resolve: function() {
        count += 1;
        return count;
      }
    }
  }
})
```

### Users schema

```js
var users.schema = new GraphQLSchema({
  query: users.query,
  mutation: users.mutation
}
```

### Repos

```sh
{
  repos {
    :owner {
      :repo {
        type (all | public | private | forks | sources | member)
        pulls
        branches
        tags
        teams
        languages
        labels
        pulls
        issues {
          :number[]
        }
      }
    }
  }

  events {
    public
    repository {
      issue
    }
    user {
      received
      performed
    }
    org {
      public
    }
  }
}
```

User Mutation schema
--------------------

```sh
// mutation
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: {
        type: userType,
        args: {
          name: {
            name: 'name',
            type: GraphQLString
          }
        },
        resolve: (obj, {name}, source, fieldASTs) => co(function *() {
          var projections = getProjection(fieldASTs);

          var user = new User();
          user.name = name;


          return yield user.save();
        })
      },
      deleteUser: {
        type: userType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (obj, {id}, source, fieldASTs) => co(function *() {
          var projections = getProjection(fieldASTs);
          console.log(id);
          return yield User.findOneAndRemove({_id: id});
        })
      },
      updateUser: {
        type: userType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
          },
          name: {
            name: 'name',
            type: GraphQLString
          }
        },
        resolve: (obj, {id, name}, source, fieldASTs) => co(function *() {
          var projections = getProjection(fieldASTs);

          yield User.update({
            _id: id
          }, {
            $set: {
              name: name
            }
          });

          return yield User.findById(id, projections);
        })
      }
    }
  })
});
```
