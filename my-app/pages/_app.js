// pages/_app.js
import './styles/globals.css';  // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
