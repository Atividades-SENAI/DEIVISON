# 🐦 React Flappy Bird - Projeto de Estudo

Um clone simples do clássico jogo "Flappy Bird", construído inteiramente com **React**. Este projeto foi criado com o objetivo de testar e entender na prática os conceitos fundamentais do framework.

---

## ⚛️ O que é o React?

O **React** é uma biblioteca JavaScript de código aberto, mantida pela Meta (antiga Facebook), usada para construir interfaces de usuário (UI). Ele é amplamente utilizado no mercado pelas seguintes razões:

1. **Baseado em Componentes:** A interface é dividida em pequenas partes reutilizáveis (como botões, formulários ou, no nosso caso, a tela do jogo).
2. **Declarativo:** Você diz ao React *como* a tela deve se parecer com base no "estado" atual, e ele se encarrega de atualizar a tela magicamente quando esse estado muda.
3. **Virtual DOM:** Em vez de recarregar a página inteira, o React atualiza apenas os pedaços da tela que realmente mudaram, tornando tudo muito rápido e fluido.

---

## 🎮 Sobre o Jogo

O jogo consiste em um "pássaro" (nossa bolinha amarela) que é constantemente puxado para baixo pela gravidade. O jogador deve clicar na tela para fazer o pássaro "pular" e passar por entre os canos verdes que se movem da direita para a esquerda. 

Se o pássaro bater no teto, no chão ou em um dos canos, é *Game Over*.

### 🧠 Como usamos o React neste jogo?

Fazer um jogo de ação no React é um excelente desafio para aprender sobre **Gerenciamento de Estado** e **Efeitos Colaterais**. Aqui estão os recursos (Hooks) que utilizamos:

* **`useState` (Gerenciamento de Estado):** 
  Usado para guardar as informações do jogo que mudam constantemente.
  * `birdPos`: A posição vertical do pássaro.
  * `obstacleLeft`: A posição horizontal do cano.
  * `score`: A pontuação do jogador.
  * *Toda vez que uma dessas variáveis é alterada, o React redesenha a tela automaticamente na nova posição.*

* **`useEffect` (Efeitos e Ciclo de Vida):** 
  Usado para criar o "Game Loop" (o relógio interno do jogo).
  * Criamos intervalos (`setInterval`) que rodam a cada 24 milissegundos para puxar o pássaro para baixo (gravidade) e mover os canos para a esquerda.
  * Usamos outro `useEffect` para monitorar constantemente as posições do pássaro e do cano e calcular se houve uma **colisão**.

* **Eventos (`onClick`):**
  Usamos o evento de clique do mouse na tela principal para disparar a função de pulo ou para iniciar/reiniciar o jogo.

* **Estilização Dinâmica (Inline Styles):**
  Em vez de usar um arquivo CSS estático, passamos objetos JavaScript para a propriedade `style` das `divs`. Isso nos permite injetar variáveis diretamente no visual (exemplo: `top: birdPos` faz o pássaro descer na tela em tempo real).

---

## 🚀 Como rodar o projeto na sua máquina

Este projeto assume que você já tem o [Node.js](https://nodejs.org/) instalado e criou a base do projeto usando o comando `npx create-react-app`.

1. Salve o código do jogo no arquivo `src/App.js`.
2. Abra o terminal na pasta do seu projeto.
3. Instale as dependências (se for a primeira vez):
   ```bash
   npm install