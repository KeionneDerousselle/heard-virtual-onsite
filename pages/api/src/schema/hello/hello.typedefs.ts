import gql from 'graphql-tag';

export const helloTypeDefs = gql`
  type Query {
    "A Hello, World! query that accepts a greeting"
    hello(greeting: String!): String!
  }
`;
