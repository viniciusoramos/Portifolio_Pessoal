// A ordem do array não importa: a página ordena pelo campo `inicio`, da mais
// recente para a mais antiga.
//
// `tipo` precisa ser uma das chaves de textos[lang].experiencias.tipos:
//   'estagio' | 'clt' | 'freelance' | 'openSource' | 'evento'
export const experiencias = [
  {
    id: 'cpmh',
    empresa: 'CPMH',
    // `ramo` é opcional: descreve o que a instituição faz, exibido em linha
    // discreta abaixo do nome. Omita o campo quando não fizer sentido.
    ramo: {
      pt: 'Implantes personalizados · impressão 3D em titânio',
      en: 'Custom implants · 3D printing in titanium',
    },
    cargo: { pt: 'Estagiário', en: 'Intern' },
    // ⚠️ PREENCHER: mês e ano de início e de fim, no formato 'AAAA-MM'.
    // Use fim: null se o estágio ainda estiver em andamento.
    inicio: null,
    fim: null,
    tipo: 'estagio',
    descricao: {
      pt: 'Acompanhamento e otimização do fluxo de trabalho de projetos personalizados, com ênfase na automação de relatórios e na elaboração de documentos de apoio ao cirurgião. Atuação também na comparação de malhas e segmentações entre diferentes softwares e no suporte à movimentação, avaliação e análise de casos de deformidades dentoesqueléticas.',
      en: 'Monitoring and optimising the workflow of custom projects, with emphasis on report automation and on producing support documents for the surgeon. Also worked on comparing meshes and segmentations across different software packages, and supported the positioning, evaluation and analysis of dentoskeletal deformity cases.',
    },
    tecnologias: [],
  },
]
