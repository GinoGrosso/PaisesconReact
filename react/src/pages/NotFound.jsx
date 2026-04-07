import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

function NotFound() {
  return (
    <div className="not-found">
      <Header />
      <main className="main">
        <div className="error-404">
          <div className="error-content">
            <div className="error-emoji">🌍</div>

            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Página no encontrada</h2>

            <p className="error-message-text">
              Parece que este país se perdió en el mapa 🗺️<br />
              La página que buscas no existe o ha sido movida a otro lugar.
            </p>

            <div className="error-actions">
              <Link to="/" className="btn-home">🏠 Volver al Inicio</Link>
            </div>

            <div className="geography-icons">
              <span>🗺️</span>
              <span>🌎</span>
              <span>🏛️</span>
              <span>🌐</span>
              <span>📍</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
