import { useMemo, useState } from 'react'
import { Building2, Star } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { usePerfil } from '../context/PerfilContext'
import { experiencias } from '../data/experiencias'
import { ordenarPorInicio, formatarPeriodo } from '../utils/datas'
import SectionHeader from '../components/SectionHeader'
import Filtros from '../components/Filtros'

export default function Experiencias() {
  const { lang, t } = useLang()
  const { perfilAtivo } = usePerfil()
  const [tipo, setTipo] = useState(null)

  // Da mais recente para a mais antiga, que é a leitura esperada de um currículo.
  const ordenadas = useMemo(() => ordenarPorInicio(experiencias, 'desc'), [])

  // Só entram no filtro os tipos que aparecem nos dados, na ordem em que a
  // pessoa os viveu, e com o rótulo traduzido para o idioma ativo.
  const tipos = useMemo(() => {
    const presentes = [...new Set(ordenadas.map((e) => e.tipo))]
    return presentes.map((chave) => ({ valor: chave, rotulo: t.experiencias.tipos[chave] ?? chave }))
  }, [ordenadas, t])

  const visiveis = useMemo(
    () => (tipo ? ordenadas.filter((e) => e.tipo === tipo) : ordenadas),
    [ordenadas, tipo],
  )

  const contador = visiveis.length === 1 ? t.experiencias.contador.um : t.experiencias.contador.varios

  // RF08: marcação por perfil; a lista continua completa (RF10)
  const tagsPerfil = perfilAtivo.tagsDestaque.experiencias
  const ehDestaque = (exp) => tagsPerfil.some((tag) => (exp.tags ?? []).includes(tag))

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.experiencias.titulo} subtitulo={t.experiencias.subtitulo} />

      <Filtros
        rotulo={t.comum.filtrarPor}
        opcoes={tipos}
        ativo={tipo}
        aoSelecionar={setTipo}
        rotuloTodos={t.comum.todos}
      />

      <p aria-live="polite" className="mb-8 font-mono text-xs text-muted">
        {visiveis.length} {contador}
      </p>

      {visiveis.length === 0 ? (
        <p className="card p-8 text-center text-muted">{t.experiencias.vazio}</p>
      ) : (
        <div className="space-y-5">
          {visiveis.map((e) => (
            <article
              key={e.id}
              className={
                ehDestaque(e)
                  ? 'card animate-fadeUp border-accent/50 p-5 sm:p-6'
                  : 'card animate-fadeUp p-5 sm:p-6'
              }
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <Building2 size={18} className="shrink-0 text-accent" />
                    {e.empresa}
                  </h2>
                  {e.ramo && <p className="mt-0.5 text-xs text-muted">{e.ramo[lang]}</p>}
                  <p className="mt-1 text-sm text-accent2">{e.cargo[lang]}</p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end">
                  <span className="font-mono text-xs text-muted">
                    {formatarPeriodo(e.inicio, e.fim, lang, t.comum.atual)}
                  </span>
                  <span className="tag">{t.experiencias.tipos[e.tipo] ?? e.tipo}</span>
                  {ehDestaque(e) && (
                    <span className="flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                      <Star size={10} /> {t.perfilUI.destaque}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-muted">{e.descricao[lang]}</p>

              {e.tecnologias.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.tecnologias.map((tec) => (
                    <span key={tec} className="tag">
                      {tec}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
