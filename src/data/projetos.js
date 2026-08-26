// Projetos principais. Os exercícios menores de disciplina foram deixados de
// fora de propósito: a timeline vale mais mostrando poucos trabalhos densos.
//
// A ordem deste array não importa: a timeline se ordena sozinha pelo campo
// `inicio`, do mais antigo para o mais recente.
//
// Campos por projeto:
//   id          identificador único (usado como key do React)
//   nome        nome exibido do projeto
//   inicio      'AAAA-MM' — início
//   fim         'AAAA-MM', ou null quando ainda está em andamento
//   descricao   { pt, en }
//   tecnologias array de strings; alimenta os filtros da página
//   github      URL do repositório, ou null quando o código não é público
//   demo        URL do site publicado, ou null
//   imagem      caminho em public/ (Sprint 03), ou null
export const projetos = [
  {
    id: 'dropfleet',
    nome: 'DropFleet',
    inicio: '2024-05',
    fim: '2024-05',
    descricao: {
      pt: 'Landing page de uma empresa de rastreamento de encomendas e logística para e-commerce, com seções de serviços e depoimentos e carrossel interativo.',
      en: 'Landing page for a package tracking and e-commerce logistics company, with service and testimonial sections and an interactive carousel.',
    },
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Swiper'],
    github: 'https://github.com/viniciusoramos/DropFleet',
    demo: null,
    imagem: null,
  },
  {
    id: 'hotel-fes',
    nome: 'Hotel Descanso Garantido',
    inicio: '2024-07',
    fim: '2024-07',
    descricao: {
      pt: 'Sistema de gerenciamento hoteleiro em C — cadastro de clientes, funcionários e estadias, com pesquisa e controle de reservas. Trabalho interdisciplinar entre Fundamentos de Engenharia de Software e AEDS I, acompanhado de documentação das funcionalidades, planejamento e implementação de casos de teste automatizados.',
      en: 'Hotel management system in C — registration of guests, staff and stays, with lookup and booking control. An interdisciplinary assignment across Software Engineering Fundamentals and Data Structures I, accompanied by feature documentation, test planning and automated test cases.',
    },
    tecnologias: ['C', 'Testes automatizados'],
    github: 'https://github.com/viniciusoramos/Hotel_Descanso_Fundamentos_Eng_Software',
    demo: null,
    imagem: null,
  },
  {
    // ⚠️ PREENCHER: este projeto veio do estágio, não do GitHub.
    //   inicio/fim  — mês e ano em que você desenvolveu o addon
    //   descricao   — rascunho escrito a partir do que você contou sobre a CPMH;
    //                 confirme o que ele de fato automatiza
    //   github      — null enquanto o código não for público
    id: 'addon-blender',
    nome: 'Addon de Relatórios para Blender',
    inicio: null,
    fim: null,
    descricao: {
      pt: 'Addon desenvolvido para o Blender que automatiza a geração de relatórios dos casos processados, reduzindo o trabalho manual de montagem dos documentos de apoio ao cirurgião.',
      en: 'Blender addon that automates report generation for processed cases, cutting the manual effort of assembling the support documents handed to the surgeon.',
    },
    tecnologias: ['Python', 'Blender'],
    github: null,
    demo: null,
    imagem: null,
  },
  {
    id: 'hackathons-pm',
    nome: 'Gestão de Hackathons',
    inicio: '2025-06',
    fim: '2025-06',
    descricao: {
      pt: 'Trabalho de Programação Modular em Java: modelagem orientada a objetos de um hackathon, com alunos, equipes, projetos, jurados e apresentações, acompanhada do diagrama de classes.',
      en: 'Modular Programming assignment in Java: object-oriented modelling of a hackathon, covering students, teams, projects, judges and presentations, along with the class diagram.',
    },
    tecnologias: ['Java', 'Maven', 'UML'],
    github: 'https://github.com/viniciusoramos/HackathonsPM',
    demo: null,
    imagem: null,
  },
  {
    id: 'algoritmo-banqueiro',
    nome: 'Algoritmo do Banqueiro',
    inicio: '2026-04',
    fim: '2026-04',
    descricao: {
      pt: 'Implementação multithreaded do Algoritmo do Banqueiro em Java, simulando a alocação segura de recursos entre processos concorrentes e a prevenção de deadlock, conforme o Silberschatz.',
      en: 'Multithreaded implementation of the Banker’s Algorithm in Java, simulating safe resource allocation across concurrent processes and deadlock avoidance, following Silberschatz.',
    },
    tecnologias: ['Java', 'Multithreading', 'Sistemas Operacionais'],
    github: 'https://github.com/viniciusoramos/Trabalho_Pr-tico_1_SO',
    demo: null,
    imagem: null,
  },
  {
    id: 'sgom',
    nome: 'SGOM — Sistema de Gestão de Oficina Mecânica',
    inicio: '2026-06',
    fim: '2026-06',
    descricao: {
      pt: 'Documentação de projeto de um sistema web para oficinas mecânicas, organizando o ciclo em torno da Ordem de Serviço: agendamento, checklist de entrada, orçamento, aprovação, baixa de estoque, pagamento e entrega. Inclui todos os diagramas UML em PlantUML.',
      en: 'Design documentation for a web system for auto repair shops, organising the cycle around the Service Order: scheduling, intake checklist, quotation, approval, stock deduction, payment and delivery. Includes the full UML diagram set in PlantUML.',
    },
    tecnologias: ['UML', 'PlantUML', 'Documentação'],
    github: 'https://github.com/viniciusoramos/Trabalho-Final-Proj-Software',
    demo: null,
    imagem: null,
  },
  {
    id: 'memoria-virtual',
    nome: 'Gerenciador de Memória Virtual',
    inicio: '2026-06',
    fim: '2026-06',
    descricao: {
      pt: 'Simulador de gerência de memória virtual em C: tradução de endereços lógicos para físicos com TLB por FIFO, tabela de páginas, paginação por demanda e substituição de páginas por LRU aproximado (Aging).',
      en: 'Virtual memory management simulator in C: logical-to-physical address translation with a FIFO TLB, page table, demand paging and approximate LRU (Aging) page replacement.',
    },
    tecnologias: ['C', 'Make', 'Sistemas Operacionais'],
    github: 'https://github.com/viniciusoramos/TabralhoPratico2_SO',
    demo: null,
    imagem: null,
  },
  {
    id: 'publicamed',
    nome: 'PublicaMED — Sistema de Gestão',
    inicio: '2026-06',
    fim: null,
    descricao: {
      pt: 'Painel interno de gestão com vendas, clientes, trabalhos, financeiro e publicações. Migração de um arquivo único para uma aplicação Vite + React sobre Supabase, com banco normalizado, políticas de acesso por linha e login multiusuário.',
      en: 'Internal management panel covering sales, clients, jobs, finance and publications. Migration from a single-file app to Vite + React on Supabase, with a normalised database, row-level security and multi-user login.',
    },
    tecnologias: ['React', 'Vite', 'Supabase', 'JavaScript', 'SQL'],
    github: 'https://github.com/viniciusoramos/PublicaMED_Sistema',
    demo: null,
    imagem: null,
  },
  {
    id: 'portfolio',
    nome: 'Portfólio Pessoal',
    inicio: '2026-08',
    fim: null,
    descricao: {
      pt: 'Este site. Portfólio em React com rotas separadas, conteúdo bilíngue PT/EN por Context, timeline de projetos ordenada e filtrável, e formulário de contato com validação acessível.',
      en: 'This website. A React portfolio with separate routes, bilingual PT/EN content via Context, a sorted and filterable project timeline, and a contact form with accessible validation.',
    },
    tecnologias: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/viniciusoramos/Portifolio_Pessoal',
    demo: null,
    imagem: null,
  },
]
