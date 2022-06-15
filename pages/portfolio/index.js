import { Header } from '../../components/Header';
import { GET_HOME_DATAS } from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'

import styles from './Portfolio.module.scss';
import Card from '../../components/Card';

export default function Portfolio({categories}){
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <h1>Portfólio</h1>
            </div>
            <div className={styles.cardGrid}>
                {categories.map((category, index) => {
                    return(
                    <Card key={index} category={category}/> 
                    );
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
      query: GET_HOME_DATAS
    })
  
    return {
      props: {
        categories: data.categories.data
      }
    }
  }