import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <section className="container-app grid place-items-center py-32 text-center">
      <p className="font-mono text-6xl font-bold text-accent">404</p>
      <p className="mt-4 text-muted">Página não encontrada.</p>
      <Link to="/" className="btn-ghost mt-8">
        Voltar ao início
      </Link>
    </section>
  )
}
