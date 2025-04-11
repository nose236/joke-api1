import { Link } from 'react-router-dom'
import './style.css'

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/">Listas</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/usuario">Usuario</Link>
      <Link to="/capturados">Capturados</Link>
      <Link to="/aleatorios">Aleatorios</Link>
      <Link to="/bromas">Bromas</Link>
    </nav>
  )
}

export default Menu
