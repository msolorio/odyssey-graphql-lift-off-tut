const resolvers = {
  Query: {
    // returns tracks to populate homepage
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    }
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};

module.exports = resolvers;
