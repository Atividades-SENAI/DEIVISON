# Resumo - Aula 06: Gestão de Projetos Front-End

**Disciplina:** Frameworks Front-end

**Professor:** Prof. Me. Deivison S. Takatu (`deivison.takatu@edu.senai.br`)

**Instituição:** SENAI
***

## 1. Importância do Gerenciamento em Projetos Front-End

Conforme os projetos Front-End crescem em complexidade e escopo, a ausência de planejamento e processos estruturados gera diversos gargalos operacionais e técnicos.

* **Cenário Sem Gerenciamento (Problemas Frequentes):**
  * Tarefas esquecidas ou abandonadas.
  * Requisitos confusos e mal definidos.
  * Retrabalho constante de código e interface.
  * Conflitos frequentes no versionamento com Git.
  * Atrasos no cronograma de entregas.
  * Dificuldades graves de integração entre Front-end e Back-end.
  * Falta de visibilidade sobre o progresso real do projeto.

* **Cenário Com Processos de Gestão (Benefícios):**
  * Definir responsabilidades claras para cada membro da equipe.
  * Priorização estratégica do backlog.
  * Entregas incrementais e funcionais.
  * Acompanhamento transparente do progresso.
  * Redução substancial de custos e refatorações (retrabalho).

## 2. Gestão de Requisitos e Granularidade

A transformação de uma ideia em software funcional exige a decomposição estruturada de conceitos genéricos em unidades de trabalho operacionais e mensuráveis.

* **Níveis de Granularidade:**

  1. **Requisito (Visão Geral/Regra de Negócio):**
     * Define o que o sistema deve fazer em alto nível.
     * *Exemplo:* "O sistema deve permitir o gerenciamento de tarefas."

  2. **User Story / História de Usuário (Perspectiva do Usuário):**
     * Descreve a funcionalidade sob o ponto de vista do usuário final, focando no valor gerado.
     * *Exemplo:* "Como usuário, quero criar uma tarefa para organizar minhas pendências diárias."

  3. **Tarefas / Tasks (Ações Técnicas):**
     * Subatividades técnicas necessárias para implementar a história de usuário.
     * *Exemplos de Tarefas:*
       * Criar o formulário em HTML/JSX.
       * Desenvolver o componente reutilizável de entrada.
       * Implementar validações de campos obrigatórios.
       * Integrar com o endpoint da API via HTTP/Fetch.
       * Escrever testes unitários e de integração.

## 3. Gestão do Backlog, Priorização e Estimativas

* **Gestão do Backlog:**
  * O **Backlog do Produto** centraliza todas as funcionalidades, melhorias de interface, correções de bugs e dívidas técnicas do projeto.
  * Deve ser dinâmico e constantemente atualizado (refinamento).

* **Priorização e Estimativas:**
  * **Priorização:** Determina a ordem de desenvolvimento com base em objetivos de negócio, valor para o usuário, riscos e dependências técnicas.
  * **Estimativas:** Ajudam a equipe a quantificar a complexidade relativa e o esforço de cada funcionalidade antes de assumir o compromisso de entrega na Sprint.

## 4. Definition of Done (DoD) e Framework Scrum

* **Definition of Done (Critério de Conclusão):**
  * Conjunto de critérios claros e acordados previamente que uma funcionalidade precisa atender para ser considerada verdadeiramente "pronta" (concluída).
  * **Exemplos de Critérios do DoD:**
    * Código implementado e refatorado de acordo com as boas práticas.
    * Testes unitários/automatizados executados com sucesso.
    * Revisão de código (*Code Review*) realizada e aprovada.
    * Layout responsivo testado em múltiplos dispositivos (desktop/mobile).
    * Integração com a API validada.

* **Framework Scrum no Front-End:**
  * Framework ágil focado em desenvolvimento incremental e adaptativo através de ciclos iterativos chamados **Sprints**.
  * Permite inspeção e adaptação frequentes, facilitando o alinhamento de componentes de UI, integrações de APIs e feedback contínuo com partes interessadas.

## 5. Repositórios de Apoio e Referências

O professor disponibilizou os seguintes repositórios no GitHub para consulta sobre a aplicação dos conceitos de gestão:

* [Aula - Gestão Geral](https://github.com/deivisontakatu/aula-gestao)
* [Aula - Gestão de Produto](https://github.com/deivisontakatu/aula-gestao-produto)
* [Aula - Framework Scrum](https://github.com/deivisontakatu/aula-scrum)

---

## 6. Atividade Prática Proposta

### Instruções para o Projeto Integrador Interdisciplinar:

1. **Planejamento e Gestão:**
   * Estruturar o plano de gerenciamento do **Projeto Integrador Interdisciplinar** utilizando os conceitos ágeis apresentados em aula.

2. **Estruturação do Board / Fluxo de Trabalho:**
   * Cada grupo deve obrigatoriamente construir:
     * **Backlog** completo do projeto.
     * **Priorização** técnica e de produto.
     * Decomposição em **Tarefas**.
     * **Estimativas** de esforço.
     * Planejamento da **Sprint**.
     * **Quadro Kanban** (Ex.: Trello, GitHub Projects ou Jira).
     * Estratégia de **Git Branches** (Ex.: GitFlow ou Feature Branching).
     * **Definition of Done (DoD)** clara para as entregas.

3. **Documentação e Acompanhamento:**
   * Documentar todo o fluxo e regras de gestão em um arquivo `README.md` (Markdown).
   * Utilizar ativamente o quadro visual (Kanban) configurado durante o desenvolvimento da aplicação.