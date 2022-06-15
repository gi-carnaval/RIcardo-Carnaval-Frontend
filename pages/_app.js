import { ApolloProvider } from '@apollo/client';
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
