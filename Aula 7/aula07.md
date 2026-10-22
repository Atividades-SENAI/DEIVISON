# Resumo - Aula 07: Frameworks CSS e Estilização Web

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

## 1. Fundamentos e Aplicação do CSS

O **CSS** (*Cascading Style Sheets*) é a linguagem utilizada para definir a camada visual, apresentação e layout de páginas web. Ele controla cores, tipografia, margens, alinhamentos, larguras, alturas e o comportamento de elementos na tela.

* **Sintaxe Básica:**
  $$ \text{Seletor} \ \{ \ \text{Propriedade}: \text{Valor}; \ \} $$
  * **Seletor:** Indica qual elemento ou grupo do HTML receberá a regra.
  * **Propriedade:** O atributo a ser modificado (ex: `background-color`).
  * **Valor:** A definição aplicada ao atributo (ex: `#FF0000`).

* **Formas de Aplicação:**

  1. **In-line:** Aplicado diretamente na tag HTML através do atributo `style`. Indicado apenas para testes rápidos ou ajustes pontuais.
     ```html
     <p style="color: red; font-size: 20px;">Texto de exemplo</p>
     ```

  2. **Interno:** Definido dentro do bloco `<style>` no `<head>` do documento HTML. Recomendado para testes ou estilos exclusivos de uma única página.
     ```html
     <style>
       p { color: blue; font-size: 18px; }
     </style>
     ```

  3. **Externo (Boa Prática):** Escrito em um arquivo `.css` separado e vinculado ao HTML via tag `<link>`. Centraliza os estilos, otimiza a manutenção e reutiliza regras em múltiplos documentos.
     ```html
     <link rel="stylesheet" href="estilos.css">
     ```

## 2. Propriedades Essenciais, Classes e IDs

* **Propriedades do CSS:**
  * `color` / `background-color`: Define a cor do texto e do fundo, respectivamente.
  * `font-family` / `font-size`: Configura a família tipográfica e a dimensão do texto (`px`, `rem`, `em`).
  * `margin` / `padding`: Controla o espaçamento externo (fora da borda) e interno (entre a borda e o conteúdo).
  * `border`: Configura espessura, estilo e cor da borda (`2px solid #000`).
  * `width` / `height`: Definem a largura e a altura do elemento.
  * `display`: Define como o elemento é renderizado no layout (`block`, `inline`, `flex`, `grid`, `none`).
  * `position`: Método de posicionamento (`static`, `relative`, `absolute`, `fixed`, `sticky`).
  * `top`, `right`, `bottom`, `left`: Ajustes finos de posição associados ao `position`.
  * `text-align`: Alinhamento horizontal de texto (`left`, `center`, `right`, `justify`).

* **Classes vs. IDs:**
  * **Classes (`.nome-classe`):** Permitem reutilizar estilos em múltiplos elementos da página, promovendo padronização visual.
  * **IDs (`#nome-id`):** Estilizam elementos únicos e específicos. Também servem como âncoras de navegação e seletores para JavaScript.

## 3. O Modelo de Caixa (*Box Model*)

O **Box Model** é a estrutura conceitual fundamental que engloba todos os elementos HTML renderizados no navegador, determinando como suas dimensões e espaçamentos são calculados.

* **Camadas do Box Model (de dentro para fora):**
  1. **Content (Conteúdo):** A área central onde aparecem textos, imagens ou elementos filhos.
  2. **Padding (Preenchimento Interno):** Espaço transparente entre o conteúdo e a borda.
  3. **Border (Borda):** A linha contornando o padding e o conteúdo.
  4. **Margin (Margem Externa):** Espaço transparente fora da borda, separando o elemento dos demais componentes vizinhos.

* **Importância:** Controla o dimensionamento correto dos componentes, evita sobreposição indesejada e garante a previsibilidade em layouts responsivos.

## 4. Layouts Unidimensionais com Flexbox

O **Flexbox** (*Flexible Box Layout*) é um módulo projetado para organizar, alinhar e distribuir espaço entre itens dentro de um container, mesmo quando seus tamanhos são desconhecidos ou dinâmicos.

* **Principais Propriedades do Container:**
  * `flex-direction`: Define o eixo principal (`row`, `column`, `row-reverse`, `column-reverse`).
  * `justify-content`: Alinha itens ao longo do **eixo principal** (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`).
  * `align-items`: Alinha itens ao longo do **eixo transversal** (`flex-start`, `center`, `flex-end`, `stretch`, `baseline`).
  * `flex-wrap`: Controla a quebra de linha quando os elementos ultrapassam a largura do container (`nowrap`, `wrap`).
  * `gap`: Define o espaçamento direto entre os itens flexíveis sem afetar as margens externas.

## 5. Responsividade e Meta Viewport

* **Layouts Responsivos:** Conjunto de técnicas de design que adaptam o layout e os componentes de uma aplicação a diferentes tamanhos de tela (mobile, tablet e desktop), garantindo boa usabilidade.
* **Meta Viewport:** Tag obrigatória no `<head>` do HTML para habilitar o dimensionamento correto em telas móveis:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

## 6. Frameworks CSS e a Abordagem *Utility-First* (Tailwind CSS)

* **O que é um Framework CSS?**
  * Conjunto pré-estruturado de arquivos, classes e padrões que aceleram a criação de interfaces web.
  * **Três Pilares:** **Layout** (Grid/Flexbox), **Estilos** (Tipografia/Cores) e **Componentes** (Botões/Cards/Navbars).

* **Tailwind CSS e o conceito Utility-First:**
  * Em vez de componentes prontos e pré-estilizados com nomes semânticos (ex: `.card`, `.btn`), o Tailwind oferece pequenas classes utilitárias, onde **cada classe possui uma única responsabilidade**.
  * As interfaces são construídas diretamente no código HTML combinando essas utilidades.

  * **Exemplo de Equivalência:**
    * `p-6` $\rightarrow$ `padding: 1.5rem;`
    * `bg-blue-600` $\rightarrow$ `background-color: #2563eb;`
    * `rounded-lg` $\rightarrow$ `border-radius: 0.5rem;`
    * `text-white` $\rightarrow$ `color: #ffffff;`

* **Vantagens do Tailwind CSS:**
  * Redução drástica do tempo de desenvolvimento e da escrita de CSS customizado.
  * Flexibilidade total de criação sem depender de temas padrão.
  * Padronização de tokens de design (espaçamentos, sombras e paleta de cores).
  * Construção responsiva simples utilizando prefixos *Mobile-First* (`sm:`, `md:`, `lg:`).

## 7. Integrações e Ferramentas do Tailwind CSS

1. **Play CDN:** Indicado exclusivamente para prototipagem rápida e testes no navegador:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
   ```
2. **Tailwind CLI / PostCSS:** Método recomendado para produção através do Node.js/NPM, que compila apenas as classes efetivamente utilizadas no projeto (*JIT Engine*).
3. **Tailwind CSS IntelliSense:** Extensão do VS Code que oferece autocompletar de classes, pré-visualização dos estilos CSS gerados e detecção de erros.

## 8. Atividades Práticas Propostas

### Atividade 01: CSS Nativo e Flexbox
* Criar uma estrutura contendo arquivos `index.html` e `style.css` vinculados via `<link>`.
* Inserir 20 elementos e configurar todas as propriedades do **Box Model** (`Content`, `Padding`, `Border` e `Margin`).
* Aplicar no mínimo 20 propriedades do **Flexbox** para organizar os elementos de maneira responsiva.

### Atividade 02: Projeto prático com Tailwind CSS
* Criar uma aplicação web utilizando no mínimo **30 classes utilitárias diferentes do Tailwind CSS** (abrangendo cores, tipografia, espaçamento, dimensões, bordas, posição, Flexbox/Grid e responsividade).
* Subir o projeto para um repositório Git.
* Documentar a entrega através de um arquivo `README.md` contendo:
  * Prints do código e da aplicação em execução.
  * Tabela/Lista das 30 classes utilizadas com a descrição de suas respectivas funções.
  * Link direto do repositório.