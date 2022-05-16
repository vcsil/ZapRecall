import './style.css';
import setinha from "../../assets/image/Vector.png";

import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const perguntas = {
    "P1":
    {
        "Question": "O que é JSX?",
        "Answer": "Uma extensão de linguagem do JavaScript"
    },
    "P2":
    {
        "Question": "O React é __",
        "Answer": "uma biblioteca JavaScript para construção de interfaces"
    },
    "P3":
    {
        "Question": "Componentes devem iniciar com __",
        "Answer": "letra maiúscula"
    },
    "P4":
    {
        "Question": "Podemos colocar __ dentro do JSX",
        "Answer": "expressões"
    },
    "P5":
    {
        "Question": "O ReactDOM nos ajuda __",
        "Answer": "interagindo com a DOM para colocar componentes React na mesma"
    },
    "P6":
    {
        "Question": "Usamos o npm para __",
        "Answer": "gerenciar os pacotes necessários e suas dependências"
    },
    "P7":
    {
        "Question": "Usamos props para __",
        "Answer": "passar diferentes informações para componentes"
    },
    "P8":
    {
        "Question": "Usamos estado (state) para __",
        "Answer": "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
}


// Função que gera um número randômico
function comparador() {
    return Math.random() - 0.5;
}

const listPerguntas = Object.keys(perguntas).sort(comparador);

function Pergunta({ question, index }) {
    return (
        <li className='pergunta' key={index} >
            <h2>Pergunta {index}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </li>
    );
}


export default function Cards() {
    // Lógica
    const [mostraResposta, setMostraResposta] = React.useState(false)

    let classPergunta = "perguntaCima"
    let classResposta = "respostaBaixo"

    if (mostraResposta) {
        console.log("Foi")
        classPergunta += " perguntaBaixo"
        classResposta += " respostaCima"
    }


    // UX
    return (
        <>
            <Header />

            <ul className='todasPerguntas'>
                {listPerguntas.map((question, index) => (<Pergunta key={index}  question={question} index={index+1}/>))}
                {/* <div className='perguntaMostra'>
                    <div className={classPergunta}>
                        <h2>
                            O que é JSX?
                        </h2>
                        <img src={setinha} alt='Vira carta' onClick={() => setMostraResposta(true)} />
                    </div>
                    <div className={classResposta}>
                        <h2>
                            JSX é uma sintaxe para escrever HTML dentro do JS
                        </h2>
                        <div className='botoesResposta'>
                            <button className='respostaUser vermelho'> <h3>Não <br /> lembrei</h3> </button>
                            <button className='respostaUser laranja'> <h3>Quase não lembrei</h3> </button>
                            <button className='respostaUser verde'> <h3>Zap!</h3> </button>
                        </div>
                    </div>
                </div> */}
            </ul>

            <Footer />
        </>
    );
}