// Ponto único de envio da mensagem de contato.
//
// Usa o Web3Forms: a mensagem sai do navegador do visitante direto para a API
// deles, que encaminha por e-mail. Não há back-end nem servidor próprio, o que
// mantém a hospedagem estática.
//
// A access key é pública por definição — o Web3Forms a expõe no HTML de
// qualquer formulário e ela só serve para identificar o destinatário, não dá
// acesso a nada. Por isso fica versionada aqui. Para trocá-la sem alterar o
// código, defina VITE_WEB3FORMS_KEY no ambiente (Netlify → Site settings →
// Environment variables) que o valor do .env tem precedência.
const CHAVE = import.meta.env.VITE_WEB3FORMS_KEY || 'bd4e9454-f72d-4118-a93e-7a2259a8b544'

const ENDPOINT = 'https://api.web3forms.com/submit'

export async function enviarMensagem({ nome, email, mensagem, armadilha }) {
  // campo-armadilha: fica escondido no formulário, então só um robô o preenche
  if (armadilha) return { ok: true }

  try {
    const resposta = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: CHAVE,
        name: nome,
        email,
        message: mensagem,
        subject: 'Contato pelo portfolio - ' + nome,
        from_name: 'Portfolio',
      }),
    })

    const dados = await resposta.json()
    return { ok: Boolean(dados.success) }
  } catch {
    // rede fora do ar, DNS bloqueado, CORS — o componente mostra o e-mail direto
    return { ok: false }
  }
}
