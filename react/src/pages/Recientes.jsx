import { useContext, useState, useEffect } from "react";
import PaisCard from "../components/PaisCard.jsx";
import { PaisesRecientesContext } from "../context/PaisesRecientesContext.jsx";

function Recientes() {
  const { paisesRecientes } = useContext(PaisesRecientesContext);
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const cargarPaisesRecientes = async () => {

      const paisesPromises = paisesRecientes.map((cca3) =>
        fetch(`http://localhost:3000/api/paises/${cca3}`)
          .then((r) => r.json())
          .catch((err) => {
            console.error(`Error cargando país ${cca3}:`, err);
            return { success: false };
          })
      );

      const resultados = await Promise.all(paisesPromises);
      const paises = resultados.filter((r) => r.success).map((r) => r.pais);
      setPaises(paises);
    };

    cargarPaisesRecientes();
  }, [paisesRecientes]);

  return (
    <section id="recientes-page">
      <div className="container">
        <h2 className="page-title">Países Recientes</h2>

        <div id="paises-container" className="paises-grid">
          {paises.map((pais) => (
            <PaisCard key={pais.cca3} pais={pais} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Recientes;