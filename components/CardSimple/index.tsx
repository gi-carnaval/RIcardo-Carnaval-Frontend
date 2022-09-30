import Link from 'next/link';
import styles from './CardSimple.module.scss'

export default function CardSimple({content}){
    const images = content.attributes.featureImage.data.attributes.url;


    return(
        <>   
            <div className={styles.card}>
                <Link
                    href={`/portfolio/${content.attributes.slug}`}
                >
                    <a>
                    <div className={styles.containerPhoto}>                           
                    
                        <div className={styles.photoCard} style={{backgroundImage: `url(http://localhost:1337${images})`}}></div>

                    </div>
                    <div className={styles.infoCard}>
                        <h3>{content.attributes.portfolioName}</h3>
                    </div>     
                    </a>
                </Link>           
            </div>
        </>
    );
}