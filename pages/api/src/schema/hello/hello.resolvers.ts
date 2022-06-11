import { Resolvers } from '@/api/types/graphql';

export const helloResolvers: Resolvers = {
  Query: {
    hello: async (_parent, { greeting }): Promise<string> => {
      return `Hello, World! ${greeting}`;
    },
  },
};
