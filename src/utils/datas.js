// Formatação e ordenação de períodos.
// As datas ficam em 'AAAA-MM' nos arquivos de dados; o rótulo exibido é gerado
// aqui, já no idioma ativo. Assim a timeline se ordena sozinha e nenhum período
// precisa ser escrito duas vezes (uma em português, outra em inglês).
const MESES = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

// 'AAAA-MM' vira um número comparável (meses desde o ano zero).
// Data ausente significa "em andamento", então vai para o fim da ordenação.
export function ordinal(iso) {
  if (!iso) return Number.POSITIVE_INFINITY
  const [ano, mes] = iso.split('-').map(Number)
  return ano * 12 + (mes - 1)
}

export function formatarMes(iso, lang) {
  if (!iso) return ''
  const [ano, mes] = iso.split('-').map(Number)
  return MESES[lang][mes - 1] + ' ' + ano
}

// fim nulo significa que o projeto ou a experiência continua em andamento
export function formatarPeriodo(inicio, fim, lang, rotuloAtual) {
  const de = formatarMes(inicio, lang)
  const ate = fim ? formatarMes(fim, lang) : rotuloAtual
  if (!de) return ate
  return de === ate ? de : de + ' — ' + ate
}

export function ordenarPorInicio(itens, direcao = 'asc') {
  const sinal = direcao === 'asc' ? 1 : -1
  return [...itens].sort((a, b) => (ordinal(a.inicio) - ordinal(b.inicio)) * sinal)
}
