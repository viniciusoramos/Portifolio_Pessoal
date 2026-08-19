import { Mail, MessageCircle, Linkedin, Github, Send } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { contatos } from '../data/contatos'
import SectionHeader from '../components/SectionHeader'

const icones = { email: Mail, whatsapp: MessageCircle, linkedin: Linkedin, github: Github }

export default function Contato() {
  const { t } = useLang()
  const f = t.contato.form

  // Sprint 02: integrar envio real de e-mail
  const aoEnviar = (evento) => {
    evento.preventDefault()
    alert(f.aviso)
  }

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.contato.titulo} subtitulo={t.contato.subtitulo} />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Ícones / canais */}
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

        {/* Formulário */}
        <form onSubmit={aoEnviar} className="card animate-fadeUp p-6">
          <h2 className="mb-5 text-lg font-semibold">{f.titulo}</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm text-muted">
                {f.nome}
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder={f.placeholderNome}
                className="w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                {f.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={f.placeholderEmail}
                className="w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="mb-1.5 block text-sm text-muted">
                {f.mensagem}
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder={f.placeholderMensagem}
                className="w-full resize-y rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full justify-center">
            <Send size={16} /> {f.enviar}
          </button>

          <p className="mt-3 text-center font-mono text-xs text-muted/60">{f.aviso}</p>
        </form>
      </div>
    </section>
  )
}
