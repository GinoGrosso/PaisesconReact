import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import PaisCard from "../components/PaisCard";
import { useState, useEffect } from "react";
function Home() {
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    fetch('http://localhost:3000/api/idiomas')
      .then((response) => response.json())
      .then((data) => {
        setIdiomas(data.idiomas);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  },[]);
  const onContinenteChange = (value) => {
    setContinente(value);
  };
  const onIdiomaChange = (value) => {
    setIdioma(value);
  };
  const onBuscarChange = (value) => {
    setBuscar(value);
  };
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
        setError(error);
        setLoading(false);
      });
  }, [continente, idioma, buscar]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className="home">
      <div className="container">
        <Header />
    <main className="main">
      <section id="home-page" className="page active">
        <div className="container">
          <div className="filters">
            <select id="filter-continente" className="filter-select" onChange={(e)=>onContinenteChange(e.target.value)}>
              <option value="">Todos los continentes</option>
                    {continentes.map((continente) => (
                      <option value={continente}>{continente}</option>
                    ))}
            </select>
            <select id="filter-idioma" className="filter-select" onChange={(e)=>onIdiomaChange(e.target.value)}>
              <option value="">Todos los idiomas</option>
                    {idiomas.map((idioma) => (
                      <option value={idioma}>{idioma}</option>
                    ))}
            </select>
            <input
              onChange={(e)=>onBuscarChange(e.target.value)}
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
