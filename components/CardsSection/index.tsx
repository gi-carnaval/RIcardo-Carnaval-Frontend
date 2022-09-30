import styles from './CardsSection.module.scss'

export function CardsSection({children}){
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {children}
            </section>
        </div>
    )
}