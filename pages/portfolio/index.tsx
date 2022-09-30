import { GET_CATEGORIES_DATA } from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client'

import styles from './Portfolio.module.scss';
import Card from '../../components/CardSimple';
import { GetStaticProps } from 'next';
import { CardsSection } from '../../components/CardsSection';
import { TitleSection } from '../../components/TitleSection';

export default function Portfolio({categories}){
    return(

          <CardsSection>
            <TitleSection>
              Trabalhos
            </TitleSection>
            <h1>Portfólio</h1>
              
              <div className={styles.cardGrid}>
                  {categories.map((category, index) => {
                      return(
                      <Card key={index} content={category}/> 
                      );
                  })}
              </div>
          </CardsSection>

    )
}
export const getStaticProps: GetStaticProps = async () =>{
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