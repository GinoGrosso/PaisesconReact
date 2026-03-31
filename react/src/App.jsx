import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Recientes from './pages/Recientes.jsx';
import PaisDetail from './pages/PaisDetail.jsx';  
import NotFound from './pages/NotFound.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recientes" element={<Recientes />} />
        <Route path="/pais/:cca3" element={<PaisDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
