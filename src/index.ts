const { GraphQLServer } = require("graphql-yoga");
import { prisma } from "./generated/prisma-client";
import { Context } from "./utils";

const resolvers = {};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
