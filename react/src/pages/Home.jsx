import { useState, useEffect } from "react";
import PaisCard from "../components/PaisCard.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
function Home() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [continentes, setContinentes] = useState([]);
  const [idiomas, setIdiomas] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [continente, setContinente] = useState("");
  const [idioma, setIdioma] = useState("");
  const handleFilterChange = (nuevosFiltros) => {};
  useEffect(()=>{
    fetch('http://localhost:3000/api/continentes')
      .then((response) => response.json())
      .then((data) => {
        setContinentes(data.continentes);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch('http://localhost:3000/api/idiomas')
      .then((response) => response.json())
      .then((data) => {
        setIdiomas(data.idiomas);
      })
      .catch((error) => {
        console.error(error);
      });
  } , []);
  useEffect(() => {
    let url = `http://localhost:3000/api/paises?`;
    const params = [];
    if (continente) params.push(`continente=${encodeURIComponent(continente)}`);
    if (idioma) params.push(`idioma=${encodeURIComponent(idioma)}`);
    if (buscar) params.push(`buscar=${encodeURIComponent(buscar)}`);
    url += params.join("&");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPaises(data.paises);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  }, [continente, idioma, buscar]);
  const onContinenteChange = (value) => {
    setContinente(value);
  };
  const onIdiomaChange = (value) => {
    setIdioma(value);
  };
  const onBuscarChange = (value) => {
    setBuscar(value);
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage message="Error al cargar los países" />;
  }
  return (
    <div className="home">
      <div className="container">
       <Header />
    <main className="main">
      <section id="home-page" className="page active">
        <div className="container">
          <div className="filters">
            <select id="filter-continente" className="filter-select" onChange={(e) => onContinenteChange(e.target.value)}>
              <option value="">Todos los continentes</option>
              {continentes.map((continente) => (
                <option value={continente} key={continente}>
                  {continente}
                </option>
              ))}
            </select>
            <select id="filter-idioma" className="filter-select" onChange={(e) => onIdiomaChange(e.target.value)}>
              <option value="">Todos los idiomas</option>
              {idiomas.map((idioma) => (
                <option value={idioma} key={idioma}>
                  {idioma}
                </option>
              ))}
            </select>
            <input
              onChange={(e) => onBuscarChange(e.target.value)}
              type="text"
              id="search-input"
              className="search-input"
              placeholder="Buscar país..."
            />
          </div>
          <div id="paises-container" className="paises-grid">
            {paises.map((pais) => (
              <PaisCard key={pais.cca3} pais={pais} />
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
      </div>
    </div>
  );
}

export default Home;
