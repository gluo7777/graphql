[Website](https://graphql.org/)
[Language Support](https://graphql.org/code/)

# Schema
type Query {
  me: User
}

type User {
  id: ID
  name: String
}

# Functions
function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}

# Request
{
  me {
    name
  }
}

# Response
{
  "me": {
    "name": "Luke Skywalker"
  }
}

# Arguments
{
  human(id: "1000") {
    name
    height
  }
}

## Scalar Transformation
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}

# Aliases
> required because you can't have two nodes with same name
{
  Luke: human(id: "1000") {
    name
    height
  }
  Luke2: human(id: "1000") {
    name
    height
  }
}

# Fragments
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}
​
fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}

# Operation Type + Query Name
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}

# First Class Variable support
query HeroNameAndFriends($episode: Episode, $first: Int) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
    friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
  }
}
### Json input
{
  "episode": "EMPIRE",
  "first": 2
}