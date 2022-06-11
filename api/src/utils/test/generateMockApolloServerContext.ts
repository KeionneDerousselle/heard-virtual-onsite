import { ApolloServerContext } from '@virtual-onsite-api/handlers/graphql';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const merge = require('lodash.merge');

export const defaultMockApolloServerContext: ApolloServerContext = {
  headers: {},
  functionName: 'test',
  event: {
    body: '',
    isBase64Encoded: false,
    headers: {},
    httpMethod: '',
    multiValueHeaders: {},
    multiValueQueryStringParameters: null,
    path: '',
    pathParameters: null,
    requestContext: {
      accountId: '',
      apiId: '',
      authorizer: {
        jwt: {
          claims: {},
          scopes: [],
        },
      },
      domainName: '',
      domainPrefix: '',
      eventType: '',
      extendedRequestId: '',
      httpMethod: '',
      identity: {} as any,
      path: '',
      protocol: '',
      resourceId: '',
      resourcePath: '',
      requestId: '',
      requestTimeEpoch: 0,
      routeKey: '',
      stage: '',
    },
    queryStringParameters: null,
    resource: null,
    stageVariables: null,
  },
  context: {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: '',
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    done: () => {},
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    getRemainingTimeInMillis: () => 0,
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    fail: () => {},
    //eslint-disable-next-line @typescript-eslint/no-empty-function
    succeed: () => {},
  },
};

export const generateMockApolloServerContext = (
  customApolloServerContext: Record<string, unknown> = {}
): ApolloServerContext => merge({}, defaultMockApolloServerContext, customApolloServerContext) as ApolloServerContext;
