import { Gallery, Item } from 'react-photoswipe-gallery'

// import styles from '../SingleEvent.module.scss'

import { getStrapiMedia } from '../../lib/media'


export function EventsGallery({event}){

    return(
        <>
            
                <Gallery>
                    {event.eventPhotos.data.map((image, index) => {
                        const {width, height, formats} = image.attributes;
                        const mediumFormat = formats.small
                        // console.log("[trabalhos] - mediumFormat: ", image)
                        // console.log("[trabalhos] - mediumFormat: ", mediumFormat)
                        
                        
                        return(
                        <div key={index} className={width > height ? styles.vStretch : styles.hStretch}>
                            <Item
                            original={getStrapiMedia(image)}
                            thumbnail={getStrapiMedia(mediumFormat)}
                            width={width}
                            height={height}
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
        </>
    )
}