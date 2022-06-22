import Link from 'next/link';
import styles from './CardEvent.module.scss'

export default function CardEvent({event}){
    
    const images = event.attributes.featureImage;   
    return(
        <>   
            <div className={styles.card}>
                <Link
                    href={`/trabalhos/${event.attributes.slug}`}
                >
                    <a>
                    <div className={styles.containerPhoto}>              
                    {images.data.map((image, index) => {
                        return(
                            <div key={index} className={styles.photoCard} style={{'background-image': `url(http://localhost:1337${image.attributes.url})`}}></div>
                        )
                    })}
                    </div>
                    <div className={styles.infoCard}>
                        <h2>{event.attributes.tittle}</h2>
                        <h3>{event.attributes.eventDate}</h3>
                    </div>     
                    </a>
                </Link>           
            </div>
        </>
    );

    
}