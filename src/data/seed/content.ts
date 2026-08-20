import type {
  Artifact,
  LabInfo,
  NewsItem,
  Partner,
  Person,
  Project,
  Publication,
  ResearchArea,
} from "../types";

export const lab: LabInfo = {
  name: "Cogito Lab",
  tagline: "Cogito, ergo sum",
  mission_pt:
    "Investigar e transferir conhecimento em Engenharia de Software, Inteligência Artificial, qualidade, testes, sistemas móveis/IoT e inovação, formando pessoas e produzindo artefatos científicos reutilizáveis.",
  mission_en:
    "Investigate and transfer knowledge in Software Engineering, Artificial Intelligence, quality, testing, mobile/IoT systems and innovation, educating researchers and producing reusable scientific artifacts.",
  about_pt:
    "O Cogito Lab é um grupo de pesquisa inspirado na máxima de René Descartes — “Cogito, ergo sum”. O laboratório reúne pesquisa empírica e aplicada em software, com ênfase em evidência, ferramentas e colaboração com a indústria e agências de fomento. Este texto é um placeholder e deve ser substituído pela missão oficial do grupo.",
  about_en:
    "Cogito Lab is a research group inspired by René Descartes’ maxim — “Cogito, ergo sum”. The lab combines empirical and applied software research, with emphasis on evidence, tooling, and collaboration with industry and funding agencies. This copy is a placeholder and should be replaced with the group’s official mission.",
  email: "contato@cogitolab.placeholder",
  location_pt: "Minas Gerais, Brasil (endereço placeholder)",
  location_en: "Minas Gerais, Brazil (placeholder address)",
  github_org: "https://github.com/cogito-lab",
  institutions: [
    {
      id: "uni-placeholder",
      name_pt: "Universidade Federal Associada (placeholder)",
      name_en: "Associated Federal University (placeholder)",
    },
    {
      id: "ppg-placeholder",
      name_pt: "Programa de Pós-Graduação em Computação (placeholder)",
      name_en: "Graduate Program in Computing (placeholder)",
    },
  ],
  social: [
    {
      kind: "github",
      url: "https://github.com/cogito-lab",
      label: "GitHub Organization",
    },
    {
      kind: "linkedin",
      url: "https://www.linkedin.com/company/cogito-lab-placeholder",
      label: "LinkedIn",
    },
    {
      kind: "x",
      url: "https://x.com/cogitolab_placeholder",
      label: "X",
    },
  ],
};

export const researchAreas: ResearchArea[] = [
  {
    id: "area-ai-se",
    slug: "ia-engenharia-software",
    title_pt: "IA para Engenharia de Software",
    title_en: "AI for Software Engineering",
    summary_pt:
      "Modelos, agentes e evidência empírica para apoiar atividades de engenharia de software.",
    summary_en:
      "Models, agents and empirical evidence to support software engineering activities.",
    description_pt:
      "Esta área investiga o uso de inteligência artificial — incluindo modelos de linguagem, aprendizado de máquina e agentes — em tarefas como compreensão de código, geração de testes, revisão e manutenção. O foco é a avaliação rigorosa: o que funciona, em quais contextos e com quais riscos. Conteúdo placeholder para o MVP.",
    description_en:
      "This area investigates artificial intelligence — including language models, machine learning and agents — in tasks such as code comprehension, test generation, review and maintenance. The focus is rigorous evaluation: what works, in which contexts and with which risks. Placeholder copy for the MVP.",
  },
  {
    id: "area-quality",
    slug: "qualidade-divida-tecnica",
    title_pt: "Qualidade de Software, Dívida Técnica & Refatoração",
    title_en: "Software Quality, Technical Debt & Refactoring",
    summary_pt:
      "Medição, priorização e redução de dívida técnica com foco em manutenção sustentável.",
    summary_en:
      "Measurement, prioritization and reduction of technical debt with a focus on sustainable maintenance.",
    description_pt:
      "Estudamos qualidade de código e arquitetura, indicadores de dívida técnica e estratégias de refatoração. Combinamos mineração de repositórios, estudos com profissionais e protótipos de ferramentas de apoio à decisão. Conteúdo placeholder para o MVP.",
    description_en:
      "We study code and architecture quality, technical-debt indicators and refactoring strategies. The work combines repository mining, studies with practitioners and decision-support prototypes. Placeholder copy for the MVP.",
  },
  {
    id: "area-testing",
    slug: "teste-confiabilidade",
    title_pt: "Teste de Software & Confiabilidade",
    title_en: "Software Testing & Reliability",
    summary_pt:
      "Técnicas, oráculos e automação para aumentar a confiança em sistemas de software.",
    summary_en:
      "Techniques, oracles and automation to increase confidence in software systems.",
    description_pt:
      "Pesquisamos geração e priorização de testes, flaky tests, testes em sistemas configuráveis e critérios de adequação. Também olhamos para confiabilidade em produção e para a relação entre testes e qualidade percebida. Conteúdo placeholder para o MVP.",
    description_en:
      "We research test generation and prioritization, flaky tests, testing of configurable systems and adequacy criteria. We also look at reliability in production and the relationship between testing and perceived quality. Placeholder copy for the MVP.",
  },
  {
    id: "area-mobile-iot",
    slug: "sistemas-configuraveis-mobile-iot",
    title_pt: "Sistemas Configuráveis, Mobile & IoT",
    title_en: "Configurable Systems, Mobile & IoT",
    summary_pt:
      "Variabilidade, plataformas móveis e dispositivos conectados sob a ótica da engenharia de software.",
    summary_en:
      "Variability, mobile platforms and connected devices from a software-engineering perspective.",
    description_pt:
      "Esta linha trata de linhas de produto, feature flags, apps móveis e software para IoT — incluindo desafios de fragmentação, energia, atualização e teste combinatório. Conteúdo placeholder para o MVP.",
    description_en:
      "This line addresses product lines, feature flags, mobile apps and IoT software — including fragmentation, energy, update and combinatorial testing challenges. Placeholder copy for the MVP.",
  },
  {
    id: "area-ese",
    slug: "desenvolvimento-colaborativo",
    title_pt: "Desenvolvimento Colaborativo & Engenharia de Software Empírica",
    title_en: "Collaborative Development & Empirical Software Engineering",
    summary_pt:
      "Como times, comunidades e evidência empírica moldam o desenvolvimento de software.",
    summary_en:
      "How teams, communities and empirical evidence shape software development.",
    description_pt:
      "Investigamos práticas colaborativas (code review, open source, trabalho híbrido) com métodos empíricos: experimentos, surveys, estudos de campo e mineração de dados. Conteúdo placeholder para o MVP.",
    description_en:
      "We investigate collaborative practices (code review, open source, hybrid work) with empirical methods: experiments, surveys, field studies and data mining. Placeholder copy for the MVP.",
  },
  {
    id: "area-innovation",
    slug: "inovacao-empreendedorismo",
    title_pt: "Inovação, Empreendedorismo & Transferência de Tecnologia",
    title_en: "Innovation, Entrepreneurship & Technology Transfer",
    summary_pt:
      "Do laboratório para a sociedade: spin-offs, parcerias e artefatos transferíveis.",
    summary_en:
      "From the lab to society: spin-offs, partnerships and transferable artifacts.",
    description_pt:
      "Apoiamos a conversão de resultados de pesquisa em ferramentas, datasets, processos e iniciativas empreendedoras, em diálogo com agências de fomento e a indústria. Conteúdo placeholder para o MVP.",
    description_en:
      "We support turning research results into tools, datasets, processes and entrepreneurial initiatives, in dialogue with funding agencies and industry. Placeholder copy for the MVP.",
  },
];

export const people: Person[] = [
  {
    id: "p-ana",
    slug: "ana-ribeiro",
    name: "Ana Ribeiro",
    role: "researcher",
    title_pt: "Professora e coordenadora (placeholder)",
    title_en: "Professor and coordinator (placeholder)",
    bio_pt:
      "Coordena o Cogito Lab e pesquisa qualidade de software, dívida técnica e métodos empíricos. Biografia placeholder.",
    bio_en:
      "Coordinates Cogito Lab and researches software quality, technical debt and empirical methods. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "lattes", url: "https://lattes.cnpq.br/0000000000000000" },
      { kind: "orcid", url: "https://orcid.org/0000-0002-0000-0001" },
      { kind: "github", url: "https://github.com/ana-ribeiro-placeholder" },
    ],
  },
  {
    id: "p-carlos",
    slug: "carlos-mendes",
    name: "Carlos Mendes",
    role: "researcher",
    title_pt: "Professor (placeholder)",
    title_en: "Professor (placeholder)",
    bio_pt:
      "Pesquisa teste de software, confiabilidade e sistemas configuráveis. Biografia placeholder.",
    bio_en:
      "Researches software testing, reliability and configurable systems. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "lattes", url: "https://lattes.cnpq.br/0000000000000001" },
      { kind: "orcid", url: "https://orcid.org/0000-0002-0000-0002" },
      { kind: "scholar", url: "https://scholar.google.com/citations?user=placeholder" },
    ],
  },
  {
    id: "p-sofia",
    slug: "sofia-almeida",
    name: "Sofia Almeida",
    role: "collaborator",
    title_pt: "Pesquisadora colaboradora (placeholder)",
    title_en: "Collaborating researcher (placeholder)",
    bio_pt:
      "Colabora em projetos de IA para engenharia de software e transferência de tecnologia. Biografia placeholder.",
    bio_en:
      "Collaborates on AI for software engineering and technology-transfer projects. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "orcid", url: "https://orcid.org/0000-0002-0000-0003" },
      { kind: "website", url: "https://sofia-almeida.placeholder" },
    ],
  },
  {
    id: "p-joao",
    slug: "joao-martins",
    name: "João Martins",
    role: "phd",
    title_pt: "Doutorando (placeholder)",
    title_en: "PhD student (placeholder)",
    bio_pt:
      "Estuda agentes de IA aplicados à revisão de código e à geração de testes. Biografia placeholder.",
    bio_en:
      "Studies AI agents applied to code review and test generation. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "lattes", url: "https://lattes.cnpq.br/0000000000000002" },
      { kind: "github", url: "https://github.com/joao-martins-placeholder" },
    ],
  },
  {
    id: "p-marina",
    slug: "marina-costa",
    name: "Marina Costa",
    role: "msc",
    title_pt: "Mestranda (placeholder)",
    title_en: "MSc student (placeholder)",
    bio_pt:
      "Pesquisa dívida técnica em sistemas móveis e IoT. Biografia placeholder.",
    bio_en:
      "Researches technical debt in mobile and IoT systems. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "orcid", url: "https://orcid.org/0000-0002-0000-0004" },
      { kind: "github", url: "https://github.com/marina-costa-placeholder" },
    ],
  },
  {
    id: "p-pedro",
    slug: "pedro-alves",
    name: "Pedro Alves",
    role: "ic",
    title_pt: "Estudante de iniciação científica (placeholder)",
    title_en: "Undergraduate research student (placeholder)",
    bio_pt:
      "Desenvolve datasets e protótipos de ferramentas de análise estática. Biografia placeholder.",
    bio_en:
      "Builds datasets and prototypes of static-analysis tools. Placeholder biography.",
    photo_url: null,
    links: [{ kind: "github", url: "https://github.com/pedro-alves-placeholder" }],
  },
  {
    id: "p-lucia",
    slug: "lucia-ferreira",
    name: "Lúcia Ferreira",
    role: "alumni",
    title_pt: "Ex-aluna (MSc) (placeholder)",
    title_en: "Alumna (MSc) (placeholder)",
    bio_pt:
      "Defendeu dissertação sobre flaky tests e hoje atua na indústria. Biografia placeholder.",
    bio_en:
      "Defended a thesis on flaky tests and now works in industry. Placeholder biography.",
    photo_url: null,
    links: [
      { kind: "linkedin", url: "https://www.linkedin.com/in/lucia-ferreira-placeholder" },
      { kind: "orcid", url: "https://orcid.org/0000-0002-0000-0005" },
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Evaluating Language Models for Technical Debt Prioritization: A Controlled Study (placeholder)",
    year: 2025,
    venue_pt: "Anais de conferência placeholder",
    venue_en: "Placeholder conference proceedings",
    doi: "10.1000/placeholder.cogito.2025.001",
    url: "https://doi.org/10.1000/placeholder.cogito.2025.001",
    author_ids: ["p-ana", "p-joao", "p-sofia"],
  },
  {
    id: "pub-2",
    title: "Combinatorial Testing of Feature Flags in Mobile Applications (placeholder)",
    year: 2024,
    venue_pt: "Periódico placeholder",
    venue_en: "Placeholder journal",
    doi: "10.1000/placeholder.cogito.2024.014",
    url: "https://doi.org/10.1000/placeholder.cogito.2024.014",
    author_ids: ["p-carlos", "p-marina"],
  },
  {
    id: "pub-3",
    title: "An Open Dataset of Refactoring Decisions in Brazilian Industry (placeholder)",
    year: 2024,
    venue_pt: "Workshop placeholder",
    venue_en: "Placeholder workshop",
    doi: null,
    url: "https://github.com/cogito-lab/refactoring-decisions-placeholder",
    author_ids: ["p-ana", "p-pedro", "p-lucia"],
  },
  {
    id: "pub-4",
    title: "On the Reliability of AI-Generated Unit Tests (placeholder)",
    year: 2025,
    venue_pt: "Simpósio placeholder",
    venue_en: "Placeholder symposium",
    doi: "10.1000/placeholder.cogito.2025.009",
    url: "https://doi.org/10.1000/placeholder.cogito.2025.009",
    author_ids: ["p-carlos", "p-joao"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-cnpq-446729",
    slug: "cnpq-446729-2024-8",
    code: "CNPq 446729/2024-8",
    title_pt: "IA aplicada à qualidade e manutenção de software (placeholder)",
    title_en: "AI applied to software quality and maintenance (placeholder)",
    description_pt:
      "Projeto financiado pelo CNPq que investiga o uso de modelos de IA para apoiar priorização de dívida técnica, revisão e manutenção. Descrição placeholder — substitua pelos objetivos oficiais do edital.",
    description_en:
      "CNPq-funded project investigating AI models to support technical-debt prioritization, review and maintenance. Placeholder description — replace with the official grant objectives.",
    coordinator_id: "p-ana",
    start_date: "2024-08-01",
    end_date: "2027-07-31",
    publication_ids: ["pub-1", "pub-3"],
  },
  {
    id: "proj-cnpq-406089",
    slug: "cnpq-406089-2025-6",
    code: "CNPq 406089/2025-6",
    title_pt: "Teste e confiabilidade em sistemas configuráveis (placeholder)",
    title_en: "Testing and reliability in configurable systems (placeholder)",
    description_pt:
      "Projeto CNPq focado em técnicas de teste para sistemas com alta variabilidade, incluindo mobile e IoT. Descrição placeholder.",
    description_en:
      "CNPq project focused on testing techniques for highly variable systems, including mobile and IoT. Placeholder description.",
    coordinator_id: "p-carlos",
    start_date: "2025-03-01",
    end_date: "2028-02-29",
    publication_ids: ["pub-2", "pub-4"],
  },
  {
    id: "proj-fapemig",
    slug: "fapemig-apq-placeholder",
    code: "FAPEMIG APQ (placeholder)",
    title_pt: "Transferência de ferramentas de engenharia de software (placeholder)",
    title_en: "Transfer of software-engineering tools (placeholder)",
    description_pt:
      "Projeto FAPEMIG de apoio à transferência de datasets, protótipos e parcerias com a indústria mineira. Descrição placeholder.",
    description_en:
      "FAPEMIG project supporting the transfer of datasets, prototypes and partnerships with local industry. Placeholder description.",
    coordinator_id: "p-ana",
    start_date: "2025-01-01",
    end_date: null,
    publication_ids: ["pub-3"],
  },
];

export const artifacts: Artifact[] = [
  {
    id: "art-td-tool",
    kind: "tool",
    name: "CogitoTD (placeholder)",
    description_pt: "Protótipo para priorização de dívida técnica a partir de repositórios Git.",
    description_en: "Prototype for prioritizing technical debt from Git repositories.",
    url: "https://github.com/cogito-lab/cogito-td-placeholder",
    year: 2025,
  },
  {
    id: "art-dataset",
    kind: "dataset",
    name: "Refactoring Decisions BR (placeholder)",
    description_pt: "Dataset aberto de decisões de refatoração em empresas brasileiras.",
    description_en: "Open dataset of refactoring decisions in Brazilian companies.",
    url: "https://github.com/cogito-lab/refactoring-decisions-placeholder",
    year: 2024,
  },
  {
    id: "art-flaky",
    kind: "software",
    name: "FlakeWatch (placeholder)",
    description_pt: "Software para triagem de testes intermitentes em pipelines CI.",
    description_en: "Software for triaging intermittent tests in CI pipelines.",
    url: "https://github.com/cogito-lab/flakewatch-placeholder",
    year: 2024,
  },
  {
    id: "art-repo",
    kind: "repository",
    name: "cogito-lab/examples (placeholder)",
    description_pt: "Repositório de exemplos e materiais reprodutíveis do grupo.",
    description_en: "Repository of examples and reproducible materials from the group.",
    url: "https://github.com/cogito-lab/examples-placeholder",
    year: 2025,
  },
];

export const news: NewsItem[] = [
  {
    id: "news-1",
    slug: "paper-aceito-2025",
    kind: "paper",
    date: "2025-11-12",
    title_pt: "Paper aceito sobre modelos de linguagem e dívida técnica (placeholder)",
    title_en: "Paper accepted on language models and technical debt (placeholder)",
    summary_pt:
      "O trabalho avalia modelos de linguagem na priorização de dívida técnica e será apresentado em conferência da área.",
    summary_en:
      "The paper evaluates language models for technical-debt prioritization and will be presented at a venue in the field.",
    body_pt:
      "Membros do Cogito Lab tiveram um artigo aceito (dados placeholder) sobre o uso de modelos de linguagem para apoiar a priorização de dívida técnica. Substitua este texto pelo anúncio oficial, com referência completa e link do DOI.",
    body_en:
      "Cogito Lab members had a paper accepted (placeholder data) on using language models to support technical-debt prioritization. Replace this text with the official announcement, including the full reference and DOI link.",
  },
  {
    id: "news-2",
    slug: "participacao-conferencia",
    kind: "conference",
    date: "2025-09-03",
    title_pt: "Participação em conferência internacional (placeholder)",
    title_en: "Participation in an international conference (placeholder)",
    summary_pt:
      "O grupo apresentou resultados de teste em sistemas configuráveis e participou de workshop de doutorado.",
    summary_en:
      "The group presented results on testing configurable systems and joined a doctoral workshop.",
    body_pt:
      "Pesquisadores e estudantes do laboratório participaram de uma conferência internacional (evento placeholder), com apresentação oral e sessão de pôsteres. Atualize com o nome real do evento e as publicações associadas.",
    body_en:
      "Lab researchers and students attended an international conference (placeholder event), with an oral presentation and a poster session. Update with the real event name and associated publications.",
  },
  {
    id: "news-3",
    slug: "defesa-mestrado",
    kind: "defense",
    date: "2025-06-20",
    title_pt: "Defesa de mestrado sobre flaky tests (placeholder)",
    title_en: "Master’s defense on flaky tests (placeholder)",
    summary_pt:
      "Lúcia Ferreira defendeu dissertação sobre testes intermitentes e estratégias de triagem em CI.",
    summary_en:
      "Lúcia Ferreira defended a thesis on intermittent tests and triage strategies in CI.",
    body_pt:
      "A defesa (placeholder) ocorreu perante banca composta por membros internos e externos. Substitua pela ata, título oficial da dissertação e registro institucional.",
    body_en:
      "The defense (placeholder) was held before a committee of internal and external members. Replace with the official thesis title and institutional record.",
  },
];

export const partners: Partner[] = [
  { id: "cnpq", kind: "funding", name: "CNPq", url: "https://www.gov.br/cnpq" },
  { id: "fapemig", kind: "funding", name: "FAPEMIG", url: "https://fapemig.br" },
  {
    id: "uni",
    kind: "university",
    name: "Universidade Federal Associada (placeholder)",
    url: null,
  },
  {
    id: "industry",
    kind: "industry",
    name: "Parceiro da indústria (placeholder)",
    url: null,
  },
];
