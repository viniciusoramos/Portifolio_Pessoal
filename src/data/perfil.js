// ⚠️ Os três parágrafos de `sobre` são um rascunho escrito a partir do que
// você contou — revise e ajuste o que não estiver do seu jeito.
// ⚠️ `habilidades` ainda é placeholder: confirme quais linguagens e ferramentas
// você realmente usa antes de mostrar em aula.
export const perfil = {
  nome: 'Vinícius Oliveira Ramos',
  iniciais: 'VR',
  cargo: {
    pt: 'Engenharia de Software · 6º período · PUC Minas',
    en: 'Software Engineering · 6th term · PUC Minas',
  },
  tagline: {
    pt: 'Automação de processos e análise de dados aplicadas a problemas reais.',
    en: 'Process automation and data analysis applied to real-world problems.',
  },
  local: 'Belo Horizonte, MG — Brasil',
  sobre: {
    pt: [
      'Sou estudante de Engenharia de Software na PUC Minas, atualmente no 6º período, em Belo Horizonte.',
      'Meu contato mais próximo com a prática veio do estágio na CPMH, onde trabalhei com automação de relatórios, elaboração de documentos de apoio ao cirurgião e análise de malhas e segmentações 3D. Foi ali que se firmaram meus interesses: automação de processos, processamento de dados e imagens, e software aplicado à área da saúde.',
      'Busco atuar no desenvolvimento de software que resolva problemas concretos, unindo automação e análise de dados. No curto prazo, quero aprofundar a experiência prática em desenvolvimento e me consolidar como engenheiro de software.',
    ],
    en: [
      'I am a Software Engineering student at PUC Minas, currently in my 6th term, based in Belo Horizonte, Brazil.',
      'My closest contact with practice came from an internship at CPMH, where I worked on report automation, producing support documents for surgeons, and analysing 3D meshes and segmentations. That is where my interests took shape: process automation, data and image processing, and software applied to healthcare.',
      'I want to build software that solves concrete problems, combining automation and data analysis. In the short term, my goal is to deepen my hands-on development experience and establish myself as a software engineer.',
    ],
  },
  habilidades: [
    { grupo: 'Linguagens', itens: ['Java', 'JavaScript', 'Python', 'SQL'] },
    { grupo: 'Front-end', itens: ['React', 'HTML', 'CSS', 'Tailwind'] },
    { grupo: 'Back-end', itens: ['Node.js', 'Spring Boot', 'REST'] },
    { grupo: 'Ferramentas', itens: ['Git', 'Docker', 'Figma', 'VS Code'] },
  ],
}
