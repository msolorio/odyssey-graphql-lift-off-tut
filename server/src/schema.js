const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Tracks data for the homepage"
    tracksForHome: [Track!]!
    track(id: ID!): Track
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    "Url of primary image of the track"
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    "Number of times track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    "Modules length in minutes"
    length: Int
  }
`;

module.exports = typeDefs;
