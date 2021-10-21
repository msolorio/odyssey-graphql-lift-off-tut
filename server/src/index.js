const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ trackAPI: new TrackAPI })
});

(async () => {

  const { url } = await server.listen();

  console.log(`Your server is running at ${url}`);

})();