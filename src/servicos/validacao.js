// Regras de validação do formulário de contato.
// Ficam fora do componente para poderem ser testadas isoladamente; as mensagens
// chegam por parâmetro, já no idioma ativo, para não fixar português aqui.
export const LIMITES = {
  nomeMin: 2,
  nomeMax: 80,
  emailMax: 120,
  assuntoMax: 120,
  mensagemMin: 10,
  mensagemMax: 1000,
}

const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Devolve a mensagem de erro do campo, ou null quando está válido.
export function validarCampo(campo, valor, erros) {
  const v = (valor ?? '').trim()

  if (campo === 'nome') {
    if (!v) return erros.nomeVazio
    if (v.length < LIMITES.nomeMin) return erros.nomeCurto
    return null
  }

  if (campo === 'email') {
    if (!v) return erros.emailVazio
    if (v.length > LIMITES.emailMax || !FORMATO_EMAIL.test(v)) return erros.emailInvalido
    return null
  }

  // O assunto vem pré-preenchido pelo perfil e é opcional: só valida o tamanho.
  if (campo === 'assunto') {
    if (v.length > LIMITES.assuntoMax) return erros.assuntoLongo
    return null
  }

  if (campo === 'mensagem') {
    if (!v) return erros.mensagemVazia
    if (v.length < LIMITES.mensagemMin) return erros.mensagemCurta
    if (v.length > LIMITES.mensagemMax) return erros.mensagemLonga
    return null
  }

  return null
}

// Valida os três campos de uma vez. Devolve { campo: mensagem } só com os inválidos.
export function validarFormulario(valores, erros) {
  const encontrados = {}
  for (const campo of ['nome', 'email', 'assunto', 'mensagem']) {
    const erro = validarCampo(campo, valores[campo], erros)
    if (erro) encontrados[campo] = erro
  }
  return encontrados
}
