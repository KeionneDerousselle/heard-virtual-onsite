import { ApolloServer, Config } from 'apollo-server-lambda';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';
import { Resolvers } from '@virtual-onsite-api/types/graphql';
import { ApolloServerContext } from '@virtual-onsite-api/handlers/graphql';
import { typeDefs, resolvers } from '@virtual-onsite-api/schema/index';

export const generateApolloServer = (
  context: ApolloServerContext,
  {
    dataSources = () => ({}),
    extraTypeDefs = [],
    extraResolvers = [],
  }: {
    extraTypeDefs?: DocumentNode[];
    extraResolvers?: Resolvers[];
  } & Config = {}
): ApolloServer =>
  new ApolloServer({
    dataSources,
    typeDefs: mergeTypeDefs([typeDefs, ...extraTypeDefs]),
    resolvers: mergeResolvers([resolvers, ...extraResolvers]),
    context,
  });
