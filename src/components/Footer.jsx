import { Github, Linkedin, Mail } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { perfil } from '../data/perfil'
import { contatos } from '../data/contatos'

const icones = { github: Github, linkedin: Linkedin, email: Mail }

export default function Footer() {
  const { t } = useLang()
  const sociais = contatos.filter((c) => icones[c.id])

  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-app flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {perfil.nome}. {t.footer.direitos}
        </p>
        <div className="flex items-center gap-3">
          {sociais.map((c) => {
            const Icone = icones[c.id]
            return (
              <a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                aria-label={c.label}
                className="rounded-md border border-line p-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icone size={18} />
              </a>
            )
          })}
        </div>
      </div>
      <div className="container-app pb-6">
        <p className="text-center font-mono text-xs text-muted/60 sm:text-left">{t.footer.feito}</p>
      </div>
    </footer>
  )
}
