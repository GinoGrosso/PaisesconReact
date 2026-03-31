import { createContext, useState, useEffect } from "react";

export const PaisesRecientesContext = createContext();

export function PaisesRecientesProvider({ children }) {
  const [paisesRecientes, setPaisesRecientes] = useState([]);
  useEffect(() => {
    const paisesRecientes = localStorage.getItem("paisesRecientes") || "[]";
    setPaisesRecientes(JSON.parse(paisesRecientes));
  }, []);
  const agregarPaisReciente = (cca3) => {
    const paisesRecientes = JSON.parse(localStorage.getItem("paisesRecientes") || "[]");
    paisesRecientes.unshift(cca3);
    localStorage.setItem("paisesRecientes", JSON.stringify(paisesRecientes));
    setPaisesRecientes(paisesRecientes);
  };

  const limpiarRecientes = () => {
    localStorage.setItem("paisesRecientes", JSON.stringify([]));
    setPaisesRecientes([]);
  };

  return (
    <PaisesRecientesContext.Provider value={{ paisesRecientes, agregarPaisReciente, limpiarRecientes }}>
      {children}
    </PaisesRecientesContext.Provider>
  );
}
