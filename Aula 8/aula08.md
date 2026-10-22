# Resumo - Aula 08: Projeto React e Revisão de JavaScript

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

## 1. Revisão de JavaScript para Front-end

Antes de iniciar no ecossistema React, é fundamental dominar os fundamentos do JavaScript moderno, que serve de base para a construção das interfaces e da lógica da aplicação.

### 1.1 Inclusão e Formas de Uso
* **Tag `<script>` Direta:** Permite executar códigos simples diretamente no corpo do documento HTML.
* **Arquivos Externos (`src`):** Recomendado para projetos maiores por facilitar a organização, manutenção e separação de responsabilidades.
* **Atributos de Eventos (In-line):** Atributos como `onclick` e `onblur` tornam a página interativa, respondendo às ações do usuário.
* **Capacidade Dinâmica:** O JS permite controlar o DOM, criar animações, consumir dados de APIs externas e manipular a interatividade avançada da página.

### 1.2 Variáveis e Escopos
JavaScript é uma linguagem dinamicamente tipada e *case-sensitive* (diferencia maiúsculas de minúsculas, como `nome`, `Nome` e `NOME`). Não exige a declaração de todas as variáveis no início do script.

* **`var`:** Possui **escopo de função** ou global. Quando declarada dentro de blocos como `if`, `for` ou `while`, ainda assim permanece acessível fora deles (sofre *hoisting*).
* **`let`:** Possui **escopo de bloco** (`{ }`), existindo apenas dentro do bloco onde foi criada. Torna o código mais seguro e previsível.
* **`const`:** Possui **escopo de bloco** e cria variáveis cujas referências não podem ser reatribuídas.

### 1.3 Tipos de Dados
O JavaScript identifica automaticamente os tipos de dados armazenados (podendo ser checados via operador `typeof`):
* **Tipos Primitivos:** `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol` (identificador único) e `BigInt` (números inteiros de alta precisão).
* **Tipos Estruturados/Objetos:** `Object` (coleção chave-valor) e `Array` (lista ordenada).

### 1.4 Operadores
* **Aritméticos:** Soma (`+`), Subtração (`-`), Multiplicação (`*`), Divisão (`/`), Resto (`%`), Exponenciação (`**`), Incremento (`++`), Decremento (`--`).
* **Comparação:** 
  * `==` e `!=`: Compara valores permitindo conversão implícita de tipo.
  * `===` e `!==`: Compara **valor e tipo** estritamente (boa prática).
  * Maior/Menor: `>`, `<`, `>=`, `<=`.
* **Lógicos:** `&&` (E - todas as condições verdadeiras), `||` (OU - ao menos uma verdadeira), `!` (NÃO - inverte o valor lógico).
* **Atribuição:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.

### 1.5 Condicionais e Estruturas de Repetição
* **Condicionais:** `if`, `else if`, `else`. Avaliam expressões booleanas.
* **Operador Ternário:** Sintaxe enxuta para decisões simples: `condicao ? valorSeVerdadeiro : valorSeFalso`.
* **Repetição:**
  * `for`: Utilizado quando se controla ou sabe previamente a quantidade de iterações.
  * `while`: Repete enquanto a condição for verdadeira.
  * `do...while`: Executa o bloco de código ao menos uma vez antes de avaliar a condição.
  * **Controles:** `break` (interrompe o loop imediatamente) e `continue` (pula para a próxima iteração).

### 1.6 Funções
Blocos de código reutilizáveis que executam tarefas e podem retornar valores via `return`:
* **Declaração Tradicional:** `function somar(a, b) { return a + b; }`
* **Arrow Functions:** `const somar = (a, b) => a + b;`

### 1.7 Arrays e Objetos
* **Arrays:** Listas organizadas por índices numéricos iniciados em `0`.
  * Propriedade `length`: Retorna a quantidade de elementos.
  * Métodos de iteração: `.forEach()` (percorre os itens), `.filter()` (filtra itens por condição), `.map()` (transforma os itens).
* **Objetos:** Estruturas que agrupam propriedades (dados) e métodos (funções). A palavra-chave `this` referencia o próprio objeto internamente.

### 1.8 Manipulação Nativa do DOM (*Document Object Model*)
A representação em árvore da página HTML permite alterações via JS:
* **Seleção:** `document.getElementById('id')`, `document.querySelector('seletorCSS')`, `document.querySelectorAll('seletor')`.
* **Alteração de Conteúdo e Classes:** `.textContent`, `.innerHTML`, `.value`, `.classList.add() / remove() / toggle()`.
* **Criação e Inserção:** `document.createElement('tag')`, `parent.appendChild(element)`.
* **Escuta de Eventos:** `element.addEventListener('click', () => { ... })`.

---

## 2. Fundamentos do React

O **React** é uma biblioteca JavaScript para construção de interfaces de usuário declarativas, eficientes e baseadas em componentes.

### 2.1 JSX (JavaScript XML)
JSX é uma extensão de sintaxe que permite escrever estruturas semelhantes ao HTML diretamente dentro do código JavaScript.

* **Benefícios:** Combina a estrutura visual com a lógica da interface, facilitando a leitura e a manutenção.
* **Expressões JS em JSX:** É possível interpolar variáveis, chamadas de funções e operações matemáticas usando chaves `{}`.
  ```jsx
  const nome = "João";
  const elemento = <h1>Olá, {nome}!</h1>;
  ```
* **Principais Diferenças para o HTML Tradicional:**
  * Usa `className` em vez de `class`.
  * Usa `htmlFor` em vez de `for`.
  * Todas as tags **devem ser fechadas** (ex: `<img />`, `<br />`, `<input />`).
  * O retorno de um componente JSX deve ter **um único elemento pai/raiz** ou utilizar um *Fragment* (`<>...</>`).

---

### 2.2 Componentes
Componentes são unidades independentes, isoladas e reutilizáveis da interface gráfica.

* **Estrutura:** Em React moderno, componentes são **funções JavaScript** que retornam elementos JSX.
* **Nomenclatura:** O nome de um componente deve **obrigatoriamente começar com letra maiúscula** (*PascalCase*), como `Cabecalho()` ou `CardProduto()`.
* **Invocação:** São chamados dentro do JSX usando a sintaxe de tag: `<Cabecalho />`.
* **Árvore de Componentes:** Uma aplicação React é organizada como uma hierarquia em árvore:
  * `App` (Raiz)
    * `Cabecalho`
    * `BarraDePesquisa`
    * `ListaDeConceitos`
      * `CardConceito`
    * `Rodape`

---

### 2.3 Props (Properties)
* **O que são:** *Props* são argumentos ou dados passados de um componente pai para um componente filho.
* **Objetivo:** Permitem reutilizar a mesma estrutura visual exibindo conteúdos ou comportamentos diferentes.
* **Fluxo Unidirecional de Dados:** No React, os dados sempre fluem **de cima para baixo** (do pai para o filho).
* **Tipos de Valores Aceitos em Props:**
  * Strings: `titulo="React"`
  * Números: `idade={25}`
  * Booleanos: `ativo={true}`
  * Arrays e Objetos: `dados={[1, 2, 3]}`
  * Funções e Elementos React.

```jsx
// Declaração com desestruturação
function CardConceito({ titulo, descricao }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </article>
  );
}

// Utilização no componente pai
<CardConceito titulo="JSX" descricao="Sintaxe para descrever interfaces." />
```

---

### 2.4 Virtual DOM e Reconciliação
* **DOM Real vs. Virtual DOM:**
  * **DOM Real:** Representação estruturada do navegador. Manipulações diretas e frequentes no DOM Real são custosas em termos de desempenho.
  * **Virtual DOM:** Uma cópia simplificada da interface mantida em memória pelo React.
* **Ciclo de Atualização:**
  1. **Mudança:** Uma ação do usuário altera dados ou o estado da aplicação.
  2. **Renderização:** O React executa os componentes para gerar uma nova árvore do Virtual DOM.
  3. **Reconciliação (*Diffing*):** O React compara a nova árvore do Virtual DOM com a versão anterior.
  4. **Atualização do DOM Real:** O React aplica no DOM Real **apenas as diferenças exatas** encontradas, otimizando o rendimento.

---

### 2.5 Listas e a Propriedade `key`
Aplicações frequentemente precisam renderizar coleções de dados (arrays).

* **Uso do `.map()`:** Transforma cada item de um array de dados em um elemento JSX correspondente.
* **A Propriedade `key`:** 
  * É um atributo especial e obrigatório para itens de uma lista renderizada dinamica no React.
  * Deve ser um **identificador único e estável** (ex: `id` do banco de dados).
  * **Função:** Permite que o React identifique com precisão quais itens foram adicionados, removidos, alterados ou reordenados durante o processo de reconciliação.

```jsx
const alunos = [
  { id: 101, nome: "Ana" },
  { id: 102, nome: "Bruno" }
];

return (
  <ul>
    {alunos.map((aluno) => (
      <li key={aluno.id}>{aluno.nome}</li>
    ))}
  </ul>
);
```

---

### 2.6 Renderização Condicional
Permite alterar o conteúdo, esconder ou exibir partes da interface com base em condições lógicas ou estados.

1. **Uso de `if` com `return` Antecipado:** Ideal quando a interface de um estado é completamente diferente de outra.
   ```jsx
   function MensagemAcesso({ autenticado }) {
     if (autenticado) {
       return <p>Bem-vindo de volta!</p>;
     }
     return <p>Entre para continuar.</p>;
   }
   ```
2. **Operador Ternario (`condicao ? verdadeiro : falso`):** Excelente para alternar pequenas partes de componentes ou estados de carregamento (*loading*).
   ```jsx
   <div>
     {carregando ? <p>Buscando...</p> : <p>Busca finalizada.</p>}
   </div>
   ```

---

## 3. Atividade Prática Proposta

Desenvolver uma aplicação React completa aplicando de forma integrada os conceitos abordados:

* **Conceitos Obrigatórios:** JSX, criação de Componentes, passagem de Props, manipulação de Listas com a propriedade `key` e Renderização Condicional.
* **Entrega:**
  1. Criar um repositório público no **GitHub**.
  2. Incluir um arquivo **`README.md`** detalhando:
     * Descrição da aplicação.
     * Lista de funcionalidades implementadas.
     * Explicação técnica dos conceitos de React utilizados.