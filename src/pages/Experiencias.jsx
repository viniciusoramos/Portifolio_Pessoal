import { Building2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { experiencias } from '../data/experiencias'
import SectionHeader from '../components/SectionHeader'

export default function Experiencias() {
  const { lang, t } = useLang()

  return (
    <section className="container-app py-16">
      <SectionHeader titulo={t.experiencias.titulo} subtitulo={t.experiencias.subtitulo} />

      <div className="space-y-5">
        {experiencias.map((e) => (
          <article key={e.id} className="card animate-fadeUp p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Building2 size={18} className="text-accent" />
                  {e.empresa}
                </h2>
                <p className="mt-1 text-sm text-accent2">{e.cargo[lang]}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                <span className="font-mono text-xs text-muted">{e.periodo}</span>
                <span className="tag">{e.tipo}</span>
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
    </section>
  )
}
