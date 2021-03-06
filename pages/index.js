import { SliderBanner }  from '../components/SliderBanner';
import { Header } from '../components/Header';
import Card from '../components/Card'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_HOME_DATAS } from '../graphql/queries'
import styles from '../styles/Home.module.scss'

export default function Home({images, categories}) {

  return(
    <>
      <SliderBanner images={images}/>
      <div className={styles.container}>
        <h2 className={styles.title} id="titlePotifolio">Portifólio</h2>
        <div className={styles.cardGrid}>
          {categories.map((category) => {
            return(
              <Card key={category.id} type="category" category={category}/> 
            );
          })}
        </div>
        <hr></hr>
        <div className={styles.cardGrid}>
          {categories.map((category) => {
            return(
              <Card key={category.id} type="jobs" category={category}/> 
            );
          })}
        </div>
      </div>
    </>
  );
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
      images: data.sliderBanner.data.attributes.Images.data,
      categories: data.categories.data
    }
  }
}