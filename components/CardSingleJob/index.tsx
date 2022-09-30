import Link from 'next/link';
import styles from './CardSingleJob.module.scss'

export default function CardSingleJob({content, type}){
    const images = content.attributes.featureImage;
    const newDate = content.attributes.eventDate.split('-').reverse().join('/')
    return(
        <>   
            <div className={styles.card}>
        <Link
            href={`/${content.attributes.slug}`}
        >
            <a>
            <div className={styles.containerPhoto}>              
            {images.data.map((image, index) => {
                return(
                    <div key={index} className={styles.photoCard} style={{backgroundImage: `url(http://localhost:1337${image.attributes.url})`}}></div>
                )
            })}
            </div>
            <div className={styles.infoCard}>
                <h2 className={styles.tittleName}>{content.attributes.tittle}</h2>
                <h3 className={styles.subtittleDate}> {newDate}</h3>
            </div>     
            </a>
        </Link>           
    </div>
        </>
    );
}

    