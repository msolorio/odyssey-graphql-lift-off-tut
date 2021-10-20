const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const mocks = require('./mocks');

const server = new ApolloServer({
  typeDefs,
  mocks
});

(async () => {

  const { url } = await server.listen();

  console.log(`Your server is running at ${url}`);

})();