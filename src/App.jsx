import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { PerfilProvider, usePerfil } from './context/PerfilContext'
import Layout from './components/Layout'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Experiencias from './pages/Experiencias'
import Contato from './pages/Contato'
import SelecaoPerfil from './pages/SelecaoPerfil'
import NaoEncontrada from './pages/NaoEncontrada'

// RF01: sem perfil salvo, qualquer rota leva à tela de seleção — guardando de
// onde o visitante veio, para devolvê-lo ao mesmo lugar depois de escolher.
function ExigePerfil({ children }) {
  const { escolheu } = usePerfil()
  const local = useLocation()

  if (!escolheu) {
    return <Navigate to="/perfil" state={{ de: local.pathname + local.search }} replace />
  }
  return children
}

export default function App() {
  return (
    <LanguageProvider>
      <PerfilProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/perfil" element={<SelecaoPerfil />} />
            <Route
              element={
                <ExigePerfil>
                  <Layout />
                </ExigePerfil>
              }
            >
              <Route index element={<Sobre />} />
              <Route path="projetos" element={<Projetos />} />
              <Route path="experiencias" element={<Experiencias />} />
              <Route path="contato" element={<Contato />} />
              <Route path="*" element={<NaoEncontrada />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PerfilProvider>
    </LanguageProvider>
  )
}
