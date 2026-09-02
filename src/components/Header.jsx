import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Languages, UserCog } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { usePerfil } from '../context/PerfilContext'
import { perfil } from '../data/perfil'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const { lang, t, toggleLang } = useLang()
  const { perfilAtivo } = usePerfil()

  const links = [
    { to: '/', label: t.nav.sobre, end: true },
    { to: '/projetos', label: t.nav.projetos },
    { to: '/experiencias', label: t.nav.experiencias },
    { to: '/contato', label: t.nav.contato },
  ]

  // RF04: mostra o perfil ativo e leva à tela de seleção para trocá-lo
  const IndicadorPerfil = ({ className = '' }) => (
    <NavLink
      to="/perfil"
      onClick={() => setAberto(false)}
      title={t.perfilUI.trocar}
      className={
        'flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent ' +
        className
      }
    >
      <UserCog size={14} />
      <span className="text-muted/70">{t.perfilUI.vendoComo}:</span>
      <span className="font-semibold">{perfilAtivo.rotulo[lang]}</span>
    </NavLink>
  )

  const estiloLink = ({ isActive }) =>
    [
      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
      isActive ? 'text-accent' : 'text-muted hover:text-fg',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setAberto(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-white">
            {perfil.iniciais}
          </span>
          <span className="hidden font-semibold sm:block">{perfil.nome}</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={estiloLink}>
              {l.label}
            </NavLink>
          ))}
          <IndicadorPerfil className="ml-2 hidden lg:flex" />
          <button
            onClick={toggleLang}
            className="ml-2 flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Alternar idioma"
          >
            <Languages size={14} />
            {t.idioma}
          </button>
        </nav>

        <button
          className="rounded-md p-2 text-muted hover:text-fg md:hidden"
          onClick={() => setAberto((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-line bg-surface md:hidden">
          <div className="container-app flex flex-col py-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={estiloLink}
                onClick={() => setAberto(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <IndicadorPerfil className="mt-3 self-start" />
            <button
              onClick={toggleLang}
              className="mt-2 flex items-center gap-1.5 self-start rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted"
            >
              <Languages size={14} />
              {t.idioma}
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
