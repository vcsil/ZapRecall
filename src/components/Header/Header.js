import './style.css';
import logo from "../../assets/image/iconZap.png";

import React from "react";

function reiniciaPag() {
    window.location.reload()
}

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Icone ZapRecall" onClick={reiniciaPag}/>
            <h1 onClick={reiniciaPag}>ZapRecall</h1>
        </header>
    );
}