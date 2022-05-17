import './style.css';
import logo from "../../assets/image/iconZap.png";

import React from "react";

function Comecar({ setInit, metaZap }) {
    // Classe par ao botão
    let classeB = 'bloqueiaClick cinza';

    if (metaZap < 1 || metaZap > 8 ) {
        // alert("Digite um número entre 1 e 8.")
    } else {
        classeB = '';
    }

    return (
        <button className={classeB} onClick={() => setInit(true)}>Iniciar Recall!</button>
    );


}

export default function Initial({ setInit, setMetaZap, metaZap }) {



    return (
        <div className="initial">
            <div className='logo'>
                <img src={logo} alt="Icone ZapRecall" />
            </div>
            <h1>ZapRecall</h1>
            <input placeholder='Digite sua meta de zaps...' type='number' 
                   value={metaZap}
                   onChange={(e) => setMetaZap(e.target.value)} />

            <Comecar setInit={setInit} metaZap={metaZap} />
        </div>
    )
}