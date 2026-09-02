import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Github } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { usePerfil } from '../context/PerfilContext'
import { contatos } from '../data/contatos'
import { perfil } from '../data/perfil'
import SectionHeader from '../components/SectionHeader'

export default function Sobre() {
  const { lang, t } = useLang()
  const { perfilAtivo } = usePerfil()

  // RF05: o perfil escolhe a frase do hero e a chamada para ação principal.
  const frase = perfilAtivo.hero.frase ? perfilAtivo.hero.frase[lang] : perfil.tagline[lang]
  const canalGithub = contatos.find((c) => c.id === 'github')

  const ctas = {
    projetos: { to: '/projetos', rotulo: t.hero.cta1, externo: false },
    contato: { to: '/contato', rotulo: t.hero.cta2, externo: false },
    github: { to: canalGithub ? canalGithub.href : '/projetos', rotulo: 'GitHub', externo: true },
  }
  const ctaPrimario = ctas[perfilAtivo.hero.ctaPrimario] ?? ctas.projetos
  // o secundário é sempre o outro caminho interno, para não repetir o mesmo botão
  const ctaSecundario = ctaPrimario.to === '/contato' ? ctas.projetos : ctas.contato

  // RF05: ordem dos blocos e dos grupos de habilidade vem do perfil.
  const blocos = perfilAtivo.ordemBlocosSobre
    .map((chave) => ({ chave, texto: perfil.sobre[chave] }))
    .filter((b) => b.texto)

  const habilidades = perfilAtivo.ordemGruposHabilidade
    .map((chave) => perfil.habilidades.find((h) => h.chave === chave))
    .filter(Boolean)

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-app py-20 sm:py-28">
          <div className="animate-fadeUp">
            <p className="mb-3 font-mono text-sm text-accent2">{perfil.cargo[lang]}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{perfil.nome}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{frase}</p>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} /> {perfil.local}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {ctaPrimario.externo ? (
                <a href={ctaPrimario.to} target="_blank" rel="noreferrer" className="btn-primary">
                  <Github size={16} /> {ctaPrimario.rotulo}
                </a>
              ) : (
                <Link to={ctaPrimario.to} className="btn-primary">
                  {ctaPrimario.rotulo} <ArrowRight size={16} />
                </Link>
              )}
              <Link to={ctaSecundario.to} className="btn-ghost">
                {ctaSecundario.rotulo}
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
            {blocos.map((b) => (
              <p key={b.chave}>{b.texto[lang]}</p>
            ))}
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.sobre.habilidades}
            </h2>
            <div className="space-y-5">
              {habilidades.map((h) => (
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
