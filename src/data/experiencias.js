// ⚠️ PLACEHOLDER — substituir pelas experiências reais.
// A ordem do array não importa: a página ordena pelo campo `inicio`, da mais
// recente para a mais antiga.
//
// `tipo` precisa ser uma das chaves de textos[lang].experiencias.tipos:
//   'estagio' | 'clt' | 'freelance' | 'openSource' | 'evento'
// O rótulo exibido sai traduzido conforme o idioma ativo.
export const experiencias = [
  {
    id: 'exp-1',
    empresa: 'Nome da Empresa / Instituição',
    cargo: { pt: 'Cargo ou atividade', en: 'Role or activity' },
    inicio: '2025-03',
    fim: null,
    tipo: 'estagio',
    descricao: {
      pt: 'Breve descrição das responsabilidades e resultados.',
      en: 'Brief description of responsibilities and results.',
    },
    tecnologias: ['Java', 'Git'],
  },
  {
    id: 'exp-2',
    empresa: 'Nome do Evento / Projeto Open Source',
    cargo: { pt: 'Participação', en: 'Participation' },
    inicio: '2024-10',
    fim: '2024-10',
    tipo: 'evento',
    descricao: {
      pt: 'Breve descrição da participação.',
      en: 'Brief description of the participation.',
    },
    tecnologias: [],
  },
]
