import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Experiencias from './pages/Experiencias'
import Contato from './pages/Contato'
import NaoEncontrada from './pages/NaoEncontrada'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Sobre />} />
            <Route path="projetos" element={<Projetos />} />
            <Route path="experiencias" element={<Experiencias />} />
            <Route path="contato" element={<Contato />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
