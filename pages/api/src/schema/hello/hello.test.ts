import { ApolloServer, gql } from 'apollo-server-micro';
import { generateApolloServer } from '@/api/utils/test';
import type { GraphQLResponse } from 'apollo-server-types';

let apolloServer: ApolloServer;

describe('when querying the hello endpoint with a greeting', () => {
  let greeting: string;
  let response: GraphQLResponse;

  beforeAll(async () => {
    greeting = 'Sup';

    const helloGreetingQuery = gql`
      query HelloQuery($email: String!) {
        breaches(email: $email) {
          Name
          Title
          BreachDate
          Domain
          AddedDate
          ModifiedDate
          PwnCount
          Description
          LogoPath
          DataClasses
          IsVerified
          IsFabricated
          IsSensitive
          IsRetired
          IsSpamList
          IsMalware
        }
      }
    `;

    apolloServer = generateApolloServer({});

    response = await apolloServer.executeOperation({
      query: helloGreetingQuery,
      variables: {
        greeting,
      },
    });
  });

  it('responds with the greeting', () => {
    expect(response.data).toEqual(`Hello, World! ${greeting}`);
  });
});
