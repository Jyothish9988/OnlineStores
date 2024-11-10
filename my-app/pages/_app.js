import './styles/globals.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';

// Retrieve the token dynamically from localStorage (or sessionStorage, cookies) only on the client side
const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('access_token'); // Access localStorage only on client-side
  }
  return null; // Return null during SSR
};

export default function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Set the token after the component mounts on the client side
    const token = getAccessToken();
    setAccessToken(token);
  }, []);

  // Create Apollo Client instance
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',  // GraphQL server URI
    cache: new InMemoryCache(),
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : '',  // Dynamically get the token
    },
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
