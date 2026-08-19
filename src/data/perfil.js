// Dados pessoais preenchidos. ⚠️ Pendentes: tagline, sobre[pt|en] e habilidades.
export const perfil = {
  nome: 'Vinícius Oliveira Ramos',
  iniciais: 'VR',
  cargo: {
    pt: 'Engenharia de Software · 6º período · PUC Minas',
    en: 'Software Engineering · 6th term · PUC Minas',
  },
  tagline: {
    pt: 'Construindo software com foco em qualidade e experiência do usuário.',
    en: 'Building software with a focus on quality and user experience.',
  },
  local: 'Belo Horizonte, MG — Brasil',
  sobre: {
    pt: [
      'Parágrafo 1 — formação: onde estuda, qual período, o que já cursou.',
      'Parágrafo 2 — área de atuação e interesses técnicos.',
      'Parágrafo 3 — objetivos profissionais para os próximos anos.',
    ],
    en: [
      'Paragraph 1 — education: where you study, current term, coursework.',
      'Paragraph 2 — field of work and technical interests.',
      'Paragraph 3 — professional goals for the coming years.',
    ],
  },
  habilidades: [
    { grupo: 'Linguagens', itens: ['Java', 'JavaScript', 'Python', 'SQL'] },
    { grupo: 'Front-end', itens: ['React', 'HTML', 'CSS', 'Tailwind'] },
    { grupo: 'Back-end', itens: ['Node.js', 'Spring Boot', 'REST'] },
    { grupo: 'Ferramentas', itens: ['Git', 'Docker', 'Figma', 'VS Code'] },
  ],
}
