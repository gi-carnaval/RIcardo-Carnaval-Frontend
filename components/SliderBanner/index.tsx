import styles from './SliderBanner.module.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import background from '../../public/assets/background.jpg'

type ImageProps = {
  id: string;
  attributes: {
    url: string;
  },
  background: string
}

interface SliderBannerProps {
  images: ImageProps[];
  
}

export function SliderBanner({images}: SliderBannerProps){  
  
  return(
      <div className={styles.slideContainer}>
        { images ? 
        <Slide easing="ease" >
          {images.map(image => {
              return (
                <div key={image.id} className={styles.eachSlide}>
                  <div style={{backgroundImage: `url(http://localhost:1337${image.attributes.url})`}}>
                    <span className={styles.labelSeeMore}>
                        <a href="#titlePotifolio">
                          Ver mais
                        </a>
                      </span>
                  </div>                  
                </div>            
              );
              })}
        </Slide >
         : 
            <div>
              <div style={{backgroundImage: `${background}`}}/>
            </div>
         }
         
      </div>
  );
}
