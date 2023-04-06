import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Hero.module.css'

export async function getStaticPaths() {
    const response = await fetch('https://api.opendota.com/api/heroStats/')
    const data = await response.json()

    const paths = data.map((hero) => {
        return {
            params: {
                heroId: `${hero.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const data = await fetch(`https://api.opendota.com/api/heroStats/`)
    const heroes = await data.json()

    const { heroId } = context.params;

    if (!heroId) {
        return { props: { hero: null } };
    }

    let hero = null;

    if (heroId < 24) {
        hero = heroes[heroId - 1];
    } else {
        hero = heroes[heroId - 2];
    }

    return {
        props: { hero }
    }

}

export default function Hero({ hero }) {
    if (!hero) {
        return (
            <div className={styles.hero__notFound}>
                <h1>Herói não encontrada na lista</h1>
                <Link className={styles.hero__back} href="/">Voltar</Link>
            </div>
        )
    }

    return (
        <div className={styles.hero__container}>
            <h1 className={styles.hero__title}>{hero.localized_name}</h1>
            <Image src={`https://api.opendota.com${hero.img}`} width='256' height='144' alt={hero.localized_name} />
            <div>
                <h3>Número:</h3>
                <p>#{hero.id}</p>
            </div>
            <div>
                <h3>Atributo primário:</h3>
                <p>{hero.primary_attr}</p>
            </div>
            <div>
                <h3>Roles do herói:</h3>
                <div className={styles.hero__roles}>
                    {hero.roles.map((role) => (
                        <span key={role}
                            className={`${styles.role} ${styles['role_' + role]}`}
                        >
                            {role}
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.hero__data}>
                <div className={styles.hero__legs}>
                    <h4>Número de pernas:</h4>
                    <p>{hero.legs}</p>
                </div>
                <div className={styles.hero__mov}>
                    <h4>Velocidade de movimentação:</h4>
                    <p>{hero.move_speed} ms</p>
                </div>
            </div>
            <Link className={styles.hero__back} href="/">Voltar</Link>
        </div>
    )
}