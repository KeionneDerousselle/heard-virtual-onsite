import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { Context, APIGatewayProxyEventHeaders, APIGatewayProxyEvent } from 'aws-lambda';
import { typeDefs, resolvers } from '../schema';

export type ApolloServerContext = {
  headers: APIGatewayProxyEventHeaders;
  functionName: string;
  event: APIGatewayProxyEvent;
  context: Context;
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  introspection: process.env.SLS_STAGE !== 'production',
  plugins: process.env.SLS_STAGE !== 'production' ? [ApolloServerPluginLandingPageGraphQLPlayground()] : [],
  context: ({ event, context, express }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    expressRequest: express.req,
  }),
  // dataSources: () => ({
  // }),
});

export const server = apolloServer.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: true,
    },
  },
});
