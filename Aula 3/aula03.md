# Resumo - Aula 03: Frameworks Front-end

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

# Resumo de Conteúdo: Projetos com Frameworks Front-end

## 1. Introdução aos Frameworks Front-end

* **Definição:** 
  * Conjunto de ferramentas, bibliotecas e convenções que padronizam o desenvolvimento de interfaces web.
  * Fornece uma estrutura pré-definida que acelera significativamente a criação de aplicações complexas.

* **Comparação: Desenvolvimento Puro (Vanilla JS) vs. Frameworks:**
  * **Sem framework:** Código manual, manutenção difícil, alta repetição de código.
  * **Com framework:** Componentes reutilizáveis, gerenciamento eficiente de estado e atualizações otimizadas da interface.

* **Diferença entre Framework e Biblioteca:**
  * **Biblioteca (ex.: React):** Flexível e sem imposições rígidas; você controla o fluxo e decide quando chamar as funções (*inversão de controle* não se aplica da mesma forma).
  * **Framework (ex.: Angular, Vue):** Controla o fluxo da aplicação e exige uma estrutura definida pré-estabelecida (*Inversion of Control*).

* **Por que utilizar um framework?**
  * **Produtividade Aumentada:** Evita recriar soluções para roteamento, gerenciamento de estado e renderização.
  * **Melhores Práticas:** Código organizado em componentes padronizados.
  * **Manutenção Facilitada:** Uso de tecnologias internas eficientes (como *Virtual DOM* no React ou *Change Detection* no Angular).
  * **Comunidade e Suporte:** Documentação vasta, plugins e soluções consolidadas para problemas comuns.

## 2. Características Gerais dos Frameworks Front-end

* **Estrutura de Código Organizada e Componentização:**
  * Separação limpa de HTML, CSS e JavaScript, baseada em **componentes** independentes e reutilizáveis que encapsulam lógica e apresentação.
* **Programação Reativa:**
  * Atualização automática da interface (*UI*) com base em mudanças no estado da aplicação, dispensando manipulações manuais diretas do DOM.
* **Ferramentas de Build, Bundling e Sistema de Rotas:**
  * Minificação, transpilação e otimização de arquivos para navegadores, além de suporte a **SPAs (*Single Page Applications*)** com navegação fluida sem recarregar a página inteira.
* **Integração com APIs, Padrões e Testes:**
  * Facilidade em chamadas assíncronas, diretrizes de acessibilidade e suporte embutido a ferramentas de testes unitários e de integração.

## 3. Comparação entre as Principais Tecnologias

* **React:**
  * Desenvolvido pelo Facebook (2013). Tecnicamente uma *biblioteca* JavaScript para construir interfaces dinâmicas e baseadas em componentes usando o *Virtual DOM*.
* **Angular:**
  * Desenvolvido pelo Google. Um *framework* completo, robusto e estruturado em MVC (Model-View-Controller) com uso nativo de **TypeScript**, ideal para grandes aplicações corporativas de página única.
* **Vue.js:**
  * Um *framework* progressivo, flexível e de fácil adoção gradual, destacando-se pelos **Single-File Components (SFCs)** (*arquivos `.vue` unindo HTML, CSS e JS*) e excelente desempenho.
* **Next.js:**
  * Framework baseado em React focado no desenvolvimento de aplicações web modernas e *full-stack*, oferecendo renderização no servidor (*SSR*), roteamento baseado em arquivos, otimização de SEO e imagens.

## 4. Conceitos Fundamentais do React

* **Virtual DOM vs. Real DOM:**
  * O DOM real é uma árvore pesada. O React mantém uma cópia leve (*Virtual DOM*); ao ocorrerem alterações, atualiza o Virtual DOM, compara com o real e aplica apenas as diferenças exatas, tornando a renderização ultrarrápida.
* **Hooks Principais:**
  * `useState`: Gerencia o estado de um componente funcional.
  * `useEffect`: Lida com efeitos colaterais e requisições assíncronas (como chamadas de API).
* **JSX e Diferenças com HTML:**
  * Permite escrever marcação dentro do JavaScript. Usa chaves `{}` para expressões JS, atributos em formato *camelCase* (`className` em vez de `class`) e exige fechamento estrito de tags (ex.: `<img />`).
* **Gerenciamento de Estado:**
  * `Context API` para estados simples/moderados e `Redux` para cenários globais complexos.

## 5. Criação e Estrutura de Projetos: Angular

* **Requisitos e Instalação:**
  * Node.js instalado e conhecimento em Orientação a Objetos (POO).
  * Instalação global do CLI: `npm install -g @angular/cli`
  * Criação e execução: `ng new <nome-app>`, `cd <nome-app>`, `code .`, `ng serve` (porta padrão `4200`).
* **Estrutura de Pastas e Arquivos Principais:**
  * `node_modules/`: Dependências e pacotes instalados.
  * `public/`: Arquivos estáticos públicos.
  * `src/app/`: Diretório central de componentes, serviços e submódulos.
  * `index.html`: Ponto de entrada com o seletor raiz `<app-root>`.
  * `main.ts` / `main.server.ts`: Inicialização do módulo raiz e suporte a SSR (*Angular Universal*).
  * `styles.css`: Estilos globais.
  * `angular.json`: Configuração de build, testes e estilos.
  * Arquivos de configuração do TypeScript (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`).

## 6. Criação e Estrutura de Projetos: Vue

* **Requisitos e Instalação:**
  * Node.js e familiaridade com reatividade em JavaScript/TypeScript.
  * Criação e execução: `npm create vue@latest`, `cd <projeto>`, `npm install`, `code .`, `npm run dev` (porta padrão `5173`).
* **Estrutura de Pastas e Arquivos Principais:**
  * `src/assets/`: Arquivos estáticos processados (imagens, CSS global).
  * `src/components/`: Componentes Vue reutilizáveis.
  * `App.vue`: Componente raiz integrando a estrutura do Single-File Component.
  * `main.js`: Ponto de entrada que monta o app no DOM.
  * `vite.config.js`: Configurações do empacotador Vite.

## 7. Criação e Estrutura de Projetos: Next.js

* **Conceito:**
  * Camada superior ao React que adiciona recursos essenciais como roteamento baseado em arquivos (pasta `app`), Server Components, otimização de performance e SEO.
* **Comandos de Inicialização:**
  * `npx create-next-app@latest meu-projeto`
  * `cd meu-projeto`, `code .`, `npm run dev` (porta padrão `3000` ou `3001`).
* **Estrutura de Pastas:**
  * Pasta `app/` (App Router) contendo páginas baseadas em arquivos (`page.tsx`), layouts e sub-rotas.
  * Configurações como `next.config.ts`, `tsconfig.json` e arquivos de ambiente.

## 8. Importação e Aproveitamento de Projetos Prontos

* **Aceleração do Desenvolvimento:**
  * A comunidade open source disponibiliza centenas de modelos prontos, evitando começar do zero.
* **Ferramentas de Pesquisa:**
  * **GitHub:** Busca de repositórios públicos via comando `git clone <url>`.
  * **Vercel:** Busca por templates e modelos de integração direta.
  * **CodeSandbox:** Pesquisa de templates interativos web diretamente no navegador.

## 9. Atividade Prática Proposta

* **Objetivo:**
  * Desenvolver em grupo **quatro projetos Web** sobre um mesmo tema, implementando individualmente nas tecnologias: **React**, **Vue**, **Angular** e **Next.js**.
  * Cada projeto deve apresentar páginas funcionais, responsivas e baseadas em componentes.
* **Versionamento e Publicação:**
  * Versionamento contínuo com Git e histórico de *commits* publicado no GitHub.
* **Entregas Exigidas:**
  1. Projeto 01: React - [React project](https://github.com/biancaciriloads/projeto-react-01)
  2. Projeto 02: Vue - [Vue Project](https://github.com/RickRazz0/projeto-vue)
  3. Projeto 03: Angular - [Meu app Angular](https://github.com/Atividades-SENAI/meu-app-angular)
  4. Projeto 04: Next.js - [Projeto Next.js](https://github.com/Felipe-Pinheiro-Lopes/projeto-next)