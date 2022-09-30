import styles from './/Header.module.scss'
import Link from 'next/link'
import { ActiveLink } from '../ActiveLink'

export function Header(){
    return (
        <div className={styles.headerTag}>
            
            <Link href={"../"}>
                <a>
                    <img
                    className={styles.logoImg}
                    src="/assets/logoMobile.svg"
                    alt="Ricardo Carnaval" />
                </a>
            </Link>
            <nav>
                <ActiveLink activeClassName={styles.active} href="../">
                    <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="">
                    <a>Ricardo Carnaval</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="../portfolio/">
                    <a>Portifólio</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="../trabalhos/">
                    <a>Trabalhos</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="">
                    <a>Depoimentos</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="">
                    <a>Blog</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="">
                    <a>Orçamento</a>
                </ActiveLink>
            </nav>
        </div>
    )
}