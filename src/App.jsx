import React, { useState } from 'react';
import './styles/App.css'
import './styles/Home.css'

// Componentes 
import Header from "./components/Header"
import { CarritoGlobal } from "./components/Carrito"
import Footer from "./components/Footer"

// Routing
import AppRouter from './routes/AppRouter';

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
      <AppRouter agregarAlCarrito={agregarAlCarrito} />

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
