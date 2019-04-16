import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

import { authMiddleware } from './authMiddleware';
import { prisma } from './generated/prisma-client';
import resolvers from './resolvers';

const typeDefs = importSchema('./src/schema.graphql');
const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, authMiddleware);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: (req) => ({ ...req, prisma }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
