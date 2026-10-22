# Resumo - Aula 02: Introdução ao Versionamento de Código

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

# Resumo de Conteúdo: Configuração do Ambiente de Desenvolvimento

---

## 1. Introdução ao Versionamento

* **Conceito de Versionamento:**
  * Processo de atribuir um identificador único a cada versão de um documento ou software (seja numérico como `v1.0` ou baseado em datas).
  * Registra o que foi alterado, quem alterou e quando, garantindo auditoria e rastreabilidade total do projeto.
  * Facilita a organização, a colaboração em equipe e a recuperação segura de estados anteriores.

* **Versionamento vs. Backup:**
  * **Backup:** Cópia pontual do estado atual do projeto; não possui rastreio de autoria; utiliza arquivo único sem suporte a fusão (*merge*); permite apenas a restauração total do ambiente.
  * **Versionamento:** Histórico detalhado de cada alteração; identifica quem mudou, quando e o porquê; permite colaboração simultânea; possibilita reversão granular de arquivos ou trechos do código.

* **A Importância e Benefícios do Versionamento:**
  * **Prevenção do Caos:** Evita o acúmulo de arquivos duplicados sem contexto (ex.: `versao_final_agora_sim2.zip`), o conflito direto entre desenvolvedores e a perda acidental de código.
  * **Trabalho Simultâneo e Colaboração:** Vários programadores atuam na mesma base de código sem sobrescrever o trabalho alheio.
  * **Gestão de Qualidade e Histórico:** Auditoria contínua, detecção precoce de conflitos, facilidade de testar alterações em áreas isoladas e integração simples com pipelines de CI/CD.

---

## 2. Versionamento Semântico (SemVer)

* **Estrutura Padrão (`MAJOR.MINOR.PATCH`):**
  * **MAJOR (Ápice):** Alterado quando há modificações incompatíveis com versões anteriores (mudanças de quebra/break changes na API).
  * **MINOR (Incremento):** Alterado ao adicionar novas funcionalidades mantendo a compatibilidade retroativa.
  * **PATCH (Correção):** Alterado em correções de bugs (*bug fixes*) que não afetam o uso da API existente.

* **Ciclo de Vida das Versões:**
  * Versões `0.x.x` indicam a fase de desenvolvimento inicial do software.
  * A versão `1.0.0` define o primeiro lançamento público estável.

* **Tipos Comuns de Modificações no Código:**
  * **Bug Fix:** Correção de erros.
  * **New Feature:** Adição de funcionalidade nova.
  * **Feature Enhancement:** Melhoria em funcionalidade existente.
  * **Refactoring:** Reorganização do código para clareza e eficiência, sem alterar comportamento externo.
  * **Performance:** Otimização para ganho de velocidade e menor consumo de recursos.
  * **Security Patch:** Correção de vulnerabilidades de segurança.
  * **Dependency Update:** Atualização de bibliotecas e pacotes externos.
  * **Adding Tests:** Inclusão de testes automatizados para garantir a estabilidade do sistema.

---

## 3. Ferramentas do Desenvolvedor e Git

* **Ambiente de Desenvolvimento Integrado (IDE):**
  * Reúne em uma única ferramenta recursos para programar, testar, executar e depurar aplicações.
  * **Visual Studio Code (VS Code):** Editor de código leve que se comporta como uma IDE completa via extensão de plugins e integração nativa com o ecossistema de desenvolvimento.

* **Git (Sistema de Controle de Versão Distribuído):**
  * Criado por Linus Torvalds, opera via linha de comando instalado localmente na máquina.
  * Permite sincronização com repositórios remotos (como GitHub, GitLab e Bitbucket), salvando pontos de restauração da aplicação.

* **Configuração Inicial do Git:**
  * Teste da instalação via terminal: `git --version`.
  * Definição global da autoria das alterações:
    * `git config --global user.name "<Seu Nome>"`
    * `git config --global user.email "<seu.email@exemplo.com>"`

* **Uso de Tags no Git:**
  * Marcadores para sinalizar pontos específicos no histórico do projeto (como releases estáveis `v1.0.0`).
  * **Tag Leve (Lightweight):** Um apelido/ponteiro simples para um commit específico.
  * **Tag Anotada (Annotated):** Objeto completo que armazena mensagem, data, autor e dados de verificação.
  * Comandos comuns: `git tag` (listar/criar) e `git push origin <nome-da-tag>` (enviar ao repositório remoto).

* **Boas Práticas no Git:**
  * Realizar commits pequenos, frequentes e atômicos.
  * Escrever mensagens de commit descritivas e objetivas (explicando o quê e o porquê da mudança).
  * Utilizar *branches* para isolar novidades e correções mantendo a *branch* principal (*main/master*) sempre estável.
  * Executar testes automatizados antes de realizar o *merge*.

---

## 4. Node.js, NPM e Ecossistema React

* **Node.js:**
  * Ambiente de execução (*runtime*) que permite rodar código JavaScript no lado do servidor (backend).
  * Permite a unificação da linguagem JavaScript tanto no cliente (navegador) quanto no servidor.

* **Node Package Manager (NPM):**
  * Gerenciador de pacotes padrão instalado junto ao Node.js.
  * Automatiza a instalação, atualização e remoção de bibliotecas externas sem necessidade de downloads manuais.
  * Utiliza o arquivo `package.json` para mapear todas as dependências do projeto. A execução do comando `npm install` (ou `npm i`) baixa automaticamente os módulos configurados.

* **Criação de Projetos React (`create-react-app`):**
  * Inicia uma estrutura pronta com servidor local, sistema de empacotamento (Webpack) e transpilação JS moderna (Babel).
  * Comando base: `npx create-react-app meu-projeto-react`
  * Scripts de execução:
    * `cd meu-projeto-react`
    * `code .` (abre a pasta no VS Code)
    * `npm start` (inicia o servidor de desenvolvimento em `http://localhost:3000`)

* **Estrutura de Pastas e Arquivos de um Projeto React:**
  * `node_modules/`: Diretório contendo todo o código-fonte das dependências e bibliotecas instaladas via NPM.
  * `public/`: Contém arquivos estáticos da aplicação (`index.html`, ícones, manifestos).
  * `src/`: Diretório principal do código React.
    * `index.js`: Ponto de entrada do React que conecta e renderiza o componente raiz na DOM do navegador.
    * `App.js`: Componente funcional principal (raiz) que estrutura a interface inicial.
    * `App.css` e `index.css`: Folhas de estilo locais do componente e globais da aplicação, respectivamente.
  * `.gitignore`: Lista de arquivos e diretórios ignorados pelo Git (como `node_modules/` ou chaves privadas).
  * `package.json` / `package-lock.json`: Arquivos de manifesto contendo metadados, scripts executáveis e o mapeamento detalhado das versões de cada dependência instalada.

---

## 5. Deploy e Hospedagem com Vercel

* **O que é Deploy?**
  * Etapa final do desenvolvimento que coloca a aplicação em um ambiente de produção para torná-la pública e acessível aos usuários finais.
  * Envolve compilação, otimização (*build*), configuração de variáveis de ambiente e hospedagem.

* **Recursos da Plataforma Vercel:**
  * Hospedagem simplificada e otimizada para aplicações *Front-end* modernas e sites estáticos.
  * **Integração com Git:** Conexão nativa com GitHub/GitLab para gerar deploys automáticos a cada novo `git push`.
  * **Suporte Nativo a Frameworks:** Otimizada para React, Next.js, Vue, Nuxt, entre outros.
  * **Deploys Instantâneos e Rollback:** Permite reverter versões com poucos cliques de forma segura.
  * **CDN Global e Serverless Functions:** Distribui a aplicação em uma rede global de baixa latência e permite execução de funções de backend sob demanda.

---

## 6. Atividades Práticas Propostas

1. **Aplicação Prática Individual/Grupo:**
   * Criar um projeto React local utilizando VS Code e Node.js.
   * Inicializar o controle de versão com Git e realizar o *push* para o GitHub.
   * Realizar o deploy na Vercel integrando o repositório do GitHub para garantir atualização e URL pública automática.

        ### [1º Projeto React](https://github.com/Atividades-SENAI/1-Projeto_react)
<Br>

2. **Relatório Técnico em Grupo:**
   * Escolher um Framework Front-end.
   * Redigir um relatório em PDF (mínimo de 5 páginas) detalhando suas características, vantagens, casos de uso no mercado e um exemplo prático de aplicação Web.

        ### [PDF Tailwind](https://github.com/Atividades-SENAI/Projeto_vanilla/blob/main/Tailwind.pdf) 