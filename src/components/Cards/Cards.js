import './style.css';

import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Questao from './Questao';
import CaixaPergunta from './CaixaPergunta';

let cardsRespondidas = 0;

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

function Pergunta({ idQuestion, index, boleanTrava, trava, destrava }) {
    const question = perguntas[idQuestion].Question;
    const answer = perguntas[idQuestion].Answer;
    
    
    // Cards respondiddos
    const [cardsRespondido, setCardRespondido] = React.useState([]);

    function insereCard() {
        setCardRespondido([...cardsRespondido, perguntas[idQuestion]]);
    }

    // Controla o cartão com a pergunta
    const [mostraPergunta, setMostraPergunta] = React.useState(false);

    let classCaixaPergunta = 'caixaPergunta';
    let classMostraPergunta = ' hidden'

    if (mostraPergunta) {
        classCaixaPergunta += ' hidden'
        classMostraPergunta = ''
        trava()
    }

    // Controla a cor da caixa de pergunta
    const [corPergunta, setCorPergunta] = React.useState({ 'class': '', 'icon': "play-outline", 'color': '' })

    function verde() {
        setCorPergunta({ 'class': 'rapido', 'icon': "checkmark-circle", 'color': '#2FBE34' })
        setMostraPergunta(false)
        destrava()
        cardsRespondidas++
    }
    function laranja() {
        setCorPergunta({ 'class': 'demorado', 'icon': "help-circle", 'color': '#FF922E' })
        setMostraPergunta(false)
        destrava()
        cardsRespondidas++
    }
    function vermelho() {
        setCorPergunta({ 'class': 'errado', 'icon': "close-circle", 'color': '#FF3030' })
        setMostraPergunta(false)
        destrava()
        cardsRespondidas++
    }

    return (
        <li className='pergunta' key={index}>

            <CaixaPergunta index={index} classe={classCaixaPergunta + boleanTrava}
                acao={() => setMostraPergunta(true)} corPergunta={corPergunta} 
                cardsRespondido={cardsRespondido} setCardRespondido={setCardRespondido}
                insereCard={insereCard} />

            {/* Mostra a pergunta */}
            <Questao question={question} answer={answer} classe={classMostraPergunta}
                trava={trava} destrava={destrava} corPergunta={corPergunta}
                verde={verde} laranja={laranja} vermelho={vermelho} />

        </li>
    );
}


export default function Cards() {
    // Lógica

    const [bloqueiaClick, setBloqueiaClick] = React.useState('')

    function trava() {
        setBloqueiaClick(' bloqueiaClick')
    }

    function destrava() {
        setBloqueiaClick('')
    }

    // UX
    return (
        <>
            <Header />

            <ul className='todasPerguntas'>
                {listPerguntas.map((idQuestion, index) => (<Pergunta key={index} idQuestion={idQuestion}
                    index={index + 1} boleanTrava={bloqueiaClick} trava={trava}
                    destrava={destrava} />))}
            </ul>

            <Footer totalPerguntas={listPerguntas.length} cardsRespondidas={cardsRespondidas} />
        </>
    );
}