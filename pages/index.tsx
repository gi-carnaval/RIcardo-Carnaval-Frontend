import { SliderBanner }  from '../components/SliderBanner';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_HOME_DATAS } from '../graphql/queries'
import styles from './Home.module.scss'
import { TitleSection } from '../components/TitleSection';
import { CardsSection } from '../components/CardsSection';
import CardGrid from '../components/CardGrid';

type PortfoliosProps = {
  slug: string;
  portfolioName: string;
  featureImages: []
}

type EventProps = {
  
    attributes: {
      featureImage: {
        data: {
          length: Number
        }
      }
    }
}

interface HomeProps {
  images: [],
  portfolios: PortfoliosProps[],
  events: EventProps[]
}

export default function Home({images, portfolios, events}:HomeProps) {
  
  return(
    <>
      <SliderBanner images={images}/>
      <main className={styles.container}>
        <CardsSection>
          <TitleSection>
            Portifólio
          </TitleSection>
          <CardGrid cardType="Portfolios" content={portfolios}/>
        </CardsSection>
        <CardsSection>
          <TitleSection>
            Trabalhos
          </TitleSection>
          <CardGrid cardType="Events" content={events}/>
        </CardsSection>
      </main>
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
      portfolios: data.portfolios.data,
      events: data.events.data
    }
  }
}