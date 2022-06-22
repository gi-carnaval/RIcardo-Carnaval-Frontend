import styles from './/Header.module.scss'
import Image  from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logoMobile.svg'
import searchButton from '../../public/assets/searchButton.svg'

export function Header(){
    return (
        <div className={styles.headerTag}>
            
            <Link href={"../"}>
                <a>
                    <Image
                    className={styles.logoImg}
                    src={logo}
                    width={250}
                    height={100}
                    alt="Ricardo Carnaval" />
                </a>
            </Link>
            <nav className={styles.navMenu}>
                <Link  href="../">
                    <a>Home</a>
                </Link>
                <Link href="#">
                    <a>Ricardo Carnaval</a>
                </Link>
                <Link href="../portfolio/">
                    <a>Portifólio</a>
                </Link>
                <Link href="../trabalhos/">
                    <a>Trabalhos</a>
                </Link>
                <Link href="#">
                    <a>Depoimentos</a>
                </Link>
                <Link href="#">
                    <a>Blog</a>
                </Link>
                <Link href="#">
                    <a>Orçamento</a>
                </Link>
                
               
                <Image
                    src={searchButton}
                    alt="Botão de Busca"
                    width={25}
                    height={25}
                    />
            </nav>
        </div>
    )
}