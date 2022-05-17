import "./style.css"

import React from "react";

function reiniciaPag() {
    window.location.reload()
}

function SoNumero({ total, respondidas }) {
    return (
        <h3>
            {respondidas}/{total} CONCLUÍDOS
        </h3>
    );
}

function Completo({ total, respondidas, respostas }) {
    return (
        <div className="quadro">
            <h3>
                {respondidas}/{total} CONCLUÍDOS
            </h3>
            <div className="icones">
                {respostas.map((i, index) => <ion-icon name={i.icon} key={index} style={{ color: i.color }} ></ion-icon>)}
            </div>
        </div>
    );
}

function Resultado({ total, respondidas, respostas }) {
    let temErro = respostas.filter((t) => t.icon === 'close-circle').length >= 1;

    let titulo;
    let texto;

    if (temErro) {
        titulo = "😥 Putz..."
        texto = "Ainda faltam alguns... Mas não desanime!"
    } else {
        titulo = "🥳 Parabéns!"
        texto = "Você não esqueceu de nenhum flashcard!"
    }

    return (
        <div className="resultado">
            <h3>
                {titulo}
            </h3>
            <p>{texto}</p>
            <div className="quadro">
                <h3>
                    {respondidas}/{total} CONCLUÍDOS
                </h3>
                <div className="icones">
                    {respostas.map((i, index) => <ion-icon name={i.icon} key={index} style={{ color: i.color }} ></ion-icon>)}
                </div>
            </div>
            <button onClick={reiniciaPag}>
                <p>REINICIAR RECALL</p>
            </button>
        </div>
    );
}

export default function Footer({ totalPerguntas, cardsRespondidas, respostas }) {
    // Lógica
    let classFooter = ''
    if (cardsRespondidas === totalPerguntas) {
        classFooter = 'result'
    }

    return (
        <footer className={classFooter}>
            {
                cardsRespondidas === 0 ?
                    <SoNumero total={totalPerguntas} respondidas={cardsRespondidas} />
                    :
                    (
                        cardsRespondidas === totalPerguntas ?
                            <Resultado total={totalPerguntas} respondidas={cardsRespondidas} respostas={respostas} />
                            :
                            <Completo total={totalPerguntas} respondidas={cardsRespondidas} respostas={respostas} />
                    )
            }

        </footer>
    );
}