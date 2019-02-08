const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: "http://localhost:4466",
      debug: true,
      secret: "W34tl3y"
    })
  })
});
