# Resumo - Aula 04: Consumindo APIs no Front-end

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

## 1. Conceitos Fundamentais de APIs e REST

* **API (Application Programming Interface):**
  * Conjunto de protocolos, rotinas e ferramentas que define regras de interação entre diferentes softwares.
  * Permite a comunicação transparente entre sistemas distintos sem expor os detalhes internos de implementação de cada um.

* **Arquitetura REST (Representational State Transfer):**
  * Estilo arquitetural padronizado para o desenvolvimento de web services e sistemas distribuídos.
  * **Princípios Básicos:**
    * **Cliente-Servidor (Stateless):** Cada requisição do cliente para o servidor é independente e deve conter todas as informações necessárias para ser processada. O servidor não mantém contexto de sessão anterior do cliente.
    * **Uso de Métodos HTTP:** Operações padronizadas para ação sobre recursos.
    * **Recursos Identificados por URIs:** Cada recurso exposto possui um endereço único de acesso (URL).
    * **Representações de Dados:** Comunicação padronizada utilizando formatos leves, predominantemente o **JSON**.

---

## 2. O Protocolo HTTP e Métodos de Comunicação

* **HTTP (Hypertext Transfer Protocol):**
  * Protocolo base para troca de dados na World Wide Web entre clientes (ex.: navegadores) e servidores.
  * **Características Primárias:**
    * **Modelo Cliente-Servidor:** Solicitação iniciada pelo cliente que aguarda a resposta do servidor.
    * **Stateless:** Não armazena histórico das requisições anteriores.
    * **Baseado em Texto:** Mensagens legíveis por humanos e estruturadas em cabeçalhos e corpo.

* **Principais Métodos HTTP:**
  * **GET:**
    * *Finalidade:* Recuperar/consultar informações e dados do servidor.
    * *Propriedades:* Seguro (não modifica dados no servidor) e **idempotente** (múltiplas chamadas idênticas retornam o mesmo resultado sem efeitos colaterais).
  * **POST:**
    * *Finalidade:* Criar novos recursos no servidor.
    * *Propriedades:* Não idempotente (chamadas repetidas criarão múltiplos registros).
  * **PUT e PATCH:**
    * *PUT:* Substitui **completamente** um recurso existente.
    * *PATCH:* Atualiza **parcialmente** um recurso existente.
  * **DELETE:**
    * *Finalidade:* Remover um recurso específico.
    * *Propriedades:* Idempotente (deletar algo que já foi apagado não causará erros na estrutura).

* **Fluxo Prático de uma Requisição:**
  1. **Ação no Front-end:** O usuário interage com a tela (ex.: clica em um botão).
  2. **Requisição HTTP:** O navegador envia a mensagem HTTP (GET, POST, PUT, DELETE) com dados de cabeçalho e corpo (se necessário).
  3. **Processamento Backend (ex.: Express.js):** O servidor intercepta a rota informada, valida a requisição e executa a regra de negócio.
  4. **Acesso aos Dados:** O servidor consulta ou altera o Banco de Dados ou consome uma API Externa.
  5. **Resposta JSON:** O backend retorna os dados processados encapsulados em um formato JSON com seu status HTTP correspondente.
  6. **Atualização da Interface:** O front-end captura a resposta JSON e atualiza dinamicamente a tela do usuário.

---

## 3. Endpoints, APIs Públicas e JSON

* **Endpoint:**
  * Ponto de comunicação final (URL específica) fornecido pela API para acesso a um recurso ou serviço.
  * *Exemplo:* `https://github.com/awesomeapibrasil/awesomeapi-cep`
    * `GET /users`: Lista os usuários cadastrados.
    * `POST /users`: Registra um novo usuário.

* **Repositórios de APIs Públicas:**
  * Catálogos públicos que reúnem fontes de dados para estudo, testes e prototipação de aplicações reais (ex.: [Free Public APIs](https://www.freepublicapis.com/)).

* **JSON (JavaScript Object Notation):**
  * Formato leve de representação e troca de dados estruturados.
  * Leitura e escrita simples tanto para humanos quanto para máquinas.
  * **Estruturas Base:**
    * **Objetos:** Coleções de pares chave/valor delimitados por chaves `{}`.
    * **Arrays:** Listas ordenadas de elementos delimitadas por colchetes `[]`.
  * **Exemplo de Objeto JSON:**
    ```json
    {
      "id": "USER-001",
      "nome": "Carlos Silva",
      "email": "carlos@exemplo.com",
      "idade": 28,
      "ativo": true,
      "endereco": {
        "cidade": "São Paulo",
        "estado": "SP"
      },
      "interesses": ["tecnologia", "esportes"]
    }
    ```

---

## 4. Servidor Backend, Web Services e Express.js

* **Servidor Backend vs. Web Service:**
  * **Servidor Backend:** Sistema responsável pelo processamento de regras de negócio, persistência em bancos de dados e fornecimento de respostas para o cliente.
  * **Web Service:** Serviço exposto através de protocolos de rede (HTTP/HTTPS) que permite a interoperabilidade entre sistemas heterogêneos (diferentes tecnologias/linguagens).

* **O Framework Express.js:**
  * Framework minimalista, rápido e flexível desenvolvido para **Node.js**.
  * Simplifica a criação de rotas, tratamento de requisições/respostas, integração de banco de dados e uso de **Middlewares** (funções intermediárias para tratamento de autenticação, logs, validações e CORS).

* **Comparativo: Node.js Puro vs. Express.js:**

  * **Node.js (Módulo `http` nativo):**
    ```javascript
    const http = require('http');
    const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.end('Olá, mundo!');
      } else {
        res.end('Rota não encontrada!');
      }
    });
    server.listen(3000);
    ```

  * **Express.js:**
    ```javascript
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
      res.send('Olá, mundo!');
    });

    app.listen(3000);
    ```

* **Quando utilizar o Express.js?**
  * Ideal para APIs REST, microsserviços, backends escaláveis para web/mobile e prototipagem rápida.
  * Deve ser evitado para processamento computacional excessivamente pesado (onde se usam *Worker Threads*) ou para comunicação puramente bidirecional em tempo real de altíssima frequência (onde se preferem *WebSockets*).

---

## 5. Criação e Hospedagem de uma API REST com Express e Render

### Passo a Passo de Implementação Local:
1. **Inicialização:** Criar a pasta do projeto e abrir no VS Code.
2. **Instalação das dependências:**
   ```bash
   npm install express cors
   ```
3. **Criação do código do servidor (`api.js`):**
   ```javascript
   import express from 'express';
   import cors from 'cors';

   const app = express();

   // Habilita o CORS para permitir requisições de origens diferentes
   app.use(cors());

   // Rota de teste retornando JSON
   app.get('/', (req, res) => {
     res.json({
       date: new Date().toLocaleString('pt-BR'),
       status: 'API no Render funcionando!'
     });
   });

   // Define porta dinâmica para o ambiente de hospedagem (Render)
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}`);
   });
   ```
4. **Mecanismo de Segurança CORS (Cross-Origin Resource Sharing):**
   * Essencial para permitir que aplicações front-end hospedadas em domínios/portas distintas consumam os recursos da API com segurança.

### Hospedagem na Nuvem via Render:
* **Render:** Plataforma de hospedagem em nuvem moderna para Node.js, Python, etc.
* **Vantagens:** Deploy contínuo automático via GitHub, SSL gratuito (HTTPS), interface simples e plano gratuito para pequenos projetos.
* **Passos para Deploy:**
  1. Subir o código do projeto para um repositório no GitHub.
  2. Acessar `dashboard.render.com` e criar um novo **Web Service**.
  3. Conectar o repositório do GitHub.
  4. Configurar os comandos de execução:
     * **Build Command:** `npm install` (ou `node`)
     * **Start Command:** `node api.js`
  5. Concluir o deploy e utilizar a URL gerada (ex.: `seu-projeto.onrender.com`).

---

## 6. Atividades Práticas Propostas

### Atividade 01:
* Pesquisar **10 projetos no GitHub** que utilizem APIs em suas aplicações.
* Clonar e analisar os repositórios, identificando o framework front-end utilizado e as APIs externas consumidas.
* Criar um arquivo **Markdown** contendo uma tabela detalhando o nome dos projetos, frameworks, APIs e links.

### Atividade 02:
1. **API e Front-end:**
   * Criar uma API REST em Node.js com Express contendo uma rota que retorne data e hora atuais.
   * Realizar o deploy da API no **Render**.
   * Desenvolver uma aplicação Front-end que consuma essa API e exiba os dados na tela.

   ### [APIs no front-end](https://projeto-apis-1.onrender.com/)

<br>

2. **Entrega e Documentação:**
   * Separar a API e o Front-end em repositórios distintos no GitHub.
   * Fazer a hospedagem do Front-end (ex.: na Vercel) e da API no Render.
   * Elaborar um documento contendo capturas de tela (prints) do código, do sistema funcionando, dos painéis do Render/Vercel e os links de acesso aos repositórios.