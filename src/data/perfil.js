// ⚠️ Os três parágrafos de `sobre` são um rascunho escrito a partir do que
// você contou — revise e ajuste o que não estiver do seu jeito.
export const perfil = {
  nome: 'Vinícius Oliveira Ramos',
  iniciais: 'VR',
  cargo: {
    pt: 'Engenharia de Software · 6º período · PUC Minas',
    en: 'Software Engineering · 6th term · PUC Minas',
  },
  tagline: {
    pt: 'Engenharia de software aplicada ao planejamento cirúrgico virtual.',
    en: 'Software engineering applied to virtual surgical planning.',
  },
  local: 'Belo Horizonte, MG — Brasil',
  sobre: {
    pt: [
      'Sou estudante de Engenharia de Software na PUC Minas, atualmente no 6º período, em Belo Horizonte.',
      'Trabalho com planejamento cirúrgico virtual na CPMH, usando o Blender como uma das plataformas. A rotina envolve segmentação e comparação de malhas entre diferentes softwares, análise de casos de deformidades dentoesqueléticas e a automação dos relatórios e documentos de apoio ao cirurgião.',
      'Meu interesse está em unir esse domínio à engenharia de software: automatizar o que hoje é manual e transformar o conhecimento clínico em ferramentas confiáveis. No curto prazo, quero aprofundar a experiência prática em desenvolvimento e me consolidar como engenheiro de software.',
    ],
    en: [
      'I am a Software Engineering student at PUC Minas, currently in my 6th term, based in Belo Horizonte, Brazil.',
      'I work on virtual surgical planning at CPMH, using Blender as one of the platforms. The routine involves segmenting and comparing meshes across different software packages, analysing dentoskeletal deformity cases, and automating the reports and support documents handed to the surgeon.',
      'My interest lies in bringing that domain together with software engineering: automating what is manual today and turning clinical knowledge into reliable tools. In the short term, I want to deepen my hands-on development experience and establish myself as a software engineer.',
    ],
  },
  // Os itens podem ser uma string (nomes próprios, iguais nos dois idiomas) ou
  // um par { pt, en } quando forem expressões que precisam de tradução.
  habilidades: [
    {
      grupo: { pt: 'Planejamento cirúrgico virtual', en: 'Virtual surgical planning' },
      itens: [
        'Blender',
        { pt: 'Segmentação de imagens', en: 'Image segmentation' },
        { pt: 'Comparação de malhas', en: 'Mesh comparison' },
        { pt: 'Automação de relatórios', en: 'Report automation' },
      ],
    },
    {
      grupo: { pt: 'Linguagens', en: 'Languages' },
      itens: ['Python', 'Java', 'C', 'JavaScript', 'SQL'],
    },
    {
      grupo: { pt: 'Desenvolvimento web', en: 'Web development' },
      itens: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'HTML', 'CSS'],
    },
    {
      grupo: { pt: 'Ferramentas', en: 'Tools' },
      itens: ['Git', 'Maven', 'Make', 'PlantUML'],
    },
  ],
}
