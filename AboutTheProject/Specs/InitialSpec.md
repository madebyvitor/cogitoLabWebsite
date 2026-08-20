# AGENTS.MD - Cogito Lab Website Specification

---

## 1. Visão Geral do Produto (Contexto)

O **Cogito Lab** é um grupo de pesquisa focado em Engenharia de Software, Inteligência Artificial, Qualidade de Software, Testes, Sistemas Mobile/IoT e Inovação.
O objetivo deste documento é guiar o design e a implementação do MVP do site oficial do grupo de pesquisa, garantindo uma arquitetura robusta, manutenível e escalável, que funcione como um sistema de repositório científico e cartão de visita.

## 2. Requisitos Técnicos e Arquitetura

A solução será desenvolvida seguindo os seguintes requisitos fundamentais:

* **Repositório e Hospedagem:** Manutenção via Git, hospedagem utilizando GitHub Pages.


* **Internacionalização (i18n):** Suporte mandatório para Português (PT-BR) e Inglês (EN), com alternância de idioma intuitiva e manutenção do contexto do usuário.


* **Responsividade e Acessibilidade:** A interface será acessível tanto em desktop quanto em dispositivos móveis, com separação clara entre dados e componentes de UI.


* **Registros e Engenharia:** Deverá haver um arquivo `DEVELOPMENT_LOG.md` mantendo o histórico de interações com IA, decisões arquiteturais e iterações de desenvolvimento.

### 2.1. Stack utilizada

A solução usará as seguintes tecnologias:

* **Front-end:** Next.js + React + TypeScript, Tailwind CSS + shadcn/ui, next-intl (pt, en).

* **Back-end/dados:** Supabase.

* **Testes:** Vitest, React Testing Library, Playwright.

* **Qualidade:** ESLint, Prettier, TypeScript strict.

* **CI/CD:** GitHub Actions.

* **Deploy:** Github pages.      



## 3. Escopo de Conteúdo e Funcionalidades (MVP)

O site deve cobrir estruturalmente as seguintes entidades:

* **Identidade do Laboratório:** Nome, conexão com a expressão de René Descartes ("Cogito, ergo sum"), missão, instituições associadas e logomarca.


* **6 Áreas de Pesquisa Principais:**
1. IA para Engenharia de Software.


2. Qualidade de Software, Dívida Técnica & Refatoração.


3. Teste de Software & Confiabilidade.


4. Sistemas Configuráveis, Mobile & IoT.


5. Desenvolvimento Colaborativo & Engenharia de Software Empírica.


6. Inovação, Empreendedorismo & Transferência de Tecnologia.




* **Pessoas:** Suporte a pesquisadores, colaboradores, alunos (PhD, MSc, IC) e ex-alunos (alumni) com biografia, links externos (Lattes, ORCID, GitHub, etc.) e foto.


* **Projetos de Pesquisa:** Exibição de projetos financiados (ex: CNPq 446729/2024-8, CNPq 406089/2025-6, projetos FAPEMIG), contendo coordenador, descrição, vigência e publicações geradas.


* **Publicações e Artefatos:** Registro de papers (título, autores, ano, DOI), softwares, ferramentas, datasets e repositórios gerados pelas pesquisas.


* **Notícias e Atividades:** Espaço para divulgar papers aceitos, participação em conferências, prêmios e defesas.


* **Recrutamento e Parcerias:** Área para novos alunos ingressarem (Join Cogito Lab) e área para logos de parceiros da indústria, agências de fomento e instituições.


* **Contato:** E-mail, redes sociais, localização e link do GitHub Organization.



## 4. Estratégia de Testes

O projeto utilizará a stack de testes definida para garantir qualidade e confiabilidade de longo prazo:

* **Unitários e Integração:** `Vitest` + `React Testing Library` para componentes críticos, lógica de roteamento de idioma e formatação de dados.
* **End-to-End (E2E):** `Playwright` para validar os fluxos críticos (troca de idiomas, navegação principal e responsividade).
* **Análise Estática:** Aplicação rigorosa de `ESLint`, `Prettier` e modo estrito do `TypeScript`.

---

## 5. Lacunas 

* **1. Integração de Dados (Next.js SSG vs Supabase Client):** O GitHub Pages hospeda apenas arquivos estáticos (`next build` com `output: 'export'`).
* **Resposta:** Realizar as requisições ao Supabase apenas no momento do build (Static Site Generation - SSG). *Prós: SEO perfeito, carregamento extremamente rápido. Contras: É necessário configurar um GitHub Action (webhook) para refazer o build e deploy sempre que os dados no Supabase forem alterados.*



* **2. Inserção e Gestão de Conteúdo (Back-office):** Quem e como os dados (notícias, projetos, pessoas) serão inseridos?
* **Resposta:** Criar uma área administrativa básica protegida por login diretamente no front-end do site. *Prós: UX excelente para qualquer membro atualizar o site. Contras: Adiciona escopo significativo de desenvolvimento e autenticação no MVP.*


* **3. Solução Técnica para o `next-intl` em Hospedagem Estática:** O middleware padrão do `next-intl` necessita de um servidor Node.js que o GitHub Pages não possui.
* **Resposta:** Utilizar roteamento estático do `next-intl` (ex: `/pt/sobre`, `/en/about`) com parâmetros de build gerados no Next.js. *Prós: Mantém o deploy estritamente no GitHub Pages como solicitado. Contras: Requer configuração de rotas mais complexa (SSG).*



* **4. Arquitetura de Navegação:**
* **Resposta:** Site Institucional Multi-página (Home, Áreas de Pesquisa, Pessoas, Publicações em rotas separadas). *Prós: Alta escalabilidade de conteúdo e organização limpa para o futuro. Contras: Mais páginas e layouts para desenhar inicialmente.*
