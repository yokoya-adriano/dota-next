import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

import dotaLogo from "../../public/images/dota2.png"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src={dotaLogo} width='30' height='30' alt='Dota 2 Logo' />
                <h1>DotaNext</h1>
            </div>
            <ul className={styles.link__items}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}