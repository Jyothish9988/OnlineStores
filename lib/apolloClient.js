import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql/', // Django GraphQL endpoint
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

export default client;