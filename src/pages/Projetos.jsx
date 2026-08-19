import { Github, ExternalLink } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { projetos } from '../data/projetos'
import SectionHeader from '../components/SectionHeader'

export default function Projetos() {
  const { lang, t } = useLang()

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.projetos.titulo} subtitulo={t.projetos.subtitulo} />

      <ol className="relative border-l border-line pl-6 sm:pl-10">
        {projetos.map((p) => (
          <li key={p.id} className="relative mb-12 last:mb-0 animate-fadeUp">
            <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-accent ring-4 ring-bg sm:-left-[47px]" />
            <p className="mb-2 font-mono text-xs text-accent2">{p.periodo}</p>

            <article className="card overflow-hidden">
              <div className="aspect-[16/9] w-full border-b border-line bg-elevated">
                {/* Sprint 03: substituir por <img src={p.imagem} /> */}
                <div className="grid h-full place-items-center font-mono text-xs text-muted/50">
                  {t.projetos.preview} — {p.imagem}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold">{p.nome}</h2>
                <p className="mt-2 text-muted">{p.descricao[lang]}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tecnologias.map((tec) => (
                    <span key={tec} className="tag">
                      {tec}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                  >
                    <Github size={16} /> {t.projetos.repositorio}
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} /> {t.projetos.demo}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
