import styles from './TitleSection.module.scss'

export function TitleSection({children}){
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    )
}