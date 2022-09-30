import Link from 'next/link';
import { TitleSection } from '../TitleSection';
import styles from './/Footer.module.scss'

export function Footer(){
    return(
        <>
        <section className={styles.sectionAboveFooter}>
            <TitleSection>
                Orçamento
            </TitleSection>
            <article className={styles.articleAboveFooter}>
                <div className={styles.contactArticle}>
                    <div className={styles.contactInfo}>
                        <img src="/assets/PhotoCamera.svg" />
                        <h3>Ricardo Carnaval</h3>
                    </div>
                    <div className={styles.contactInfo}>
                        <img src="/assets/locationPin.svg"/>
                        <span>
                            <h3>Endereço</h3>
                            <p>Rua João ALbino Zaia, 45 - Jd, São Francisco, Ourinhos - SP, 19905-165</p>
                        </span>
                    </div>
                    <div className={styles.contactInfo}>
                        <img src="/assets/phoneIphone.svg"/>
                        <span>
                            <h3>Contato</h3>
                            <p>(14) 99697-1419</p>
                        </span>
                    </div>
                </div>
                <div className={styles.contactArticle}>
                    <form className={styles.contactForm}>
                        <input type="text" className={styles.contactInput} placeholder="Nome"/>
                        <input type="email" className={styles.contactInput} placeholder="Email"/>
                        <input type="number" className={styles.contactInput} placeholder="Telefone"/>
                        <input type="text" className={styles.contactInput} placeholder="Tipo de Evento"/>
                        <textarea className={styles.contactInput} rows={4} placeholder="Mensagem"/>
                        <button className={styles.contactButton}>Solicitar Orçamento</button>
                    </form>
                </div>
            </article>
        </section>
        <footer className={styles.sectionFooter}>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="#">
                    <a>Ricardo Carnaval</a>
                </Link>
                <Link href="/portifolio">
                    <a>Portifólio</a>
                </Link>
                <Link href="#">
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
                
            </nav>
            <section>
                <h3>Informações</h3>
                <span>(14) 99697-1419</span>
                <span>Ricardo Maurício Carnaval</span>
                <span>Rua João Albino Zaia, nº 45 | Jd. São Francisco | Ourinhos - SP</span>
            </section>
            <section>
                <span>Fotódgrafo de Casamento, Ensaio Fotográficos, Pré-Wedding - Ricardo Carnaval Fotografia, Ourihnos - SP</span>
            </section>
            <p className={styles.copyWrite}>© Desenvolvido por <a href="https://www.linkedin.com/in/giovani-carnaval/" className={styles.GiovaniCarnaval}>Giovani Carnaval</a></p>
        </footer>
        </>
    );
}