import { GET_CATEGORIES_DATA } from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'

import styles from './Jobs.module.scss';
import CardJob from '../../components/CardJob';

export default function Jobs({categories}){
    return(
        <>
          <div className={styles.container}>
              <h1>Trabalhos</h1>
          </div>
          <div className={styles.cardGrid}>
            {categories.map((category, index) => {
                if(category.attributes.featureImage.data.length > 0){
                  return(                  
                    <CardJob key={index} content={category}/>  
                  );
                } else {
                  return
                }
              })}
          </div>
        </>
    )
}

export async function getStaticProps() {
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_API,
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: GET_CATEGORIES_DATA
    })
  
    return {
      props: {
        categories: data.categories.data
      }
    }
  }