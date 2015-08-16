### GraphQL

*Preliminary Draft*

```sh
{
  users {
    :username {
      events {
        :public
        orgs {
          org
        }
      }
    }

    repos {
      :owner {
        :repo {
          labels
          issues {
            :number[]
          }
        }
      }
    }

    events {
      // see below
    }
  }

  orgs {
    :org {
      events
    }
  }

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
