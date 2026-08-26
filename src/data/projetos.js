// ⚠️ PLACEHOLDER — substituir pelos projetos reais.
// A ordem deste array não importa: a timeline se ordena sozinha pelo campo
// `inicio`, do mais antigo para o mais recente.
//
// Campos por projeto:
//   id          identificador único (usado como key do React)
//   nome        nome do projeto
//   inicio      'AAAA-MM' — início
//   fim         'AAAA-MM' ou null quando ainda está em andamento
//   descricao   { pt, en } — o que faz e qual problema resolve
//   tecnologias array de strings; alimenta os filtros da página
//   github      URL do repositório
//   demo        URL do site publicado, ou null
//   imagem      caminho em public/ (Sprint 03), ou null
export const projetos = [
  {
    id: 'projeto-1',
    nome: 'Nome do Projeto 1',
    inicio: '2024-01',
    fim: '2024-03',
    descricao: {
      pt: 'Descrição curta do que o projeto faz e qual problema resolve.',
      en: 'Short description of what the project does and the problem it solves.',
    },
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
    github: 'https://github.com/usuario/projeto-1',
    demo: null,
    imagem: null,
  },
  {
    id: 'projeto-2',
    nome: 'Nome do Projeto 2',
    inicio: '2025-08',
    fim: '2025-11',
    descricao: {
      pt: 'Descrição curta do projeto 2.',
      en: 'Short description of project 2.',
    },
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/usuario/projeto-2',
    demo: 'https://projeto-2.vercel.app',
    imagem: null,
  },
  {
    id: 'projeto-3',
    nome: 'Nome do Projeto 3',
    inicio: '2026-02',
    fim: null,
    descricao: {
      pt: 'Descrição curta do projeto 3.',
      en: 'Short description of project 3.',
    },
    tecnologias: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/usuario/projeto-3',
    demo: null,
    imagem: null,
  },
]
