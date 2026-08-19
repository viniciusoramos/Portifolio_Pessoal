export default function SectionHeader({ titulo, subtitulo }) {
  return (
    <div className="mb-10 animate-fadeUp">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {titulo}
        <span className="text-accent">.</span>
      </h1>
      {subtitulo && <p className="mt-2 max-w-2xl text-muted">{subtitulo}</p>}
      <div className="mt-5 h-px w-16 bg-accent" />
    </div>
  )
}
