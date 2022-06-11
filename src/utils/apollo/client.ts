import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { GetServerSidePropsContext } from 'next';
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import fetch from 'isomorphic-unfetch';
import isEqual from 'lodash.isequal';

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createApolloClient = (ctx: GetServerSidePropsContext | undefined = undefined) => {
  const httpLink = createHttpLink({
    uri: 'https://0fcx7wcz6l.execute-api.us-west-1.amazonaws.com/production/api', //process.env.GQL_ENDPOINT,
    fetch,
  });

  return new ApolloClient({
    link: httpLink,
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    connectToDevTools: process.env.SLS_STAGE !== 'production',
  });
};

type InitialState = NormalizedCacheObject | undefined;

interface IInitializeApollo {
  context?: GetServerSidePropsContext | undefined;
  initialState?: InitialState | null;
}

export const initializeApollo = (
  { context, initialState }: IInitializeApollo = {
    context: undefined,
    initialState: null,
  }
) => {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => {
        return [
          ...sourceArray,
          ...destinationArray.filter((d) => {
            return sourceArray.every((s) => !isEqual(d, s));
          }),
        ];
      },
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export function useApolloClient(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo({ initialState: state }), [state]);

  return store;
}
