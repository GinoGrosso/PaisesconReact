<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Recientes from './pages/Recientes.jsx';
import PaisDetail from './pages/PaisDetail.jsx';  
import NotFound from './pages/NotFound.jsx';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recientes from './pages/Recientes';
import PaisDetail from './pages/PaisDetail';
import NotFound from './pages/NotFound';
>>>>>>> 819fd524eee68cb344fb7676482b3efe54a84869
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
