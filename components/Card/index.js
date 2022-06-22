import Link from 'next/link';
import styles from './Card.module.scss'

export default function Card({category, type}){        
    const images = category.attributes.featureImage;

    switch(type){
        case 'job':
            return(
                <>   
                    <div className={styles.card}>
                        <Link
                            href={`/trabalhos/${category.attributes.slug}`}
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
                                <h3>{category.attributes.categoryName}</h3>
                            </div>     
                            </a>
                        </Link>           
                    </div>
                </>
            );
        break;
        
        case 'category':
            return(
                <>   
                    <div className={styles.card}>
                        <Link
                            href={`/portfolio/${category.attributes.slug}`}
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
                                <h3>{category.attributes.categoryName}</h3>
                            </div>     
                            </a>
                        </Link>           
                    </div>
                </>
            );
        break;
    }

    
}