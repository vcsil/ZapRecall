[![wakatime](https://wakatime.com/badge/user/04459a42-f0a6-4019-ad90-9558a7c04b39/project/3aa43cea-9aab-42bb-b321-be722ddda249.svg)](https://wakatime.com/badge/user/04459a42-f0a6-4019-ad90-9558a7c04b39/project/3aa43cea-9aab-42bb-b321-be722ddda249)

# 08 - ZapRecall

### Descrição

- Implementação de um app de *flashcards* chamado **Zap Recall**!
- *Flashcards* são cartões de contém uma pergunta/afirmação na sua frente e uma resposta atrás. É possível utilizá-los para treinar sua memória com as metodologias *Active Recall* e *Spaced Repetition.* A ideia é ler a pergunta ou afirmação e tentar lembrar da reposta. Ao se deparar com a mesma, dependendo do esforço necessário para responder ou não o *flashcard*, você fica consciente de quais conteúdos estão frescos na memória e quais não estão, então, pode praticar com frequência os conteúdos que não estão.
- Quando lembramos instantaneamente de um *flashcard*, tivemos um **"Zap!"**⚡
- Conjuntos de *flashcards* são chamados de *decks.* Este app deverá possuir por padrão pelo menos um *deck* com 8 *flashcards*.

[Figma com o Layout](https://www.figma.com/file/pjJ1oBmEIW1qHICjeGoiNc/ZapRecall-(Proposta-T5---ampliado)?node-id=0%3A1)

### Requisitos

- Geral

  - [x]  Manipule o HTML usando somente React (**sem usar o document, nem o localStorage,** nem bibliotecas React, JavaScript e/ou CSS). **Todo o armazenamento de informações deve ser feito via estados.**
  - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
  - [x]  **A cada requisito implementado** faça um *commit* com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários *commits*, não há problema. Mas evite colocar mais de um requisito no mesmo *commit*.

- Layout

  [ZapRecall (Proposta T5 - ampliado)](https://www.figma.com/file/pjJ1oBmEIW1qHICjeGoiNc/ZapRecall-(Proposta-T5---ampliado)?node-id=0%3A1)

  - [ ] Aplicar layout para seguindo o Figma.
  - [x] Você pode usar o deck que desejar, temos aqui o exemplo de um deck sobre React:
    1. **Q:** O que é JSX? **R:** Uma extensão de linguagem do JavaScript
    2. **Q:** O React é __ **R:** uma biblioteca JavaScript para construção de interfaces
    3. **Q:** Componentes devem iniciar com __ **R:** letra maiúscula
    4. **Q:** Podemos colocar __ dentro do JSX **R:** expressões
    5. **Q:** O ReactDOM nos ajuda __ **R:** interagindo com a DOM para colocar componentes React na mesma
    6. **Q:** Usamos o npm para __ **R:** gerenciar os pacotes necessários e suas dependências
    7. **Q:** Usamos props para __ **R:** passar diferentes informações para componentes
    8. **Q:** Usamos estado (state) para __ **R:** dizer para o React quais informações quando atualizadas devem renderizar a tela novamente
  - [x] Use as fontes indicadas no Layout do Figma

- Componentização e dados

  - [x] Os elementos da página devem ser componentizados com React em arquivos separados.
  - [x] Os dados dinâmicos da página (como o *deck*, *flashcards*, etc) devem ser representados como *arrays* ou objetos no JavaScript e renderizados na tela.

- Início

  - [x] Ao iniciar, uma “tela de início” deverá ser exibida.
  - [x] Ao clicar no botão “Iniciar Recall!”, o *deck* de *flashcards* é exibido na tela.

- *Flashcards*

  - [x] Toda vez o que o usuário for jogar, os *flashcards* devem ser embaralhados.

  - [x] Todos os *flashcards* devem aparecer na tela virados e indexados por números (ex: Flashcard 1, Flashcard 2), de modo a “esconder” o termo ou pergunta que ele contém.

  - [x] Ao clicar em um *flashcard*, a pergunta ou termo correspondente ao *flashcard* deve aparecer (não é necessária nenhuma animação).

  - [x] Para ver a resposta do flashcard, o usuário deve clicar no ícone de “virar” (o componente é o mesmo, apenas teve seu 

    layout adaptado).

    - Ao virar um flashcard...
      - [x] Ao clicar em qualquer um dos botões (Não lembrei, Quase não lembrei ou Zap), o flashcard deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
        - *Flashcard* incorreto (Não lembrei)
        - *Flashcard* correto com esforço (Quase esqueci)
        - *Flashcard* correto imediatamente (Zap!)
      - [x] Depois de respondida, a pergunta deverá ficar fechada e seu texto tachado com a cor correta correspondente ao seu status e um ícone.

- Resultado final

  - [x] O resultado deve estar fixado na parte debaixo da página.

  - [x] Sempre que uma carta for virada...

    - [x] O número de flashcards respondidos deve ser atualizado
    - [x] A sequência de respostas deve ser registrada e aparecer no formato de ícones (importante: os ícones devem aparecer de acordo com a ordem de respostas do usuário e não da ordem dos flashcards!).

  - [x] Quando todos os flashcards forem respondidos...

    - [x] A mensagem de parabéns deve ser exibida se somente as respostas dos 

      flashcards

       forem “ZAP!” ou “Lembrei com esforço”.

      - [x] Ao responder todos os *flashcards* e houver pelo menos um *status* "Incorreto", a mensagem de “Putz” deverá ser exibida.

### Bônus

- Reiniciar

  - [ ] Ao final de uma rodada, insira um botão de reiniciar que volta para a tela inicial e zera todas as respostas anteriores. Faça isso usando estados (coisas como `window.location` são proibidas para esse bônus).

- Meta de Zaps

  - [x] Um input deverá existir na primeira tela para perguntar ao usuário a sua meta de zaps. Essa meta deverá ser no mínimo 1 e 

    ela definirá se o usuário terá sucesso ou não.

    - Ex. O usuário define sua meta como 2 **zaps**, e acerta apenas um *flashcard* com status **zap**, ao responder todos os *flashcards*, a mensagem “Putz” deverá ser renderizada, caso contrário, a mensagem de “Parabéns”.

- Escolha de Deck

  - [ ] Um *select* na primeira tela que possibilita o jogador escolher qual o deck de cartas deseja treinar.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# projeto8-zaprecall
