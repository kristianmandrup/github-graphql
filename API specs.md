GraphQL
-------

*Preliminary Draft*

### TODO

-	Repo Milestones

### Schema

START HERE: https://github.com/facebook/graphql

Watch Videos from: http://facebook.github.io/react/blog/

-	https://www.youtube.com/watch?v=WQLzZf34FJ8
-	https://youtu.be/IrgHurBjQbg
-	https://youtu.be/gY48GW87Feo
-	https://www.youtube.com/watch?v=9sc8Pyc51uU
-	https://www.youtube.com/watch?v=FPygOvYLmJA
-	https://www.youtube.com/watch?v=S0s935RKKB4

### Express server

*Express GraphQL server*

https://github.com/graphql/express-graphql

### Relay

Relay for GraphQL: https://github.com/graphql/graphql-relay-js

Relay spec:

DECLARATIVE Never again communicate with your data store using an imperative API. Simply declare your data requirements using GraphQL and let Relay figure out how and when to fetch your data.

COLOCATION Queries live next to the views that rely on them, so you can easily reason about your app. Relay aggregates queries into efficient network requests to fetch only what you need.

MUTATIONS Relay lets you mutate data on the client and server using GraphQL mutations, and offers automatic data consistency, optimistic updates, and error handling.

-	https://facebook.github.io/relay/
-	https://facebook.github.io/relay/docs/graphql-relay-specification.html

First, build a GraphQL type schema which maps to your code base.

### Sample Schema

```js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});
```

### User schema

The most basic type in the system will be User, representing a github User. All github users have a name, so we define the User type to have a field called "name". This returns a String, and we know that it is not null (since all Users have a name), so we will define the "name" field to be a non-nullable String. Using a shorthand notation that we will use throughout the spec and documentation, we would describe the user type as:

`type User { name: String }`

```js
enum Episode { NEWHOPE, EMPIRE, JEDI }

interface Character {
  id: String
  name: String
  friends: [Character]
  appearsIn: [Episode]
}

type Human : Character {
  id: String
  name: String
  friends: [Character]
  appearsIn: [Episode]
  homePlanet: String
}

type Droid : Character {
  id: String
  name: String
  friends: [Character]
  appearsIn: [Episode]
  primaryFunction: String
}
```

However, we most likely don't need to use an Interface for our model. But the `enum` will be useful!!!

By default, `null` is a permitted value for any type in GraphQL, since fetching data to fulfill a GraphQL query often requires talking to different services that may or may not be available. However, if the type system can guarantee that a type is never null, then we can mark it as Non Null in the type system. We indicate that in our shorthand by adding an `!` after the type. We can update our type system to note that the id is never null.

```js
interface Character {
  id: String!
  name: String
  friends: [Character]
  appearsIn: [Episode]
}
```

When we define a schema, we define an object type that is the basis for all queries. The name of this type is `Query` by convention, and it describes our public, top-level API. Our Query type for this example will look like this:

```js
type Query {
  hero(episode: Episode): Character
  human(id: String!): Human
  droid(id: String!): Droid
}
```

example query

```js
query HeroNameQuery {
  hero {
    name
  }
}
```

As defined above, Query has a hero field that returns a Character, so we'll query for that. Character then has a name field that returns a String, so we query for that, completing our query. The result of this query would then be:

```js
{
  "hero": {
    "name": "R2-D2"
  }
}
```

if we asked for R2-D2's ID and friends with this query:

```js
query HeroNameAndFriendsQuery {
  hero {
    id
    name
    friends {
      id
      name
    }
  }
}
```

then we'll get back a response like this:

```js
{
  "hero": {
    "id": "2001",
    "name": "R2-D2",
    "friends": [
      {
        "id": "1000",
        "name": "Luke Skywalker"
      },
      {
        "id": "1002",
        "name": "Han Solo"
      },
      {
        "id": "1003",
        "name": "Leia Organa"
      }
    ]
  }
}
```

One of the key aspects of GraphQL is its ability to nest queries. In the above query, we asked for R2-D2's friends, but we can ask for more information about each of those objects. So let's construct a query that asks for R2-D2's friends, gets their name and episode appearances, then asks for each of their friends.

```js
query NestedQuery {
  hero {
    name
    friends {
      name
      appearsIn
      friends {
        name
      }
    }
  }
}
```

we can have defined the query to have a query parameter:

```js
query FetchSomeIDQuery($someId: String!) {
  human(id: $someId) {
    name
  }
}
```

Notice that the key in the response is the name of the field, by default. It is sometimes useful to change this key, for clarity or to avoid key collisions when fetching the same field with different arguments.

We can do that with field aliases, as demonstrated in this query:

```js
query FetchLukeAliased {
  luke: human(id: "1000") {
    name
  }
}
```

We aliased the result of the human field to the key luke. Now the response is:

```json
{
  "luke": {
    "name": "Luke Skywalker"
  }
}
```

```js
query FetchLukeAndLeiaAliased {
  luke: human(id: "1000") {
    name
  }
  leia: human(id: "1003") {
    name
  }
}
```

we can extract out the common fields into a fragment, and include the fragment in the query, like this:

```js
query UseFragment {
  luke: human(id: "1000") {
    ...HumanFragment
  }
  leia: human(id: "1003") {
    ...HumanFragment
  }
}

fragment HumanFragment on Human {
  name
  homePlanet
}
```

Looks like our best option is to take the Starwars sample implementation and gradually rework it for our schema needs.

https://github.com/graphql/graphql-relay-js

-	https://facebook.github.io/relay/graphql/objectidentification.htm
-	https://facebook.github.io/relay/graphql/connections.htm
-	https://facebook.github.io/relay/graphql/mutations.htm

...

See [starWarsSchema](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsSchema.js)

### Github Schema

See [First GraphQL server](https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2)

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

```sh
var users.type = new GraphQLObjectType({
  name: 'User',
  description: 'User creator',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'The name of the user.',
      args: {
        name: {
          name: 'name',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {name}) => {
        return octo.users.user(name);
      }
    },
    events: {
      type: new GraphQLList(events.type),
      description: 'The events of the user, or an empty list if they have none.',
      resolve: (user) => {
      }
    }
  })
});
```

### Events Query Type

```sh
var events.type = new GraphQLObjectType({
  name: 'events',
  fields: {
    events: {
      type: new GraphQLList(eventInterface),
      description: 'The events of the user',
      resolve: (human) => getFriends(human)
    }
  }
}
```

### Users Query Type

```sh
var users.query = new GraphQLObjectType({
  name: 'userQuery',
  description: 'A mechanical creature in the Star Wars universe.',  
  fields: {
    user: {  
      type: userType,
      args: {
        id: {
          name: 'name',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {id}) => {
        return octo.users.user(id);
      },
      query: eventsQuery
    }
  }
}
```

### Users Mutation Type

```sh
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

```sh
var users.schema = new GraphQLSchema({
  query: users.query,
  mutation: users.mutation
}
```

### Orgs Schema

```sh
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      orgs {
        :org {
          events
        }
      }
    }
  }
}
```

### Schema

```sh
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

    }
  }
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
