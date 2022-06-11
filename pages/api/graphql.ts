import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs, resolvers } from '@/api/schema';
import { ApolloServerContext } from '@/api/types/apolloServerContext';

const cors = Cors();
const context: ApolloServerContext = {};
const apolloServer = new ApolloServer({ typeDefs, resolvers, context });
const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
