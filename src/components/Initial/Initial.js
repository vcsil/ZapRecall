import './style.css';
import logo from "../../assets/image/iconZap.png";

import React from "react";

export default function Initial({ setInit }) {
    return (
        <div className="initial">
            <div className='logo'>
                <img src={logo} alt="Icone ZapRecall" />
            </div>
            <h1>ZapRecall</h1>
            <button onClick={() => setInit(true)}>Iniciar Recall!</button>
        </div>
    )
}