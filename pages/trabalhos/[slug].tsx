import React from 'react'
import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client'
import { GET_EVENT_GALLERY, GET_SINGLE_EVENT, useGalleryQuery } from '../../graphql/queries'
import { Gallery, Item } from 'react-photoswipe-gallery'

import styles from './SingleEvent.module.scss'
import 'photoswipe/dist/photoswipe.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getStrapiMedia } from '../../lib/media'



type EventPhotosProps = {
  data: [
    attributes: {
      url: string,
      width: number,
      height: number,
      formats: {
        medium: {
          url: string
        }
      }
    }
  ]
}

interface EventsProps {
  events: {
    attributes: {
      tittle: string;
      eventPlace: string;
      eventDate: string;
      description: string;
      eventPhotos: EventPhotosProps 
    }
    
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug } = params
  // const { loading, error, data } = useQuery(GET_SINGLE_EVENT, {
  //   variables: {slug}
  // })

  // if(loading){
  //   return  <div>...Carregando</div>
  // }
  // if (error) return `Error! ${error}`;  
  
  // return {
  //   props: {
  //     events: data.events.data
  //   }
  // }

  
    const { loading, error, data } = useQuery(GET_SINGLE_EVENT, {
      variables: { slug },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
    );
  
}

export default function SingleEvent({events}: EventsProps) {
  const event = events[0].attributes

  const { data } = useGalleryQuery({
    variables: { limit: 50, id: events[0].id}
  })

  if(!data || !data.event) {
    return <div>...Carregando</div>
  }

  // try{
    return(
      <div className={styles.container}>
        <article className={styles.hero}>
          <h1 className={styles.eventTittle}>{ event.tittle }</h1>
          <span className={styles.eventPlace}>{ event.eventPlace }</span>
          <span className={styles.eventDate}>{ event.eventDate }</span>
          <p className={styles.eventDescription}>{ event.description }</p>
        </article>
          <div className={styles.gridWrap}>
            <Gallery>
                {event.eventPhotos.data.map((image, index) => {
                  const {width, height, formats} = image.attributes;
                  const mediumFormat = formats.medium
                  // console.log("[trabalhos] - mediumFormat: ", image)
                  // console.log("[trabalhos] - mediumFormat: ", mediumFormat)
                  
                  
                  return(
                    <div key={index} className={width > height ? styles.vStretch : styles.hStretch}>
                      <Item
                        original={getStrapiMedia(image)}
                        thumbnail={getStrapiMedia(mediumFormat)}
                        width={image.width}
                        height={image.height}
                      >
                      {/* :{({ ref }) => <div ref={ref}></div>} */}
                      {({ ref, open }) => (
                        
                          <>
                            <img ref={ref} onClick={open} src={getStrapiMedia(mediumFormat) } />
                          </>
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
  // } catch (e){
  //   const message = "Ocorreu um erro ao encontrar as imagens"
  //   return (
  //     <div className={styles.container}>
  //       <h1>{message}</h1>
  //     </div>
  //   );
  // }
}

