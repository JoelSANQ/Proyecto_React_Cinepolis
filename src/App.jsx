import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './pages/Home.css'


// Componentes 
import Header from "./components/Header"
// Importamos el nuevo componente (Asegúrate de haberlo creado como CarritoGlobal.jsx)
import { CarritoGlobal } from "./components/Carrito"
import Footer from "./components/Footer"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Comida from "./pages/Food"
import Membresia from "./pages/membresia"
import Palomitas from "./pages/Detalle_Palomitas"
import Refrescos from "./pages/Detalle_Refrescos"
import Combos from "./pages/Detalle_Combos"
import Dulces from "./pages/Detalle_Dulces"

function App() {
  // Estado para el carrito acumulativo (pop-up)
  const [carrito, setCarrito] = useState([])

  // Función para agregar productos al carrito desde cualquier vista
  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto])
  }

  return (
    // Contenedor raíz de la aplicación 
    <div style={{ minHeight: "100vh" }}>
      {/* Header global */}
      <Header />

      {/* Definición de Rutas */}
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

      {/* Footer global en todas las secciones */}
      <Footer />

      {/* COMPONENTE CARRITO GLOBAL (POP-UP) */}
      {/* Se mantiene accesible en todas las vistas si hay productos */}
      <CarritoGlobal
        listaProductos={carrito}
        setListaProductos={setCarrito}
      />
    </div>
  )
}

// Exportamos App
export default App
