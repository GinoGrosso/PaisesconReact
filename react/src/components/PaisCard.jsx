import { useNavigate } from "react-router-dom";
function PaisCard({ pais }) {
<<<<<<< HEAD
  const nombre = pais.nombre?.común || "Sin nombre";
  const region = pais.región || "Sin región";
  const idiomas = pais.idiomas || {};
  const idiomasLista = Object.values(idiomas).join(", ") || "Sin idiomas";
  const poblacion = pais.población;
  const bandera = pais.banderas?.png || "https://via.placeholder.com/300x200?text=Sin+Bandera";
  const navigate = useNavigate();
  const handleClick = () => {
=======
   const nombre = pais.nombre?.común || "Sin nombre";
   const region = pais.región || "Sin región";
   const idiomas = pais.idiomas || {};
   const idiomasLista = Object.values(idiomas).join(", ") || "Sin idiomas";
   const poblacion = pais.población;
   const bandera = pais.banderas?.png || "https://via.placeholder.com/300x200?text=Sin+Bandera";
   const navigate = useNavigate();
   const handleClick = () => {
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
    navigate(`/pais/${pais.cca3}`);
  };
  // Formatear población
function formatPoblacion(poblacion) {
  if (!poblacion) return "N/A";
  return new Intl.NumberFormat("es-ES").format(poblacion);
}
<<<<<<< HEAD
=======

>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
  return <div className="pais-card" onClick={handleClick}>
            <img src={bandera} alt={nombre} />
            <div className="pais-card-content">
                <h3>{nombre}</h3>
                <div className="pais-meta">
                    <span>🌍 {region}</span>
                    <span>🗣️ {idiomasLista}</span>
                    <span>👥 {formatPoblacion(poblacion)}</span>
                </div>
            </div>
        </div>
}

export default PaisCard;
