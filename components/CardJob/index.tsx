import Link from 'next/link';
import styles from './CardJob.module.scss'

export default function CardJob({content}){
    const images = content.attributes.featureImage.data;
    // const images = content;
    
    const eventDate = new Date(content.attributes.eventDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })
    return(
        <div className={styles.card}>
            <Link
                href={`/trabalhos/${content.attributes.slug}`}
            >
                <a>
                <div className={styles.containerPhoto}>                           
                    {images.map((image, index) => {
                        return(
                            <div key={index} className={styles.photoCard} style={{backgroundImage: `url(http://localhost:1337${image.attributes.url})`}}></div>
                        )
                    })}
                </div>
                <div className={styles.infoCard}>
                    <h3>{content.attributes.tittle}</h3>
                    <span>{eventDate}</span>
                </div>     
                </a>
            </Link>           
        </div>        
    );
}