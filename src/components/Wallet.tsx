import fox from "../assets/MetaMask_Fox.svg"
import bag from "../assets/HashPacksvg.svg"

import styles from './Wallet.module.css'
import type React from "react";

import { useState } from "react";

type Props = {
    onClose: () => void;
}

function Wallet({ onClose }: Props) {
    
    const [isClosing, setIsClosing] = useState(false)

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const handleAnimationEnd = () => {
        if(isClosing){
            onClose()
        }
    }
    
    return (
        <div className={`${styles.modalBackdrop} ${isClosing ? styles.backdropClosing : ''}`} onClick={() => setIsClosing(true)} onAnimationEnd={handleAnimationEnd}>
            <div className={`${styles.container} ${isClosing ? styles.containerClosing : ''}`} onClick={handleContentClick} >
                <p className={styles.text}>Qual wallet deseja conectar?</p>
                <button className={styles.btn} ><img src={fox} />MetaMask</button>
                <button className={styles.btn}><img src={bag} />HashPack</button>
            </div>
        </div>
    )
}

export default Wallet
