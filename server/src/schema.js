const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Tracks data for the homepage"
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    "url of primary image of the track"
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
