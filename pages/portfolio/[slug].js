import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_CATERGORY_PHOTOS } from '../../graphql/queries'
import { Gallery, Item } from 'react-photoswipe-gallery'

import styles from './SinglePortfolio.module.scss'
import 'photoswipe/dist/photoswipe.css'


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
    query: GET_CATERGORY_PHOTOS(params.slug)
    
  })
  if (data) {
    return {
      props: {
        category: data.categories.data[0].attributes.categoryName,
        categoryPhotos: data.categories.data[0].attributes.events,
      }
    }
  } else {
    return
  }
  
}

function SinglePortfolio({category, categoryPhotos}){
  try{
    const photos = categoryPhotos.data[0].attributes.eventPhotos.data;

    return(
      <div className={styles.container}>
          <h1>{ category }</h1>
          
          <div className={styles.gridWrap}>
            <Gallery>
                {photos.map((image) => {
                  return(
                    <div className={image.attributes.width > image.attributes.height ? styles.vStretch : styles.hStretch}>
                    <Item
                      original={`http://localhost:1337${image.attributes.url}`}
                      thumbnail={`http://localhost:1337${image.attributes.formats.medium.url}`}
                      width={image.attributes.width}
                      height={image.attributes.height}
                    >
                      {({ ref, open }) => (
                        <img  ref={ref} onClick={open}  src={`http://localhost:1337${image.attributes.formats.small.url}`} />
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