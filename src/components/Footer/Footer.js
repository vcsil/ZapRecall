import "./style.css"

import React from "react";

export default function Footer({ totalPerguntas, cardsRespondidas }) {
    return (
        <footer>
            <h3>
                {cardsRespondidas}/{totalPerguntas} CONCLUÍDOS
            </h3>
        </footer>
    );
}