import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  });
  
  return (
    <>
      <ApolloProvider client={client}>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </ApolloProvider>
    </>
  )
}

export default MyApp
