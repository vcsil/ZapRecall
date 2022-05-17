import './style.css';

import React from "react";

export default function CaixaPergunta({ index, classe, acao, corPergunta }) {
    let classeResposta = corPergunta['class'];
    let icone = corPergunta['icon'];
    let color = corPergunta['color'];

    return (
        <div className={classe} onClick={acao} >
            <h2 className={classeResposta} >Pergunta {index}</h2>
            
            <ion-icon name={icone} style={{color: color}} ></ion-icon>
        </div>
    );
}
