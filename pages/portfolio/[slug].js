import { useRouter } from 'next/router'
import { Header } from '../../components/Header';

import { GET_CATERGORY_PHOTOS } from '../../graphql/queries'
import styles from './Portfolio.module.scss'

function SinglePortfolio(props, {images}){
    const router = useRouter(props);
    const slug = router.query.slug

    return(
        <>
            <Header/>
            <div className={styles.container}>
                <h1>{slug}</h1>
            </div>
        </>
    )
}

export async function getStaticPaths(props) {
    const router = useRouter(props);
    const slug = router.query.slug

    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_API,
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: GET_CATERGORY_PHOTOS(slug)
    })
  
    return {
      props: {
        images: data.categories.data.attributes.events.data.attributes,
      }
    }
  }

export default SinglePortfolio;