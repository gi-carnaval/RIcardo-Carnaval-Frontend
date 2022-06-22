import { GET_CATEGORIES_DATA } from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'

import styles from './Jobs.module.scss';
import Card from '../../components/Card';

export default function Jobs({categories}){
    return(
        <>
          <div className={styles.container}>
              <h1>Trabalhos</h1>
          </div>
          <div className={styles.cardGrid}>
              {categories.map((category, index) => {
                  return(
                  <Card key={index} type="job" category={category}/> 
                  );
              })}
          </div>
        </>
    )
}

export async function getStaticProps() {
    const client = new ApolloClient({
      uri: 'http://localhost:1337/graphql',
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