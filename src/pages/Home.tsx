import { useState } from "react"

import { FaGlobe } from "react-icons/fa"
import './Home.css'
import kanji from '../assets/Kanji.png'

import Wallet from "../components/Wallet"

function Home() {

    const [isWallet, setIsWallet] = useState(false)

    return (
        <div className="background">
            <div className="left-kanji"></div>
            <button className="globe"><FaGlobe /></button>
            <div className="text-container">
                <div className="text-1">
                    <h2>De adeus <br /> aos recibos de Papel.</h2>
                    <h1>De Boas-vindas</h1>
                </div>
                <div>
                    <h1>a prova Imutavel.</h1>
                    <div className="kanji-blend">
                        <img src={kanji} alt="" />
                    </div>
                </div>
                <div className="text-3">
                    <button className="main-button" onClick={() => setIsWallet(true)}>Conectar Wallet</button>
                    <p>o dApp que transforma cada transação em
                        um Recibo NFT exclusivo e verificável na
                        rede Hedera.</p>
                </div>
                {isWallet && (
                    <Wallet onClose={() => setIsWallet(false)} />
                )}
            </div>
        </div>
    )
}

export default Home
