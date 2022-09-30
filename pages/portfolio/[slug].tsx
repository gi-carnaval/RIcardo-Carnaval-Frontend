import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_PORTFOLIO_PHOTOS } from '../../graphql/queries'
import { Gallery, Item } from 'react-photoswipe-gallery'

import styles from './SinglePortfolio.module.scss'
import 'photoswipe/dist/photoswipe.css'


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_PORTFOLIO_PHOTOS(params.slug)
    
  })
  JSON.stringify(data)

  if (data) {
    return {
      props: {
        category: data.portfolios.data,
        portfolioGallery: data.portfolios.data,
      }
    }
  } else {
    return
  }
  
}

function SinglePortfolio({category, portfolioGallery}){
  try{
    const photos = portfolioGallery.data.attributes.eventPhotos.data;

    return(
      <div className={styles.container}>
          <h1>{ category }</h1>
          
          <div className={styles.gridWrap}>
            <Gallery>
                {photos.map((image) => {
                  return(
                    <div key={image.index} className={image.attributes.width > image.attributes.height ? styles.vStretch : styles.hStretch}>
                    <Item
                      original={`http://localhost:1337${image.attributes.url}`}
                      thumbnail={`http://localhost:1337${image.attributes.formats.medium.url}`}
                      width={image.attributes.width}
                      height={image.attributes.height}
                    >
                      {({ ref, open }) => (
                        
                        <img onClick={open}  src={`http://localhost:1337${image.attributes.formats.small.url}`} />
                      )}
                    </Item>
                    </div>
                  )
                }
                )}
            </Gallery>
          </div>
      </div>
    )
  } catch (e){
    const message = "Ocorreu um erro ao encontrar as imagens"
    return (
      <div className={styles.container}>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default SinglePortfolio;