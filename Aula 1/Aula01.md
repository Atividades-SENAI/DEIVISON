# Resumo - Aula 01: Apresentação da Disciplina e Contextualização

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI

---

## 1. Informações do Docente

* **Formação Acadêmica:** Mestre em Ciência da Computação (2021), Pós-graduando em Inteligência Artificial, possui 4 Pós-graduações *Lato Sensu* e Graduação em Análise e Desenvolvimento de Sistemas (2016).


* **Atuação Profissional:** Gerente de Projetos (2023 - Atual), Professor Universitário (2022 - Atual), Coordenador Acadêmico (2019–2021) e Professor de Informática (2017–2023).


* **Atuação no SENAI:** Professor de Ensino Superior, Produção de Artigos Científicos, Pesquisa e Projetos em Gamificação e Educação Financeira.



---

## 2. Contexto da Disciplina e Conceitos Fundamentais

* **Contexto:** Aplicações web modernas necessitam de *frameworks* front-end para construir interfaces rápidas, organizadas, escaláveis e fáceis de manter, sendo um requisito estratégico para a competitividade das empresas.


* **O que é Desenvolvimento Front-end?** É a camada visual com a qual o usuário interage diretamente. Envolve a criação de interfaces, organização de elementos, garantia de boa experiência do usuário (UX) e integração/comunicação com os sistemas de processamento de dados (Back-end).


* **Arquitetura Web e UX/UI:** Abrange a definição do escopo, prototipação, usabilidade e validação de ideias.


* **JavaScript (Vanilla JS):** Linguagem de script interpretada e base essencial do desenvolvimento front-end. O termo *Vanilla JS* refere-se ao uso do JavaScript puro, sem dependências ou bibliotecas externas.



---

## 3. Conteúdo da Disciplina e Tecnologias

Durante o semestre, serão estudados os seguintes tópicos principais:

* Configuração do Ambiente de Desenvolvimento;


* Introdução e uso do **Git e GitHub** para versionamento;


* **Deploy** e publicação de aplicações na web (ex: Vercel);


* **Frameworks CSS e Front-end** (ex: React, Vue e Angular);


* **Arquitetura, Componentização, Estado, Rotas e Gerenciamento de Dados** (integração com APIs);


* Boas práticas de desenvolvimento e construção de portfólio.



---

## 4. Metodologia de Ensino

A disciplina adotará:

* Aulas expositivas e dialogadas;


* Discussões para estímulo ao pensamento crítico;


* Estudos de caso e cenários industriais reais;


* Integração constante entre teoria, prática e mercado profissional.



---

## 5. Critérios de Avaliação

| Indicador / Atividade | Peso | Descrição |
| --- | --- | --- |
| **Avaliação Docente** | **55%** | Dividida em: <br>

<br> • **Desenvolvimento de Projeto (20%):** Documentação completa estilo "mini TCC" abordando planejamento, execução, resultados e desafios. 

<br>

<br> • **Apresentação do Projeto (20%):** Foco na gestão (backlog), páginas e *benchmarking*. 

<br>

<br> • **Realização das atividades (15%):** Entregas contínuas ao longo das aulas.


| **Projeto Integrador** | **35%** | Avaliação global integrada do projeto.

| **Autoavaliação** | **10%** | Reflexão individual e autoavaliação do aluno.


---

## 6. Atividades da Aula 01

### **Atividade 01 (Prática Individual/Guiada)**

* Criar um projeto simples em Vanilla JS (HTML, CSS e JavaScript).


* Conectar a IDE ao **GitHub** e realizar o **deploy** na plataforma **Vercel**.



### **Atividade 02 (Trabalho em Grupo - 3 a 5 alunos)**

1. **Formação de Equipes:** Formar grupos fixos para as entregas de atividades ao longo do semestre.


2. **Repositório no GitHub:** Criar o repositório principal do grupo e incluir um arquivo `.md` (Markdown) com o resumo desta Aula 01.


3. **Relatório Técnico (PDF):** Escolher um Framework Front-end e elaborar um relatório técnico com no mínimo 5 páginas abordando:
* Características principais;


* Vantagens;


* Aplicações no mercado;


* Exemplo prático de utilização em um projeto Web.


### [PDF Tailwind](https://github.com/Atividades-SENAI/Projeto_vanilla/blob/main/Tailwind.pdf) 

---

<br>
<br>
<br>

# Como Funciona o Jogo da Velha (HTML, CSS e JS)

## [Projeto Vanilla](https://github.com/Atividades-SENAI/Projeto_vanilla)

Criar um jogo separando o código em três arquivos é a base do desenvolvimento web front-end moderno. Cada arquivo tem uma responsabilidade única, o que torna o projeto organizado e fácil de manter.

Abaixo está a explicação detalhada de como cada parte do nosso Jogo da Velha funciona.

---

## 1. HTML: O Esqueleto (`index.html`)

O HTML (HyperText Markup Language) é responsável por criar a estrutura da página. Ele diz ao navegador quais elementos devem existir na tela, mesmo que ainda não tenham estilo ou interatividade.

* **O Tabuleiro:** Utilizamos uma `<div>` principal com a classe `board`. Dentro dela, criamos 9 `<div>` menores com a classe `cell`, que representam os espaços onde o "X" ou o "O" serão desenhados.
* **Identificação (`data-index`):** Cada célula possui um atributo chamado `data-index` numerado de 0 a 8. Isso é crucial para que o JavaScript saiba exatamente qual quadrado foi clicado.
* **O Placar e o Botão:** Adicionamos um texto para mostrar de quem é a vez (ou quem ganhou) e um botão para reiniciar a partida.
---

<br>

## 2. CSS: A Aparência (`style.css`)

O CSS (Cascading Style Sheets) veste o nosso esqueleto HTML. Ele é o responsável por transformar as `<div>` sem graça em um tabuleiro de jogo atraente.

* **CSS Grid:** Para montar o tabuleiro 3x3 perfeito, utilizamos a propriedade `display: grid`. Com o comando `grid-template-columns: repeat(3, 100px);`, dizemos ao navegador para criar 3 colunas de 100 pixels cada. O espaço entre elas (`gap`) cria as linhas do tabuleiro.
* **Cores e Fontes:** Definimos o vermelho para o "X" e o azul para o "O" usando classes específicas (`.cell.x` e `.cell.o`). Também aumentamos o tamanho da fonte para que as letras preencham bem os quadrados.
* **Efeitos Visuais:** Adicionamos um efeito de transição (`transition`) e o pseudo-elemento `:hover` nas células e no botão. Isso faz com que a cor mude suavemente quando você passa o mouse por cima, dando uma sensação de interatividade.
---

<br>

## ⚙️ 3. JavaScript: O Cérebro (`script.js`)

O JavaScript traz o jogo à vida. Sem ele, a página seria apenas uma imagem estática que não responde aos seus cliques.

### A memória do jogo (Variáveis)

* **`board`**: Uma lista (array) com 9 espaços vazios que guarda o estado atual do tabuleiro.
* **`currentPlayer`**: Guarda a informação de quem deve jogar agora (começa com "X").
* **`winConditions`**: Uma lista com todas as combinações matemáticas de vitória (as linhas, colunas e diagonais, baseadas nos índices de 0 a 8).

### As ações (Funções)

* **Ouvindo os cliques:** Usamos `addEventListener` para "escutar" quando o jogador clica em uma célula.
* **`cellClicked()` e `atualizarCelula()`:** Quando ocorre um clique, o script checa se a célula está vazia. Se estiver, ele escreve o "X" ou "O" no array do tabuleiro e também atualiza o HTML para mostrar a letra na tela.
* **`checarVencedor()`:** Após cada jogada, o script percorre as `winConditions` para ver se o jogador atual completou uma linha. Se sim, ele declara o vencedor. Se não houver vencedor e não houver mais espaços vazios, ele declara empate ("Deu Velha!").
* **`reiniciarJogo()`:** Limpa a lista `board`, remove as letras das células do HTML e devolve a vez para o "X", deixando tudo pronto para uma nova partida.

---

## Como os arquivos se comunicam

Para que essa engrenagem funcione perfeitamente, o arquivo `index.html`:

1. Puxa o visual na seção `<head>` com a tag:
`<link rel="stylesheet" href="style.css">`
2. Carrega a lógica no final do `<body>` com a tag:
`<script src="script.js"></script>`

Essa separação permite que seja possível alterar o design (CSS) sem correr o risco de quebrar as regras do jogo (JS).