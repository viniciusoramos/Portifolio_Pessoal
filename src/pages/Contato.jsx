import { useRef, useState } from 'react'
import { Mail, MessageCircle, Linkedin, Github, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { contatos } from '../data/contatos'
import { validarCampo, validarFormulario, LIMITES } from '../servicos/validacao'
import { enviarMensagem } from '../servicos/envio'
import SectionHeader from '../components/SectionHeader'

const icones = { email: Mail, whatsapp: MessageCircle, linkedin: Linkedin, github: Github }

const VAZIO = { nome: '', email: '', mensagem: '', armadilha: '' }

export default function Contato() {
  const { t } = useLang()
  const f = t.contato.form

  const [valores, setValores] = useState(VAZIO)
  const [erros, setErros] = useState({})
  const [tocados, setTocados] = useState({})
  const [status, setStatus] = useState(null)
  const [enviando, setEnviando] = useState(false)

  // usados para levar o foco ao primeiro campo invalido
  const refNome = useRef(null)
  const refEmail = useRef(null)
  const refMensagem = useRef(null)
  const referencias = { nome: refNome, email: refEmail, mensagem: refMensagem }

  const aoMudar = (campo) => (evento) => {
    const valor = evento.target.value
    setValores((atual) => ({ ...atual, [campo]: valor }))
    // so revalida enquanto digita se o campo ja errou uma vez, para nao acusar
    // erro logo no primeiro caractere
    if (tocados[campo]) {
      setErros((atual) => ({ ...atual, [campo]: validarCampo(campo, valor, f.erros) }))
    }
  }

  const aoSair = (campo) => () => {
    setTocados((atual) => ({ ...atual, [campo]: true }))
    setErros((atual) => ({ ...atual, [campo]: validarCampo(campo, valores[campo], f.erros) }))
  }

  const aoEnviar = async (evento) => {
    evento.preventDefault()

    const encontrados = validarFormulario(valores, f.erros)
    setTocados({ nome: true, email: true, mensagem: true })
    setErros(encontrados)

    const invalidos = Object.keys(encontrados)
    if (invalidos.length > 0) {
      setStatus('revise')
      const primeiro = referencias[invalidos[0]].current
      if (primeiro) primeiro.focus()
      return
    }

    setEnviando(true)
    const resultado = await enviarMensagem(valores)
    setEnviando(false)

    if (resultado.ok) {
      setStatus('sucesso')
      setValores(VAZIO)
      setTocados({})
      setErros({})
    } else {
      setStatus('erro')
    }
  }

  const restantes = LIMITES.mensagemMax - valores.mensagem.length

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.contato.titulo} subtitulo={t.contato.subtitulo} />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Icones / canais */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contatos.map((c) => {
            const Icone = icones[c.id] ?? Mail
            return (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card flex animate-fadeUp items-center gap-4 p-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-elevated text-accent">
                  <Icone size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{c.label}</span>
                  <span className="block truncate text-sm text-muted">{c.valor}</span>
                </span>
              </a>
            )
          })}
        </div>

        {/* Formulario */}
        <form onSubmit={aoEnviar} noValidate className="card animate-fadeUp p-6">
          <h2 className="mb-5 text-lg font-semibold">{f.titulo}</h2>

          {/* campo-armadilha contra robôs: invisível e fora da ordem de foco */}
          <input
            type="text"
            name="armadilha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={valores.armadilha}
            onChange={aoMudar('armadilha')}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm text-muted">
                {f.nome}
              </label>
              <input
                ref={refNome}
                id="nome"
                name="nome"
                type="text"
                value={valores.nome}
                onChange={aoMudar('nome')}
                onBlur={aoSair('nome')}
                maxLength={LIMITES.nomeMax}
                placeholder={f.placeholderNome}
                aria-invalid={Boolean(erros.nome)}
                aria-describedby={erros.nome ? 'erro-nome' : undefined}
                className={erros.nome ? 'campo campo-invalido' : 'campo'}
              />
              {erros.nome && (
                <p id="erro-nome" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
                  <AlertCircle size={13} /> {erros.nome}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                {f.email}
              </label>
              <input
                ref={refEmail}
                id="email"
                name="email"
                type="email"
                value={valores.email}
                onChange={aoMudar('email')}
                onBlur={aoSair('email')}
                maxLength={LIMITES.emailMax}
                placeholder={f.placeholderEmail}
                aria-invalid={Boolean(erros.email)}
                aria-describedby={erros.email ? 'erro-email' : undefined}
                className={erros.email ? 'campo campo-invalido' : 'campo'}
              />
              {erros.email && (
                <p id="erro-email" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
                  <AlertCircle size={13} /> {erros.email}
                </p>
              )}
            </div>

            <div>
              <div className="mb-1.5 flex items-baseline justify-between gap-3">
                <label htmlFor="mensagem" className="block text-sm text-muted">
                  {f.mensagem}
                </label>
                <span
                  className={
                    restantes < 50 ? 'font-mono text-xs text-danger' : 'font-mono text-xs text-muted/60'
                  }
                >
                  {restantes} {f.caracteres}
                </span>
              </div>
              <textarea
                ref={refMensagem}
                id="mensagem"
                name="mensagem"
                rows={5}
                value={valores.mensagem}
                onChange={aoMudar('mensagem')}
                onBlur={aoSair('mensagem')}
                maxLength={LIMITES.mensagemMax}
                placeholder={f.placeholderMensagem}
                aria-invalid={Boolean(erros.mensagem)}
                aria-describedby={erros.mensagem ? 'erro-mensagem' : undefined}
                className={erros.mensagem ? 'campo campo-invalido resize-y' : 'campo resize-y'}
              />
              {erros.mensagem && (
                <p id="erro-mensagem" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
                  <AlertCircle size={13} /> {erros.mensagem}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="btn-primary mt-6 w-full justify-center disabled:opacity-60"
          >
            <Send size={16} /> {enviando ? f.enviando : f.enviar}
          </button>

          {/* regiao viva: leitores de tela anunciam o resultado do envio */}
          <div aria-live="polite" className="mt-3">
            {status === 'sucesso' && (
              <p className="flex items-start gap-2 text-xs text-success">
                <CheckCircle2 size={14} className="mt-px shrink-0" /> {f.status.sucesso}
              </p>
            )}
            {status === 'erro' && (
              <p className="flex items-start gap-2 text-xs text-danger">
                <AlertCircle size={14} className="mt-px shrink-0" /> {f.status.erro}
              </p>
            )}
            {status === 'revise' && (
              <p className="flex items-start gap-2 text-xs text-danger">
                <AlertCircle size={14} className="mt-px shrink-0" /> {f.status.revise}
              </p>
            )}
          </div>

          <p className="mt-3 text-center font-mono text-xs text-muted/60">{f.aviso}</p>
        </form>
      </div>
    </section>
  )
}
