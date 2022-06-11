import { ApolloServerContext } from '@/api/types/apolloServerContext';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('lodash.merge');

export const defaultMockApolloServerContext: ApolloServerContext = {};

export const generateMockApolloServerContext = (
  customApolloServerContext: Record<string, unknown> = {}
): ApolloServerContext => merge({}, defaultMockApolloServerContext, customApolloServerContext) as ApolloServerContext;
