import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './componentes/menu'
import Aleatorio from './componentes/aleatorios'
import Capturados from './componentes/capturados'
import Favoritos from './componentes/favoritos'
import Listas from './componentes/listas'
import Bromas from './componentes/bromas'
import Usuario from './componentes/usuario'
import './componentes/menu/style.css'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Listas />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/capturados' element={<Capturados />} />
        <Route path='/aleatorios' element={<Aleatorio />} />
        <Route path='/bromas' element={<Bromas />} />
      </Routes>
    </Router>
  )
}

export default App
