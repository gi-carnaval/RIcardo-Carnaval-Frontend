import styles from './SliderBanner.module.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import background from '../../public/assets/background.jpg'

export function SliderBanner({images}){  
  
  return(
    <>
      <div className={styles.slideContainer}>
        { images ? 
        <Slide easing="ease">
          {images.map(image => {
              return (
                <div key={image.id} className={styles.eachSlide}>
                  <div style={{'background-image': `url(http://localhost:1337${image.attributes.url})`}}>
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
              <div style={{'background-image': background}}/>
            </div>
         }
         
      </div>
    </>
  );
}