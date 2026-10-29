# Resumo da Aula: Projeto React 02

**Disciplina:** Frameworks Front-end  
**Professor:** Me. Deivison S. Takatu  
**Instituição:** SENAI  

---

## 📌 Sumário dos Tópicos
1. **State e `useState`**
2. **Formulários**
3. **`useEffect`**
4. **Consumo de APIs**
5. **React Router**
6. **Atividade Prática**

---

## 1. State e `useState`

* **Conceito de State:** Informação armazenada pelo componente (ex.: contadores, mensagens) que permite atualizar a interface conforme as ações do usuário. Quando o estado muda, o React realiza a renderização novamente para atualizar a tela.
* **Por que variáveis comuns não bastam?**
  * Não disparam a re-renderização do componente.
  * Variáveis locais são recriadas a cada nova execução do componente.
  * O estado preserva valores entre renderizações.
* **Hooks no React:**
  * Funções especiais com prefixo `use` (ex.: `useState`, `useEffect`) que trazem recursos do React para componentes funcionais.
  * Devem ser chamados no início do componente.
* **Funcionamento do `useState`:**
  * Retorna um par contendo o **valor atual** e a **função para atualizá-lo**.
  * Recebe um valor inicial como argumento.
  * **Exemplo de uso:**
    ```jsx
    import { useState } from "react";

    function Contador() {
      const [contador, setContador] = useState(0);

      return (
        <section>
          <p>Valor: {contador}</p>
          <button onClick={() => setContador(contador + 1)}>
            Incrementar
          </button>
        </section>
      );
    }
    ```

---

## 2. Formulários em React

* **Campos Controlados:**
  * O valor do campo (`value`) é associado diretamente ao estado do React.
  * O evento `onChange` captura o texto digitado (`e.target.value`) e atualiza o estado.
  * **Fluxo:** Digitação → Disparo de evento → Atualização do estado.
* **Envio do Formulário:**
  * O evento `onSubmit` lida com o envio.
  * `e.preventDefault()` é fundamental para evitar que o navegador recarregue a página, permitindo ao React gerenciar a ação.
* **Exemplo de Estrutura:**
  ```jsx
  function Formulario() {
    const [nome, setNome] = useState("");

    function enviar(e) {
      e.preventDefault();
      alert(`Enviado: ${nome}`);
    }

    return (
      <form onSubmit={enviar}>
        <input 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
  ```

---

## 3. Sincronização com `useEffect`

* **Conceito de Efeitos:** Ações executadas fora da renderização da interface para interagir com recursos externos (ex.: alterar o título da página, timers, requisições de API).
* **Funcionamento do `useEffect`:**
  * Recebe uma **função de efeito** e uma **lista de dependências**.
  * Se a lista de dependências estiver vazia (`[]`), o efeito roda apenas na montagem do componente.
  * Se houver variáveis no array de dependências (ex.: `[titulo]`), o efeito re-executa sempre que essas variáveis mudarem.
* **Função de Limpeza (Cleanup):**
  * Retornada dentro do próprio `useEffect`.
  * Usada para remover *listeners*, cancelar temporizadores ou interromper conexões ao desmontar o componente ou antes de re-executar o efeito.
  * **Exemplo de Limpeza:**
    ```jsx
    useEffect(() => {
      window.addEventListener("resize", atualizar);
      return () => {
        window.removeEventListener("resize", atualizar);
      };
    }, []);
    ```

---

## 4. Consumo de APIs

* **O que é uma API:** Interface de programação que permite a comunicação e troca de dados entre a aplicação e serviços externos.
* **Requisições com `fetch`:**
  * Realiza requisições HTTP assíncronas.
  * Utiliza-se `response.json()` para extrair o conteúdo e `response.ok` para tratar erros de status HTTP.
* **Padrão de Busca em Componentes:**
  * Usa-se o `useEffect` com array de dependências vazio `[]` para buscar dados assim que o componente é exibido.
  * Os dados retornados são salvos via `useState`.
* **Enviando Dados (`POST`):**
  * Requer configuração do método, cabeçalhos (`Content-Type: application/json`) e corpo (`JSON.stringify(dados)`).
* **Cuidados Importantes:**
  * Tratar exceções com bloco `try/catch`.
  * Gerenciar estados de carregamento e erro.
  * Não expor chaves secretas/privadas no lado do cliente.
  * Respeitar CORS e limites de uso.

---

## 5. Roteamento com React Router

* **Objetivo:** Mapear caminhos de URL para diferentes componentes/telas sem a necessidade de recarregar a página inteira (Single Page Application - SPA).
* **Componentes Principais (`react-router-dom`):**
  * `BrowserRouter`: Envolve toda a aplicação para habilitar o roteamento.
  * `Routes`: Agrupa a lista de rotas declaradas.
  * `Route`: Define a associação entre o caminho (`path`) e o componente (`element`).
  * `Link`: Substituto da tag `<a>` para navegar de forma otimizada entre páginas internas sem dar *reload*.
* **Parâmetros de Rota:**
  * Utilizados para páginas dinâmicas (ex.: `/conceitos/:id`).
  * Acessados dentro do componente através do hook `useParams()`.

---

## 📝 6. Atividade Prática Proposta

Desenvolver uma aplicação React completa que integre obrigatoriamente:
* State e `useState`
* Formulários com validação/controle de dados
* Hook `useEffect`
* Consumo de APIs externas
* Roteamento de páginas com React Router

**Entrega:** Repositório público no GitHub contendo um arquivo `README.md` explicativo das funcionalidades e dos conceitos implementados.

---

## 🔗 Links e Recursos Adicionais
* **Conceitos:** [github.com/deivisontakatu/aula-react](https://github.com/deivisontakatu/aula-react)
* **Exemplo em Código:** [github.com/deivisontakatu/projeto-react](https://github.com/deivisontakatu/projeto-react)
* **Aplicação em Produção:** [projeto-react-five-swart.vercel.app](https://projeto-react-five-swart.vercel.app/)