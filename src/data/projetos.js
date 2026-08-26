// Projetos importados do GitHub (@viniciusoramos) em agosto de 2026.
// As descrições foram escritas a partir do código e do README de cada
// repositório, não do nome — revise se alguma não refletir o que você fez.
//
// A ordem deste array não importa: a timeline se ordena sozinha pelo campo
// `inicio`, do mais antigo para o mais recente.
//
// Campos por projeto:
//   id          identificador único (usado como key do React)
//   nome        nome exibido do projeto
//   inicio      'AAAA-MM' — criação do repositório
//   fim         'AAAA-MM', ou null quando ainda está em andamento
//   descricao   { pt, en }
//   tecnologias array de strings; alimenta os filtros da página
//   github      URL do repositório
//   demo        URL do site publicado, ou null
//   imagem      caminho em public/ (Sprint 03), ou null
export const projetos = [
  {
    id: 'prj-variaveis',
    nome: 'Variáveis e Constantes',
    inicio: '2024-02',
    fim: '2024-03',
    descricao: {
      pt: 'Primeiro exercício de Algoritmos e Estruturas de Dados I: uso de variáveis, constantes com const e macros de pré-processador em C.',
      en: 'First exercise from Algorithms and Data Structures I: use of variables, const constants and preprocessor macros in C.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/PRJ_VARIAVEIS',
    demo: null,
    imagem: null,
  },
  {
    id: 'prj-recursivo',
    nome: 'Recursão',
    inicio: '2024-03',
    fim: '2024-03',
    descricao: {
      pt: 'Implementação do fatorial por recursão, exercitando caso base e chamada recursiva.',
      en: 'Recursive factorial implementation, exercising base case and recursive call.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/PRJ_RECURSIVO',
    demo: null,
    imagem: null,
  },
  {
    id: 'prj-repeticao',
    nome: 'Estruturas de Repetição',
    inicio: '2024-03',
    fim: '2024-03',
    descricao: {
      pt: 'Comparação das três estruturas de repetição da linguagem C — while, for e do-while — resolvendo o mesmo problema de soma com cada uma.',
      en: 'Comparison of the three loop constructs in C — while, for and do-while — solving the same summation problem with each.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/PRJ_REPETICAO',
    demo: null,
    imagem: null,
  },
  {
    id: 'tarefa-1',
    nome: 'Tarefa 1 — Somas e Médias',
    inicio: '2024-03',
    fim: '2024-03',
    descricao: {
      pt: 'Lista de exercícios com entrada de dados, soma de números inteiros por leitura direta e por laço, e cálculo de média aritmética de notas.',
      en: 'Exercise set covering data input, integer summation both by direct reading and by loop, and arithmetic mean of grades.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/TAREFA_1',
    demo: null,
    imagem: null,
  },
  {
    id: 'tarefa-2',
    nome: 'Tarefa 2 — Laços e Divisibilidade',
    inicio: '2024-03',
    fim: '2024-03',
    descricao: {
      pt: 'Exercícios de laços e operador de módulo: números pares múltiplos de 3 até 1000, e soma e média de uma sequência de inteiros lidos.',
      en: 'Loop and modulo exercises: even multiples of 3 up to 1000, plus sum and average of a sequence of integers read from input.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/TAREFA_2',
    demo: null,
    imagem: null,
  },
  {
    id: 'tarefa-3',
    nome: 'Tarefa 3 — Estruturas Condicionais',
    inicio: '2024-04',
    fim: '2024-04',
    descricao: {
      pt: 'Exercícios de decisão encadeada em C, validando combinações de critérios de entrada para classificar o resultado.',
      en: 'Chained conditional exercises in C, validating combinations of input criteria to classify the outcome.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/TAREFA_3',
    demo: null,
    imagem: null,
  },
  {
    id: 'prova-1-aeds',
    nome: 'Simulador do Problema de Monty Hall',
    inicio: '2024-04',
    fim: '2024-04',
    descricao: {
      pt: 'Prova de AEDS I: simulação interativa do problema de Monty Hall, com sorteio da porta premiada, abertura de uma porta vazia e opção de troca pelo jogador.',
      en: 'Data Structures I exam: interactive simulation of the Monty Hall problem, drawing the winning door, opening an empty one and letting the player switch.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/PROVA_1_AEDS_1',
    demo: null,
    imagem: null,
  },
  {
    id: 'dropfleet',
    nome: 'DropFleet',
    inicio: '2024-05',
    fim: '2024-05',
    descricao: {
      pt: 'Landing page de uma empresa fictícia de rastreamento de encomendas e logística para e-commerce, com seções de serviços e depoimentos e carrossel interativo.',
      en: 'Landing page for a fictional package tracking and e-commerce logistics company, with service and testimonial sections and an interactive carousel.',
    },
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Swiper'],
    github: 'https://github.com/viniciusoramos/DropFleet',
    demo: null,
    imagem: null,
  },
  {
    id: 'maratona-aeds',
    nome: 'Maratona de Programação — AEDS I',
    inicio: '2024-06',
    fim: '2024-06',
    descricao: {
      pt: 'Soluções de dois problemas de maratona: verificar se uma sequência de cartas está ordenada crescente ou decrescentemente, e calcular o menor ângulo de giro entre dois pontos cardeais.',
      en: 'Solutions to two contest problems: checking whether a sequence of cards is sorted ascending or descending, and computing the smallest turning angle between two cardinal directions.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/Maratona_Aeds1',
    demo: null,
    imagem: null,
  },
  {
    id: 'hotel-aeds',
    nome: 'Hotel Descanso Garantido',
    inicio: '2024-07',
    fim: '2024-07',
    descricao: {
      pt: 'Sistema de gerenciamento hoteleiro em C: cadastro de clientes, funcionários e estadias, com pesquisa de informações e controle das reservas.',
      en: 'Hotel management system in C: registration of guests, staff and stays, with information lookup and booking control.',
    },
    tecnologias: ['C'],
    github: 'https://github.com/viniciusoramos/Hotel_Descanso_Aeds1',
    demo: null,
    imagem: null,
  },
  {
    id: 'hotel-fes',
    nome: 'Hotel Descanso — Trabalho Interdisciplinar',
    inicio: '2024-07',
    fim: '2024-07',
    descricao: {
      pt: 'Trabalho interdisciplinar entre Fundamentos de Engenharia de Software e AEDS I: o mesmo sistema hoteleiro acompanhado de documentação das funcionalidades, planejamento e implementação de casos de teste automatizados.',
      en: 'Interdisciplinary assignment across Software Engineering Fundamentals and Data Structures I: the same hotel system accompanied by feature documentation, test planning and automated test cases.',
    },
    tecnologias: ['C', 'Testes automatizados'],
    github: 'https://github.com/viniciusoramos/Hotel_Descanso_Fundamentos_Eng_Software',
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
    id: 'pedidos-produtos',
    nome: 'Pedidos e Produtos',
    inicio: '2025-08',
    fim: '2025-08',
    descricao: {
      pt: 'Exercício de orientação a objetos em Java com herança entre produtos comuns e perecíveis, montagem de pedidos e carga dos dados a partir de arquivos CSV.',
      en: 'Object-oriented Java exercise with inheritance between regular and perishable products, order composition and data loading from CSV files.',
    },
    tecnologias: ['Java', 'CSV'],
    github: 'https://github.com/viniciusoramos/teste1',
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
