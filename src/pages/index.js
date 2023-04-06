import styles from '@/styles/Home.module.css'
import dotaLogo from '../../public/images/dota2.png'

import Image from 'next/image'

import Card from '../components/Card'

import axios from 'axios'

export async function getStaticProps() {
  try {
    const response = await axios.get('https://api.opendota.com/api/heroStats/');
    const heroes = response.data;

    console.log(heroes)

    return {
      props: { heroes }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { heroes: [] }
    };
  }
}

export default function Home({ heroes }) {
  return (
    <>
        <div className={styles.title__container}>
            <h1 className={styles.title}>Dota<span>Next</span></h1>
            <Image src={dotaLogo} width="50" height="50" alt="Dota Logo" />
        </div>
        <div className={styles.heroes__container}>
            {heroes.map((hero) => (
                <Card key={hero.id} hero={hero}  />
            ))}
        </div>
    </>
  )
}
