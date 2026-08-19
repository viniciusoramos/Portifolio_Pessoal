import { createContext, useContext, useState } from 'react'
import { textos } from '../data/textos'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')

  const toggleLang = () => setLang((atual) => (atual === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: textos[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang precisa estar dentro de <LanguageProvider>')
  return ctx
}
