import { createContext, useState, useEffect } from "react";

export const PaisesRecientesContext = createContext();

export function PaisesRecientesProvider({ children }) {
  const [paisesRecientes, setPaisesRecientes] = useState([]);
<<<<<<< HEAD
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
=======

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
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
    setPaisesRecientes([]);
  };

  return (
    <PaisesRecientesContext.Provider value={{ paisesRecientes, agregarPaisReciente, limpiarRecientes }}>
      {children}
    </PaisesRecientesContext.Provider>
  );
}
