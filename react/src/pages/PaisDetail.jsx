<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import { PaisesRecientesContext } from "../context/PaisesRecientesContext.jsx";
function PaisDetail() {
  const navigate = useNavigate();
  const [pais, setPais] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {cca3} = useParams();
  const { agregarPaisReciente } = useContext(PaisesRecientesContext);
  const nombreComun = pais.nombre?.común || "Sin nombre";
  const nombreOficial = pais.nombre?.oficial || "";
  const region = pais.región || "N/A";
  const subregion = pais.subregión || "N/A";
  const poblacion = pais.población;
  const bandera = pais.banderas?.png || "https://via.placeholder.com/400x300?text=Sin+Bandera";
  const banderaAlt = pais.banderas?.alt || "";
  
  // Procesar idiomas
  const idiomasObj = pais.idiomas || {};
=======
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
function PaisDetail() {
  const navigate = useNavigate();
  const { cca3 } = useParams();
  const [pais, setPais] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const nombreComun = pais?.nombre?.común || "Sin nombre";
  const nombreOficial = pais?.nombre?.oficial || "";
  const region = pais?.región || "N/A";
  const subregion = pais?.subregión || "N/A";
  const poblacion = pais?.población;
  const bandera = pais?.banderas?.png || "https://via.placeholder.com/400x300?text=Sin+Bandera";
  const banderaAlt = pais?.banderas?.alt || "";
  
  // Procesar idiomas
  const idiomasObj = pais?.idiomas || {};
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
  const idiomas = Object.entries(idiomasObj).map(([codigo, nombre]) => ({
    codigo,
    nombre: typeof nombre === "string" ? nombre : String(nombre),
  }));

  // Procesar monedas
  const monedas = [];
<<<<<<< HEAD
  const monedasObj = pais.monedas || {};
=======
  const monedasObj = pais?.monedas || {};
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
  Object.entries(monedasObj).forEach(([codigo, info]) => {
    if (info && typeof info === "object") {
      monedas.push({
        codigo,
        nombre: info.nombre || codigo,
        simbolo: info.símbolo || "",
      });
    }
  });

<<<<<<< HEAD
  // Capital
  const capital = Array.isArray(pais.capital) ? pais.capital.join(", ") : (pais.capital || "N/A");
=======
  
// Capital
const capital = Array.isArray(pais?.capital) ? pais?.capital.join(", ") : (pais?.capital || "N/A");
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
  // Formatear población
function formatPoblacion(poblacion) {
  if (!poblacion) return "N/A";
  return new Intl.NumberFormat("es-ES").format(poblacion);
}
<<<<<<< HEAD
=======

>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
  useEffect(() => {
    fetch(`http://localhost:3000/api/paises/${cca3}`)
      .then((response) => response.json())
      .then((data) => {
        setPais(data.pais);
<<<<<<< HEAD
        agregarPaisReciente(cca3);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
=======
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
      });
  }, [cca3]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
<<<<<<< HEAD
    return <ErrorMessage message="Error al cargar el país" />;
  }
  return (
      <section id="detalle-page" >
        <div className="container">
          <button id="back-btn" className="back-btn" onClick={()=>navigate('/')}>← Volver al catálogo</button>
          <div id="detalle-container">
             <div className="detalle-header">
=======
    return <ErrorMessage message={error} />;
  }
  return (
    <section id="detalle-page" >
        <div className="container">
          <button id="back-btn" className="back-btn" onClick={()=>navigate('/')}>← Volver al catálogo</button>
          <div id="detalle-container">
              <div className="detalle-header">
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
            <div className="detalle-image">
                <img src={bandera} alt={nombreComun} />
            </div>
            <div className="detalle-info">
                <h2>{nombreComun}</h2>
<<<<<<< HEAD
                <p style={{color: "#666", marginBottom: "1rem"}}>{nombreOficial}</p>
=======
                <p style={{color:  "#666", marginBottom: "1rem"}}>{nombreOficial}</p>
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
                <div className="detalle-meta">
                    <span>🌍 <strong>Región:</strong> {region}</span>
                    <span>📍 <strong>Subregión:</strong> {subregion}</span>
                    <span>🏛️ <strong>Capital:</strong> {capital}</span>
                    <span>👥 <strong>Población:</strong> {formatPoblacion(poblacion)}</span>
                </div>
            </div>
        </div>

        {
          idiomas.length > 0
            ? 
        <div className="detalle-section">
            <h3>Idiomas</h3>
            <ul className="info-list">
<<<<<<< HEAD
                {idiomas
                  .map(
                    (idioma) => 
=======
                {idiomas.map((idioma) => 
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
                    <li><strong>{idioma.codigo.toUpperCase()}:</strong> {idioma.nombre}</li>
                
                  )}
            </ul>
        </div>
        
            : ""
        }

        {
          monedas.length > 0
            ? 
        <div className="detalle-section">
            <h3>Monedas</h3>
            <ul className="info-list">
<<<<<<< HEAD
                {monedas
                  .map(
                    (moneda) => 
                    <li><strong>{moneda.codigo}:</strong> {moneda.nombre} {moneda.simbolo ? `(${moneda.simbolo})` : ""}</li>
                  )}
            </ul>
        </div>
=======
                {monedas.map((moneda) => 
                    <li><strong>{moneda.codigo}:</strong> {moneda.nombre} {moneda.simbolo ? `(${moneda.simbolo})` : ""}</li>
                
                  )}
            </ul>
        </div>
        
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
            : ""
        }

        {
          banderaAlt
            ? 
        <div className="detalle-section">
            <h3>Información de la Bandera</h3>
            <div className="descripcion">{banderaAlt}</div>
        </div>
<<<<<<< HEAD
=======
        
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
            : ""
        }
          </div>
        </div>
      </section>
  )
}

export default PaisDetail

