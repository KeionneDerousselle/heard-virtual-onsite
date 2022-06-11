import { ApolloServer, Config } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { DocumentNode } from 'graphql';
import { Resolvers } from '@/api/types/graphql';
import { typeDefs, resolvers } from '@/api/schema/index';
import { ApolloServerContext } from '@/api/types/apolloServerContext';

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
