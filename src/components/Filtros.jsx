// Barra de filtros por chip, compartilhada entre Projetos e Experiências.
// As opções são derivadas dos próprios dados — não existe lista fixa em lugar
// nenhum, então adicionar um projeto com uma tecnologia nova já cria o filtro.
export default function Filtros({ rotulo, opcoes, ativo, aoSelecionar, rotuloTodos }) {
  // com uma opção só não há o que filtrar
  if (opcoes.length < 2) return null

  const chip = (selecionado) =>
    [
      'rounded-full border px-3 py-1.5 font-mono text-xs transition-colors',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      selecionado
        ? 'border-accent bg-accent/10 text-accent'
        : 'border-line text-muted hover:border-accent/50 hover:text-fg',
    ].join(' ')

  return (
    <div className="mb-8">
      <p className="mb-2.5 font-mono text-xs uppercase tracking-wider text-muted/70">{rotulo}</p>
      <div role="group" aria-label={rotulo} className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => aoSelecionar(null)}
          aria-pressed={ativo === null}
          className={chip(ativo === null)}
        >
          {rotuloTodos}
        </button>
        {opcoes.map((o) => (
          <button
            key={o.valor}
            type="button"
            onClick={() => aoSelecionar(o.valor)}
            aria-pressed={ativo === o.valor}
            className={chip(ativo === o.valor)}
          >
            {o.rotulo}
          </button>
        ))}
      </div>
    </div>
  )
}
