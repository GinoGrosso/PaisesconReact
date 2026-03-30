import { createContext, useState, useEffect } from "react";

export const PaisesRecientesContext = createContext();

export function PaisesRecientesProvider({ children }) {
  const [paisesRecientes, setPaisesRecientes] = useState([]);

  useEffect(() => {
    const localStorageKey = "paisesRecientes";
    const paisesRecientesString = localStorage.getItem(localStorageKey);
    if (paisesRecientesString) {
      const paisesRecientes = JSON.parse(paisesRecientesString);
      setPaisesRecientes(paisesRecientes);
    }
  }, []);

  const agregarPaisReciente = (cca3) => {
    const paisesRecientes = [...state.paisesRecientes, cca3];
    localStorage.setItem(
      "paisesRecientes",
      JSON.stringify(paisesRecientes)
    );
  };
  const limpiarRecientes = () => {
    localStorage.removeItem("paisesRecientes");
    setPaisesRecientes([]);
  };

  return (
    <PaisesRecientesContext.Provider value={{ paisesRecientes, agregarPaisReciente, limpiarRecientes }}>
      {children}
    </PaisesRecientesContext.Provider>
  );
}
