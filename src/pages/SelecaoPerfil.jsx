import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Compass, Briefcase, GraduationCap, Code2, Languages, Check } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { usePerfil } from '../context/PerfilContext'
import { perfil } from '../data/perfil'
import { PERFIL_PADRAO } from '../data/perfis'

const icones = { bussola: Compass, maleta: Briefcase, formatura: GraduationCap, codigo: Code2 }

export default function SelecaoPerfil() {
  const { lang, t, toggleLang } = useLang()
  const { perfis, perfilAtivo, escolheu, definirPerfil } = usePerfil()
  const navegar = useNavigate()
  const local = useLocation()

  // Ao trocar de perfil, o atual já vem marcado (UC03, passo 2).
  const [selecionado, setSelecionado] = useState(escolheu ? perfilAtivo.id : null)

  // Para onde voltar depois de escolher: a página que o visitante tentou abrir.
  const destino = local.state?.de ?? '/'

  const concluir = (id) => {
    definirPerfil(id)
    navegar(destino, { replace: true })
  }

  // RF13 / UC01-A3: Esc equivale a continuar sem escolher.
  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === 'Escape') concluir(PERFIL_PADRAO)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  })

  const p = t.perfilUI

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-line">
        <div className="container-app flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-white">
              {perfil.iniciais}
            </span>
            <span className="hidden font-semibold sm:block">{perfil.nome}</span>
          </div>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Alternar idioma"
          >
            <Languages size={14} />
            {t.idioma}
          </button>
        </div>
      </header>

      <main
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-perfil"
        className="container-app flex flex-1 flex-col justify-center py-16"
      >
        <div className="mx-auto w-full max-w-3xl animate-fadeUp">
          <h1 id="titulo-perfil" className="text-center text-2xl font-bold sm:text-3xl">
            {p.titulo}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted">{p.subtitulo}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {perfis.map((op) => {
              const Icone = icones[op.icone] ?? Compass
              const marcado = selecionado === op.id
              return (
                <button
                  key={op.id}
                  type="button"
                  onClick={() => setSelecionado(op.id)}
                  onDoubleClick={() => concluir(op.id)}
                  aria-pressed={marcado}
                  className={[
                    'card flex items-start gap-4 p-5 text-left transition-colors',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                    marcado ? 'border-accent bg-accent/5' : '',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'grid h-11 w-11 shrink-0 place-items-center rounded-lg',
                      marcado ? 'bg-accent text-white' : 'bg-elevated text-accent',
                    ].join(' ')}
                  >
                    {marcado ? <Check size={20} /> : <Icone size={20} />}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{op.rotulo[lang]}</span>
                    <span className="mt-1 block text-sm text-muted">{op.descricao[lang]}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => concluir(PERFIL_PADRAO)}
              className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-fg"
            >
              {p.pular}
            </button>
            <button
              type="button"
              disabled={!selecionado}
              onClick={() => concluir(selecionado)}
              className="btn-primary w-full justify-center disabled:opacity-40 sm:w-auto"
            >
              {p.confirmar}
            </button>
          </div>

          <p className="mt-6 text-center font-mono text-xs text-muted/60">{p.nota}</p>
        </div>
      </main>
    </div>
  )
}
