# Resumo - Aula 05: Criando APIs para o Front-end

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

## 1. Recapitulação: Fundamentos de APIs, Métodos HTTP e JSON

* **Métodos HTTP:**
  * **GET:** Recupera informações do servidor. É seguro (não altera dados) e **idempotente** (múltiplas chamadas geram o mesmo resultado).
  * **POST:** Cria novos recursos no servidor. **Não é idempotente** (chamadas repetidas criam múltiplos registros).
  * **PUT e PATCH:**
    * *PUT:* Substitui **completamente** um recurso existente.
    * *PATCH:* Atualiza **parcialmente** um recurso existente.
  * **DELETE:** Remove um recurso específico. É **idempotente** (excluir algo já apagado não causa erro estrutural).

* **Endpoint:**
  * URL específica que fornece acesso a um recurso ou funcionalidade na API, representando o ponto exato de comunicação entre cliente e servidor.

* **JSON (JavaScript Object Notation):**
  * Formato leve de troca de dados estruturados, legível por humanos e simples de interpretar por máquinas.
  * Composto por **objetos** (pares chave/valor entre `{}`) e **arrays** (listas ordenadas entre `[]`).

* **Servidor Backend e Web Service:**
  * **Servidor Backend:** Processa requisições, gerencia persistência e executa regras de negócio.
  * **Web Service:** Serviço acessível via web que padroniza a comunicação entre sistemas heterogêneos usando protocolos HTTP/HTTPS.

---

## 2. Evolução do Projeto: Criando uma API REST com CRUD de Notas

Para evoluir a aplicação além de uma simples consulta estática de data e hora, construiu-se um sistema com **CRUD** (*Create, Read, Update, Delete*) utilizando armazenamento baseado em um arquivo JSON local (`data.json`) e um servidor em **Express.js** (`server.js`).

### Rotas CRUD Implementadas:
1. **Listar Notas (`GET /api/notes`):** Retorna todas as notas armazenadas.
2. **Criar Nota (`POST /api/notes`):** Adiciona uma nova nota exigindo `titulo` e `texto`. Cada nota recebe um identificador único gerado por `Date.now().toString()` e data de criação.
3. **Obter Nota por ID (`GET /api/notes/:id`):** Localiza e retorna uma nota específica pelo seu ID.
4. **Atualizar Nota (`PUT /api/notes/:id`):** Atualiza o título e o texto de uma nota existente localizada pelo ID.
5. **Excluir Nota (`DELETE /api/notes/:id`):** Remove a nota correspondente ao ID informado e retorna status de sucesso.

---

## 3. Implementação Prática do Servidor (Express.js + Node.js)

### Dependências Utilizadas:
* `express`: Framework minimalista para criação de servidores web e rotas.
* `body-parser`: Biblioteca intermediária (*middleware*) para interpretar o corpo das requisições HTTP em formato JSON (essencial para métodos `POST` e `PUT`).
* Módulo nativo `fs` (*File System*): Utilizado para ler e escrever dados de forma síncrona/assíncrona no arquivo `data.json`.

### Estrutura Base do Código (`server.js`):
```javascript
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE = 'data.json';

// Middleware para interpretar JSON e liberar CORS básico
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Funções auxiliares para manipulação de arquivos
function readNotes() {
  try {
    const data = fs.readFileSync(FILE);
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
}

// Rotas CRUD
app.get('/api/notes', (req, res) => {
  res.json(readNotes());
});

app.post('/api/notes', (req, res) => {
  const notes = readNotes();
  const novaNota = {
    id: Date.now().toString(),
    titulo: req.body.titulo,
    texto: req.body.texto,
    criadoEm: new Date().toISOString()
  };
  notes.push(novaNota);
  saveNotes(notes);
  res.json(novaNota);
});

app.put('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const index = notes.findIndex(n => n.id === req.params.id);
  if (index >= 0) {
    notes[index].titulo = req.body.titulo || notes[index].titulo;
    notes[index].texto = req.body.texto || notes[index].texto;
    saveNotes(notes);
    res.json(notes[index]);
  } else {
    res.status(404).json({ erro: 'Nota não encontrada' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const notes = readNotes();
  const novasNotas = notes.filter(n => n.id !== req.params.id);
  saveNotes(novasNotas);
  res.json({ mensagem: 'Nota removida com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 4. Questões para Reflexão Arquitetural e de Segurança

* **Riscos de Segurança:** 
  * O uso do cabeçalho CORS liberado globalmente (`*`) sem restrições de domínios confiáveis expõe a API.
  * Ausência de autenticação, autorização e sanitização de dados de entrada pode gerar vulnerabilidades como injeção de scripts ou modificações indevidas.

* **Armazenamento em Arquivo JSON (`data.json`) vs. Bancos de Dados:**
  * *Vantagens:* Simplicidade na prototipagem e ausência de configuração de banco de dados externo.
  * *Desvantagens:* Falta de suporte a transações (ACID), concorrência de escrita limitada e problemas de desempenho e bloqueio de E/O (*blocking I/O*) em grande escala.
  * *Limitações com 10.000+ Registros:* Ler e reescrever o arquivo inteiro a cada operação geraria gargalos severos de memória e processamento.

* **Organização de Código:**
  * Manter toda a lógica em um único arquivo (`server.js`) prejudica a manutenibilidade. A refatoração ideal envolve separar rotas, controladores (*controllers*) e serviços de persistência (*repositories*).

---

## 5. Documentação e Testes de APIs com Postman

* **O que é o Postman?**
  * Ferramenta colaborativa padrão de mercado para criar, testar, documentar e monitorar requisições HTTP sem a necessidade de comandos complexos.
* **Recursos Principais:**
  * Criação de coleções (*Collections*) para organizar endpoints CRUD.
  * Uso de variáveis de ambiente, scripts de teste automatizados, simulação de servidores (*Mock Servers*) e geração de documentações públicas automáticas.

---

## 6. Atividades Práticas Propostas

### Atividade 01:
* Atualizar e enviar o repositório da disciplina no GitHub contendo todos os arquivos e versões finais desenvolvidas, submetendo o link correto através do formulário oficial.

### Atividade 02:
1. **Back-end & Front-end Fullstack:**
   * Desenvolver a API RESTful de notas com Express.js e realizar o deploy do back-end na plataforma **Render**.
   * Construir uma interface em **React** que consuma o CRUD da API online.
   * Publicar o front-end na **Vercel**.
2. **Documentação no Postman:**
   * Criar uma coleção no Postman cobrindo os quatro verbos HTTP (GET, POST, PUT, DELETE) com descrições detalhadas de códigos de resposta.
3. **Entrega Final:**
   * Organizar a documentação em um arquivo contendo capturas de tela (*prints*) do código, da aplicação rodando e os links do GitHub, Deploy (Vercel/Render) e da coleção do Postman, enviando a entrega pela plataforma Canva.