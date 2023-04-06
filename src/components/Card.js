import Image from "next/image"
import Link from "next/link"

import styles from '../styles/Card.module.css'

export default function Card({ hero }) {
    let bgCardColor = ''
    if(hero.primary_attr === 'agi') {
        bgCardColor = '#146e19'
    } else if (hero.primary_attr === 'str') {
        bgCardColor = '#872203'
    } else {
        bgCardColor = '#007f8a'
    }


    return (
        <div className={styles.card} style={{ backgroundColor: bgCardColor }}>
            <Image src={`https://api.opendota.com${hero.icon}`} width='70' height='70' alt={hero.localized_name} />
            <p className={styles.id}>#{hero.id}</p>
            <h3 className={styles.title}>{hero.localized_name}</h3>
            <Link className={styles.btn} href={`/hero/${hero.id}`}>
                Detalhes
            </Link>
        </div>
    )
}