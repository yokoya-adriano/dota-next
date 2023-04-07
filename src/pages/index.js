import styles from '@/styles/Home.module.css'
import dotaLogo from '../../public/images/dota2.png'

import Image from 'next/image'

import Card from '../components/Card'

import { fetchHeroes } from '@/services/api'

export async function getStaticProps() {
    const heroesStats = await fetchHeroes();
    
    return {
        props: {
            heroesStats
        },
    }
}

export default function Home({ heroesStats }) {
  return (
    <>
        <div className={styles.title__container}>
            <h1 className={styles.title}>Dota<span>Next</span></h1>
            <Image src={dotaLogo} width="50" height="50" alt="Dota Logo" />
        </div>
        <div className={styles.heroes__container}>
            {heroesStats.map((hero) => (
                <Card key={hero.id} hero={hero}  />
            ))}
        </div>
    </>
  )
}
