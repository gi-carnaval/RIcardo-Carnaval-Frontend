import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_EVENTS_DATA } from '../../graphql/queries'

import styles from './Jobs.module.scss'
import 'photoswipe/dist/photoswipe.css'
import CardEvent from '../../components/CardEvent'


export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        slug: 'casamentos'
      },
      params: {
        slug: 'ensaio-de-casal'
      }
    }],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_EVENTS_DATA(params.slug),
  })
  return {
    props: {
      eventos: data.events.data,
      name: data.categories.data,
    }
  }
  
}

function SingleJobs({eventos, name}){
  // try{ 
    return(
      <>
        <div className={styles.container}>
            <h1 className={styles.tittle}>{name[0].attributes.categoryName}</h1>
        </div>
        <div className={styles.cardGrid}>
            {eventos.map((event, index) => {
                return(                  
                <CardEvent key={index} event={event}/> 
                );
            })}
        </div>
      </>

    )
  // } catch {
  //   const message = "Ocorreu um erro ao encontrar as imagens"
  //   return (
  //     <div className={styles.container}>
  //       <h1>{message}</h1>
  //     </div>
  //   );
  // }
}

export default SingleJobs;