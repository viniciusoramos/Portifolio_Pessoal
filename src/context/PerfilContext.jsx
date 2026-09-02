import { createContext, useContext, useEffect, useState } from 'react'
import { perfis, acharPerfil, PERFIL_PADRAO } from '../data/perfis'

const PerfilContext = createContext(null)

const CHAVE_STORAGE = 'portfolio:perfil'

// RNF08: em aba anônima ou com storage bloqueado, o site continua funcionando —
// a escolha vale só para a sessão, em memória.
function lerStorage() {
  try {
    return window.localStorage.getItem(CHAVE_STORAGE)
  } catch {
    return null
  }
}

function gravarStorage(id) {
  try {
    window.localStorage.setItem(CHAVE_STORAGE, id)
  } catch {
    // storage indisponível: segue apenas em memória
  }
}

// RF12 / RN04: ?perfil=<id> tem precedência sobre o perfil salvo.
// Ids inválidos são ignorados. O parâmetro é removido da URL depois de aplicado.
function lerParametroUrl() {
  try {
    const id = new URLSearchParams(window.location.search).get('perfil')
    return acharPerfil(id) ? id : null
  } catch {
    return null
  }
}

function limparParametroUrl() {
  try {
    const url = new URL(window.location.href)
    if (!url.searchParams.has('perfil')) return
    url.searchParams.delete('perfil')
    window.history.replaceState({}, '', url.pathname + url.search + url.hash)
  } catch {
    // nada a fazer: o parâmetro sobra na URL, sem efeito colateral
  }
}

export function PerfilProvider({ children }) {
  const [idPerfil, setIdPerfil] = useState(() => {
    const daUrl = lerParametroUrl()
    if (daUrl) return daUrl
    const salvo = lerStorage()
    return acharPerfil(salvo) ? salvo : null
  })

  // null significa "ainda não escolheu" — é o que dispara a tela de seleção (RF01)
  const escolheu = idPerfil !== null

  useEffect(() => {
    const daUrl = lerParametroUrl()
    if (daUrl) {
      gravarStorage(daUrl)
      limparParametroUrl()
    }
  }, [])

  const definirPerfil = (id) => {
    const valido = acharPerfil(id) ? id : PERFIL_PADRAO
    setIdPerfil(valido)
    gravarStorage(valido)
  }

  // Sem escolha vale o perfil padrão (RN03), para que as páginas nunca fiquem
  // sem configuração enquanto a tela de seleção não é respondida.
  const perfilAtivo = acharPerfil(idPerfil) ?? acharPerfil(PERFIL_PADRAO)

  return (
    <PerfilContext.Provider value={{ perfilAtivo, perfis, escolheu, definirPerfil }}>
      {children}
    </PerfilContext.Provider>
  )
}

export function usePerfil() {
  const ctx = useContext(PerfilContext)
  if (!ctx) throw new Error('usePerfil precisa estar dentro de <PerfilProvider>')
  return ctx
}
