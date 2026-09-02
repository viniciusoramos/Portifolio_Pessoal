import { useMemo, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { projetos } from '../data/projetos'
import { ordenarPorInicio, formatarPeriodo } from '../utils/datas'
import SectionHeader from '../components/SectionHeader'
import Filtros from '../components/Filtros'

export default function Projetos() {
  const { lang, t } = useLang()
  const [tecnologia, setTecnologia] = useState(null)

  // A timeline se ordena sozinha pela data de início, do mais antigo ao mais
  // recente, como o enunciado pede. A ordem do array de dados é irrelevante.
  const ordenados = useMemo(() => ordenarPorInicio(projetos, 'asc'), [])

  // As opções de filtro saem das tecnologias que realmente aparecem nos projetos.
  const tecnologias = useMemo(() => {
    const unicas = new Set(ordenados.flatMap((p) => p.tecnologias))
    return [...unicas].sort((a, b) => a.localeCompare(b)).map((tec) => ({ valor: tec, rotulo: tec }))
  }, [ordenados])

  const visiveis = useMemo(
    () => (tecnologia ? ordenados.filter((p) => p.tecnologias.includes(tecnologia)) : ordenados),
    [ordenados, tecnologia],
  )

  const contador = visiveis.length === 1 ? t.projetos.contador.um : t.projetos.contador.varios

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.projetos.titulo} subtitulo={t.projetos.subtitulo} />

      <Filtros
        rotulo={t.comum.filtrarPor}
        opcoes={tecnologias}
        ativo={tecnologia}
        aoSelecionar={setTecnologia}
        rotuloTodos={t.comum.todos}
      />

      <p aria-live="polite" className="mb-8 font-mono text-xs text-muted">
        {visiveis.length} {contador}
      </p>

      {visiveis.length === 0 ? (
        <p className="card p-8 text-center text-muted">{t.projetos.vazio}</p>
      ) : (
        <ol className="relative border-l border-line pl-6 sm:pl-10">
          {visiveis.map((p) => (
            <li key={p.id} className="relative mb-12 animate-fadeUp last:mb-0">
              <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-accent ring-4 ring-bg sm:-left-[47px]" />

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <p className="font-mono text-xs text-accent2">
                  {formatarPeriodo(p.inicio, p.fim, lang, t.comum.atual)}
                </p>
                {p.fim === null && (
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {t.projetos.emAndamento}
                  </span>
                )}
              </div>

              <article className="card overflow-hidden">
                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-semibold">{p.nome}</h2>
                  <p className="mt-2 text-muted">{p.descricao[lang]}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tecnologias.map((tec) => (
                      <span key={tec} className={tec === tecnologia ? 'tag border-accent text-accent' : 'tag'}>
                        {tec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    {/* nem todo projeto tem repositório público */}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                      >
                        <Github size={16} /> {t.projetos.repositorio}
                      </a>
                    )}
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
      )}
    </section>
  )
}
