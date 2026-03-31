<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { Link } from "react-router-dom"
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-brand">
          <h1 className="logo">🌍 Atlas Digital</h1>
          <p className="slogan">Explora el mundo desde tu pantalla</p>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-btn">Inicio</Link>
          <Link to="/recientes" className="nav-btn">Recientes</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

