// Ponto único de envio da mensagem de contato.
//
// Hoje monta um link mailto: e abre o aplicativo de e-mail do visitante com o
// assunto e o corpo já preenchidos. Não exige back-end, conta nem chave de API.
//
// Para trocar por envio automático (Web3Forms, EmailJS ou uma função serverless
// na Vercel), basta reescrever o corpo desta função mantendo a assinatura e o
// formato de retorno — nenhuma página precisa mudar.
export async function enviarMensagem({ nome, email, mensagem }, { destino }) {
  if (!destino) return { ok: false }

  const assunto = 'Contato pelo portfolio - ' + nome
  const corpo = ['Nome: ' + nome, 'E-mail: ' + email, '', mensagem].join('\n')
  const url =
    'mailto:' + destino +
    '?subject=' + encodeURIComponent(assunto) +
    '&body=' + encodeURIComponent(corpo)

  try {
    window.location.href = url
    return { ok: true }
  } catch {
    return { ok: false }
  }
}
