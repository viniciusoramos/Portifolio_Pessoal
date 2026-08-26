import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { perfil } from '../data/perfil'
import SectionHeader from '../components/SectionHeader'

export default function Sobre() {
  const { lang, t } = useLang()

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-app py-20 sm:py-28">
          <div className="animate-fadeUp">
            <p className="mb-3 font-mono text-sm text-accent2">{perfil.cargo[lang]}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{perfil.nome}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{perfil.tagline[lang]}</p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} /> {perfil.local}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projetos" className="btn-primary">
                {t.hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link to="/contato" className="btn-ghost">
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="container-app py-16">
        <SectionHeader titulo={t.sobre.titulo} />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted">
            {perfil.sobre[lang].map((paragrafo, i) => (
              <p key={i}>{paragrafo}</p>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.sobre.habilidades}
            </h2>
            <div className="space-y-5">
              {perfil.habilidades.map((h) => (
                <div key={h.grupo.pt}>
                  <p className="mb-2 font-mono text-xs text-accent2">{h.grupo[lang]}</p>
                  <div className="flex flex-wrap gap-2">
                    {/* nomes próprios ficam como string; expressões vêm em { pt, en } */}
                    {h.itens.map((item) => {
                      const rotulo = typeof item === 'string' ? item : item[lang]
                      return (
                        <span key={rotulo} className="tag">
                          {rotulo}
                        </span>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
