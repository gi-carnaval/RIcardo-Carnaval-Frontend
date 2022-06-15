import Link from 'next/link';
import styles from './Card.module.scss'

export default function Card({category}){        

    const images = category.attributes.featureImage;

    return(
        <>
            <Link
                href={`/portfolio/${category.attributes.categoryName}`}
            >
            <a>
            <div className={styles.card}>
                <div className={styles.containerPhoto}>              
                {images.data.map(({image, index}) => {
                    return(
                        <div key={index} className={styles.photoCard}style={{'background-image': `url(http://localhost:1337${image.attributes.url})`}}></div>
                    )
                })}
                </div>
                <div className={styles.infoCard}>
                    <h3>{category.attributes.categoryName}</h3>
                </div>                
            </div>
            </a>
            </Link>
        </>
    );
}