import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';



const client = new ApolloClient({
  uri: 'http://localhost:8000/accounts/graphql/',  // Corrected the URL
  cache: new InMemoryCache(),  // Initialize the cache for Apollo
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
