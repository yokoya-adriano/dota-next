import Image from "next/image"
import styles from '../styles/About.module.css'

import invokerImg from "../../public/images/invoker.png"

export default function About() {
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nostrum enim repellat possimus voluptatum dolorum maxime alias! Perspiciatis quos itaque voluptates perferendis numquam, cumque nihil consequuntur asperiores labore. Unde, possimus.</p>
            <Image src={invokerImg} width='300' height='400' alt="Invoker About" />
        </div>
    )
}