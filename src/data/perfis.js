// Perfis de acesso — ver docs/perfis-de-acesso.md
//
// O perfil escolhido pelo visitante NÃO esconde nada: todo o conteúdo continua
// visível em qualquer perfil (RF10 / RN01). O que muda é ordem, ênfase, chamada
// para ação e o assunto sugerido no formulário.
//
// Para ajustar o comportamento de um perfil, edite só este arquivo (RF14).
//
// Campos:
//   id                     usado no localStorage e em ?perfil=<id>
//   icone                  chave do mapa de ícones em SelecaoPerfil.jsx
//   rotulo                 { pt, en } — título do cartão de seleção
//   descricao              { pt, en } — linha de apoio do cartão
//   hero.frase             { pt, en } ou null para usar a tagline padrão
//   hero.ctaPrimario       'projetos' | 'contato' | 'github'
//   ordemBlocosSobre       ordem dos parágrafos de perfil.sobre
//   ordemGruposHabilidade  ordem das chaves de perfil.habilidades
//   tagsDestaque.projetos      projetos com estas tags recebem "Destaque"
//   tagsDestaque.experiencias  experiências com estas tags recebem "Destaque"
//   ordemContato           ordem dos canais na página de contato
//   assuntoSugerido        { pt, en } — pré-preenche o campo Assunto

export const PERFIL_PADRAO = 'geral'

export const perfis = [
  {
    id: 'geral',
    icone: 'bussola',
    rotulo: { pt: 'Visitante geral', en: 'General visitor' },
    descricao: {
      pt: 'Visão equilibrada do portfólio.',
      en: 'A balanced view of the portfolio.',
    },
    hero: { frase: null, ctaPrimario: 'projetos' },
    ordemBlocosSobre: ['formacao', 'atuacao', 'objetivos'],
    ordemGruposHabilidade: ['planejamento', 'linguagens', 'web', 'ferramentas'],
    tagsDestaque: { projetos: [], experiencias: [] },
    ordemContato: ['email', 'whatsapp', 'linkedin', 'github'],
    assuntoSugerido: { pt: '', en: '' },
  },
  {
    id: 'recrutador',
    icone: 'maleta',
    rotulo: { pt: 'Recrutador / Empresa', en: 'Recruiter / Company' },
    descricao: {
      pt: 'Experiências, habilidades e contato rápido em evidência.',
      en: 'Experience, skills and quick contact up front.',
    },
    hero: {
      frase: {
        pt: 'Busco atuar no desenvolvimento de software que una automação e análise de dados. Aberto a oportunidades.',
        en: 'Looking to work on software that brings together automation and data analysis. Open to opportunities.',
      },
      ctaPrimario: 'contato',
    },
    ordemBlocosSobre: ['atuacao', 'objetivos', 'formacao'],
    ordemGruposHabilidade: ['planejamento', 'web', 'linguagens', 'ferramentas'],
    tagsDestaque: { projetos: ['profissional'], experiencias: ['profissional', 'freelance'] },
    ordemContato: ['linkedin', 'email', 'whatsapp', 'github'],
    assuntoSugerido: { pt: 'Oportunidade de vaga', en: 'Job opportunity' },
  },
  {
    id: 'professor',
    icone: 'formatura',
    rotulo: { pt: 'Professor / Avaliador', en: 'Professor / Reviewer' },
    descricao: {
      pt: 'Formação, projetos acadêmicos e repositórios em evidência.',
      en: 'Education, academic projects and repositories up front.',
    },
    hero: {
      frase: {
        pt: 'Estudante de Engenharia de Software na PUC Minas, no 6º período, com trabalhos em sistemas operacionais, estruturas de dados e projeto de software.',
        en: 'Software Engineering student at PUC Minas, 6th term, with coursework in operating systems, data structures and software design.',
      },
      ctaPrimario: 'projetos',
    },
    ordemBlocosSobre: ['formacao', 'atuacao', 'objetivos'],
    ordemGruposHabilidade: ['linguagens', 'ferramentas', 'planejamento', 'web'],
    tagsDestaque: { projetos: ['academico'], experiencias: ['academico', 'evento'] },
    ordemContato: ['email', 'github', 'linkedin', 'whatsapp'],
    assuntoSugerido: { pt: 'Avaliação do portfólio', en: 'Portfolio review' },
  },
  {
    id: 'dev',
    icone: 'codigo',
    rotulo: { pt: 'Desenvolvedor / Comunidade', en: 'Developer / Community' },
    descricao: {
      pt: 'Stack, GitHub e projetos com código aberto em evidência.',
      en: 'Stack, GitHub and open-source projects up front.',
    },
    hero: {
      frase: {
        pt: 'Construo com React, Python e C — de automação em Blender a simuladores de sistemas operacionais.',
        en: 'I build with React, Python and C — from Blender automation to operating-system simulators.',
      },
      ctaPrimario: 'github',
    },
    ordemBlocosSobre: ['atuacao', 'objetivos', 'formacao'],
    ordemGruposHabilidade: ['web', 'linguagens', 'ferramentas', 'planejamento'],
    tagsDestaque: { projetos: ['open-source'], experiencias: ['freelance', 'open-source'] },
    ordemContato: ['github', 'email', 'linkedin', 'whatsapp'],
    assuntoSugerido: { pt: 'Colaboração em projeto', en: 'Project collaboration' },
  },
]

export function acharPerfil(id) {
  return perfis.find((p) => p.id === id) ?? null
}
