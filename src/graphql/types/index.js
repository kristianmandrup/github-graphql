// type Event {
//   id: String!
//   name: String
//   type: String
//   description: String
// }
//
// type Organization {
//   id: String!
//   description: String
//   teams: [Team]
// }
//
// type Issue {
//   id: String!
//   type: String
//   labels: [String]
//   description: String
// }
//
// type Repo {
//   id: String!
//   labels: [String]
//   issues: [Issue],
//   pulls: [Pull],
//   branches: [Branch]
//   // ...
// }
//
// type Team {
//   id: String!
//   name: String
//   members: [User] // or TeamMember?
//   // ...
// }
//
// type User {
//   id: String!
//   repos: [Repo]
//   events: [Event]
//   teams: [Team]
// }
