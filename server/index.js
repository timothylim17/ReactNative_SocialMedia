const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const validateTokenAndGetUserId = (token) => {
  // TODO: authorize the user
  return "user-2";
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const context = {};

    if (req.headers.authorization) {
      const [bearer, token] = req.headers.authorization.split(" ");
      context.userId = validateTokenAndGetUserId(token);
    }

    return context;
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
