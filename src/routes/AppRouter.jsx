import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Vistas
import Home from "../pages/Home"
import Cartelera from "../pages/Cartelera"
import Detalle from "../pages/Detalle"
import Comida from "../pages/Comida"
import Membresia from "../pages/Membresia"
import Palomitas from "../pages/Detalle_Palomitas"
import Refrescos from "../pages/Detalle_Refrescos"
import Combos from "../pages/Detalle_Combos"
import Dulces from "../pages/Detalle_Dulces"

const AppRouter = ({ agregarAlCarrito }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="/comida" element={<Comida />} />
      <Route path="/membresia" element={<Membresia />} />

      {/* Rutas de productos de comida */}
      <Route path="/comida/palomitas" element={<Palomitas onAgregar={agregarAlCarrito} />} />
      <Route path="/comida/refrescos" element={<Refrescos onAgregar={agregarAlCarrito} />} />
      <Route path="/comida/combos" element={<Combos onAgregar={agregarAlCarrito} />} />
      <Route path="/comida/dulces" element={<Dulces onAgregar={agregarAlCarrito} />} />
    </Routes>
  );
};

export default AppRouter;
