import './style.css';
import setinha from "../../assets/image/Vector.png";

import React from "react";

export default function Questao({ question, answer, classe, finalizarResposta  }) {
    //Logica

    const [mostraResposta, setMostraResposta] = React.useState(false);

    let classPergunta = "perguntaCima"
    let classResposta = "respostaBaixo"

    if (mostraResposta) {
        classPergunta += " perguntaBaixo"
        classResposta += " respostaCima"
    }



    // UX

    return (
        <div className={'perguntaMostra' + classe}>
            <div className={classPergunta}>
                <h2>
                    {question}
                </h2>
                <img src={setinha} alt='Vira carta' onClick={() => setMostraResposta(true)} />
            </div>
            <div className={classResposta}>
                <h2>
                    {answer}
                </h2>
                <div className='botoesResposta'>
                    <button className='respostaUser vermelho' onClick={() => finalizarResposta('vermelho')}> <h3>Não <br /> lembrei</h3> </button>
                    <button className='respostaUser laranja' onClick={() => finalizarResposta('laranja')}> <h3>Quase não lembrei</h3> </button>
                    <button className='respostaUser verde' onClick={() => finalizarResposta('verde')}> <h3>Zap!</h3> </button>
                </div>
            </div>
        </div>
    );
}